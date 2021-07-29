import React from 'react'
import { setUser } from '../utils/localStorage';
import axios from 'axios';
export function SignInModal({handleClose}) {
    const [number, setNumber] = React.useState("");
    const [name, setName] = React.useState("");
    const [otp, setOtp] = React.useState("");
    const [isOtp, setIsOtp] = React.useState(false);
    const [details, setDetails] = React.useState(false);
    const handleContinue = () => {
        setIsOtp(true);
    }
    const postUser = (name, number) => {
        axios.post('/users', {name, mob:number})
            .then(res=>{
                setUser('user', res.data)
            })
            .catch(err=>console.log(err.message))
    }
    const handleDetails = () => {
        setUser("isAuth", true);
        axios.get(`/users/${number}`)
            .then(res => {
                if(!res.data){
                    postUser(name, number);
                } else {
                    setUser('user', res.data);
                }
            })
            .catch(err=>console.log(err.message))
            handleClose()
    }
    const style = {
        container: {
            width: 700,
            height: 400,
            display: "flex",
            justifyContent: "space-between",
            background: "#ffff",
            padding: 20,
            position: "relative",
            borderRadius:"10px"
        },
        imgDiv: {
            width: "50%",
            
        },
        img: {
            width: "100%",
            height: "100%"
        },
        formContainer: {
            padding: 20,
            background: "#ebeeee",
            
        },
        form: {
            display: "flex",
            flexDirection: "column",
            justifyContent:"space-between",
            marginTop: "25px"
        },
        input: {
            fontSize: 12,
            outline: "none",
            border:"none",
            borderBottom: "2px solid #999999",
            padding: "15px 10px",
            width: "80%"
        },
        button: {
            fontSize: 12,
            color: "#ffff",
            background:`${number.length >= 1 ? "#e90d0d" : "#999999"}`,
            width: "90%",
            height: 40,
            borderRadius: "10px",
            display: "flex",
            justifyContent:"center",
            alignItems: "center",
            marginTop: "190px",
            cursor: "pointer"
        },
        close:{
            position: "absolute",
            top:0,
            right: 0,
            transform: 'rotate(45deg)',
            fontSize: 40,
            cursor: "pointer"
            
        }
    }
    return (
        <div style = {style.container}>
            <div style = {style.imgDiv}>
                <img src="https://inc42.com/wp-content/uploads/2020/05/rentomojo-feature-1024x768.jpg" style = {style.img} alt=""/>
            </div>

            <div style = {style.formContainer}>
                <div>Enter your number to
                    Signup or Login</div>
                <div style = {style.form}>
                    <div style = {{height: 50}}>
                        {!isOtp && <><input type="number" min='0' max = '9999999999' value = {number} placeholder="Enter your number" style = {style.input} onChange = {(e)=>setNumber(e.target.value)} />
                        <div style = {{textAlign:"right", width: "80%",fontSize: 12
                            }}>{number.length}/10</div></>}
                        {isOtp && <><input type="number" min='0' max = '999999' value = {otp} placeholder="Enter your OTP" style = {style.input} onChange = {(e)=>setOtp(e.target.value)} />
                        <div style = {{height:"10px"}}></div></>}
                        <div>
                            <input type="text" value = {name} placeholder="Enter your name" style = {style.input} onChange = {(e)=>setName(e.target.value)} />
                        </div>
                    </div>

                    {!isOtp && <div style = {style.button} onClick = {handleContinue} >Continue</div>}
                    {isOtp && <div style = {style.button} onClick = {handleDetails} >Continue</div>}
                </div>
                
                
            </div>
            <div style = {style.close} onClick = {handleClose}>+</div>
        </div>
    )
}
