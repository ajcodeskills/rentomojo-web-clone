import React from 'react';
import { Link } from 'react-router-dom';
import { ProductHeader } from '../Components/product/header/ProductHeader';
import { CategType } from '../Components/categType/CategType';
import axios from 'axios';
export function Electronics(){
    const [electronicsCateg, setElectronics] = React.useState([]);
    React.useEffect(() => {
        axios.get('/electronicsCateg')
            .then(res=>{
                console.log(res.data)
                setElectronics(res.data)
            })
    },[])
    const style = {
        marginTop: 60,
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
            <div style={style}>
                <ProductHeader navig = {<><Link to ="/" style = {style.link}>Home</Link>{`${'>'}`}<Link style = {style.navLink} to ="/electronics-on-rent">Electronics</Link></>}/>
            </div>
            <div>
                <div style = {style.heading}>Browse By Electronics Type</div>
                <div style ={style.categ}>
                    {
                        electronicsCateg?.map(item=><CategType type="electronics" name={item.categName} src={item.image} />)
                    }
                </div>
            </div>
            
        </>
    )
}