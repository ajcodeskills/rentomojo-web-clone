import React from 'react';
import { ProductHeader } from '../Components/product/header/ProductHeader';
import { Link } from 'react-router-dom';

export function PackagesProduct(){
    const style = {
        marginTop: 60,
        link : {
            textDecoration: "none",
            color: "#9E9E9E"

        },
        hover: {
            color: "red"
        },
        navLink: {
            color:"#6FD3D5",
            textDecoration: "none"
        }
    }
    return (
        <div style={style}>
            <ProductHeader navig = {<><Link to ="/" style = {style.link}>Home</Link>{`${'>'}`}<Link style = {style.navLink} to ="/packages-on-rent">Packages</Link></>}/>
        </div>
    )
}