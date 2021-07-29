import React from 'react';
import { ProductHeader } from '../Components/product/header/ProductHeader';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CategType } from '../Components/categType/CategType';
export function Appliances(){
    const [applianceCateg, setApplianceCateg] = React.useState([]);
    React.useEffect(() => {
        axios.get('/applianceCateg')
            .then(res=>{
                console.log(res.data)
                setApplianceCateg(res.data)
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
                <ProductHeader navig = {<><Link to ="/" style = {style.link}>Home</Link>{`${'>'}`}<Link style = {style.navLink} to ="/appliances-on-rent">Appliance</Link></>}/>
            </div>
            <div style = {style.heading}>Browse By Appliance Type</div>
            <div style ={style.categ}>
                {
                    applianceCateg?.map(item=><CategType key = {item._id} type="appliance" name={item.categName} src={item.image} />)
                }
            </div>
        </>
    )
}