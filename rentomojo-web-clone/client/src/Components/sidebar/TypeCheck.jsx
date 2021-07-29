import React from 'react';

export function TypeCheck({name, typeChange}){
    const [check, setCheck] = React.useState(false)
    const handleChange = (e) => {
        setCheck(true);
        typeChange(e.target.checked, name)
    }
    const style = {
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
    return (
        <div style = {style.content}>
            <input type="checkbox" checked={check} name = {name} onChange = {handleChange} style = {style.input} />
            <label style = {style.label}>{name}</label>
        </div>
    )
}