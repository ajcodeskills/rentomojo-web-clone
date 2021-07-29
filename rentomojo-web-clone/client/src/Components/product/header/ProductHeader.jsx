import React from 'react';
import {Container, SubContainer1, SubContainer2} from './productHeaderStyle';
import { NavLink } from 'react-router-dom';

export function ProductHeader({navig}){
    const style = {
        textDecoration: "none",
        color: "#9E9E9E"
    }
    return (
        <Container>
            <SubContainer1>
                {navig}
            </SubContainer1>
            <SubContainer2>
                <NavLink to = "/packages-on-rent" style = {style}>Packages</NavLink>
                <NavLink to = "/furniture-on-rent" style = {style}>Furniture</NavLink>
                <NavLink to = "/appliances-on-rent" style = {style}>Appliances</NavLink>
                <NavLink to = "/electronics-on-rent" style = {style}>Electronics</NavLink>
                <NavLink to = "/fitness-on-rent" style = {style}>Fitness</NavLink>
            </SubContainer2>
        </Container>
    )
}