import React from 'react';
import { Container } from './categ';
import { Link } from 'react-router-dom';

export function CategType({name, type,  src}) {
    const style = {

        image: {
            width: "100%",
            height: 130
        },
        title: {
           color: "black",
            width: 180,
            height: 40,
            border: "1px solid #E6E6E6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
            fontSize: "13px",
            position: "absolute",
            left: 35,
            right: 0,
            bottom:0,
        }
    }
    return (
        <Link to={`/${type}/${name}`}>
            <Container>
                <div>
                    <img src={src} alt={`${name}`} style = {style.image} />
                </div>
                <div style = {style.title}>{name}</div>
            </Container>
        </Link>
        
        
    )
}