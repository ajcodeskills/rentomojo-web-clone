import React from 'react';
import { ProductHeader } from '../Components/product/header/ProductHeader';
import { Link } from 'react-router-dom';

export function FitnessProduct(){
    const style = {
        marginTop: 60,
        link : {
            textDecoration: "none",
            color: "#9E9E9E"

        },
        navLink: {
            color:"#6FD3D5",
            textDecoration: "none"
        }
    }
    return (
        <div style={style}>
            <ProductHeader navig = {<><Link to ="/" style = {style.link}>Home</Link>{`${'>'}`}<Link style = {style.navLink} to ="/fitness-on-rent">Fitness</Link></>}/>
        </div>
    )
}