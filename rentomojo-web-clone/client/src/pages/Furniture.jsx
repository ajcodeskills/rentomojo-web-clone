import React from 'react';
import { ProductHeader } from '../Components/product/header/ProductHeader';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CategType } from '../Components/categType/CategType';
export function Furniture(){
    const [furnitureCateg, setFurnitureCateg] = React.useState([])

    React.useEffect(() => {
        axios.get('/furnitureCateg')
            .then(res=>{
                // console.log(res.data)
                setFurnitureCateg(res.data)
            })
    },[])
    const style = {
        container: {
            marginTop: 60,
            
        },
        
        link : {
            textDecoration: "none",
            color: "#9E9E9E"

        },
        navLink: {
            color:"#6FD3D5",
            textDecoration: "none"
        },
        categ:{
            width:"85%",
            margin: "auto",
            display: "grid",
            gridTemplateRows:"auto",
            gridTemplateColumns:"auto auto auto auto",
            gap: 40
        },
        heading: {
            textAlign: "center",
            fontSize: 22,
            fontWeight: 400,
            color: "rgb(49, 49, 49)",
            padding: "100px 0 50px 0",
            zIndex: 1
        }
    }
    return (
        <>
            <div style={style.container}>
                <ProductHeader navig = {<><Link to ="/" style = {style.link}>Home</Link>{`${'>'}`}<Link style = {style.navLink} to ="/furniture-on-rent">Furniture</Link></>}/>
            </div>
            <div style = {style.heading}>Browse By Room Type</div>
            <div style ={style.categ}>
                {
                    furnitureCateg?.map(item=><CategType key = {item._id} type="furniture" name={item.categName} src={item.image} />)
                }
            </div>
            
        </>
    )
}