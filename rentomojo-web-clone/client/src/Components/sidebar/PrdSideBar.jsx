import React from 'react'
import { TypeCheck } from './TypeCheck';
import {v4 as uuid} from 'uuid';
export function PrdSideBar({heading, names, productType, handleTypeChange}) {
    const handleChange = (check, name ) => {
        handleTypeChange(check, name)
    }
    const style = {
        heading:{
            border: "1px solid #E6E6E6",
            marginBottom: 15,
            borderRadius: 5,
            padding: "20px",
            color: "#706969",
            div: {
                marginBottom:"15px"
            },
            content: {
                marginBottom:"8px"
            },
            input: {
                marginRight: "15px",
                color: "#918b8b"
            },
            label: {
                fontSize: 13,
                color:"#706969"
            }
            
        }
    }
    return (
        <div style = {{width: "80%",margin: "100px auto auto 30px"}}>
            <div style = {{width:"100%",height: "100px"}}>
                {/* slider */}
            </div>

            <div style = {style.heading}>
                <div style = {style.heading.div}>{heading}</div>
                {
                    names?.map(item => (
                        <div style = {style.heading.content} key = {uuid()} >
                            <input type="checkbox" name = {item.categName} style = {style.heading.input} onChnage = {handleChange} />
                            <label style = {style.heading.label}>{item.categName}</label>
                        </div>
                    ))
                }
            </div>

            {productType && <div style = {style.heading}>
                <div style = {style.heading.div}>PRODUCT TYPE</div>
                {
                    productType?.map((item) => (
                        <TypeCheck key ={uuid()} name = {item} typeChange = {handleChange} />
                    ))
                }
            </div>}
        </div>
    )
}


