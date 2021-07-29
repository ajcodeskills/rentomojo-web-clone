import React, { useState } from 'react'
import {DeleteOutlined, InfoCircleOutlined} from "@ant-design/icons"
import styles from "./CartItem.module.css"
import axios from 'axios';
export const CartItem = ({ _id, updateItem,name, image, deposit, months, deleteItem ,stock, ppmfor3months, ppmfor6months, ppmfor12months, quantity}) => {
    const[count, setCount] = useState(quantity)
    const [valid, setvalid] = useState(months)
    const [rate, setRate] = useState(ppmfor12months)

   const handleRate = () => {
        if(valid === 6) {
            setRate(ppmfor6months)
        }
        else if (valid === 3) {
            setRate(ppmfor3months)
        }
        else {
            setRate(ppmfor12months)
        }
   }

    const handleCount = (value) => {
        setCount(count + value)
    }

    const handleSelect = (e) => {
        const value = e.target.value
        setvalid(Number(value))
    }
    
    React.useEffect(() => {
        axios.patch(`/carts/${_id}`, {quantity:count, months: valid})
            .then(res=>{
                //console.log(res.data)
                updateItem()
            })
            .catch(err=>console.log(err.message));
        handleRate()
       
    },[count, valid])
   
    return (
        <div className={styles.itemBox}>
           <div className={styles.bg}>
               <div className={styles.item}>
                    <img src={image} alt="img" />
                    <div className={styles.itemMain}>
                        <main>{name}</main>
                        <section>
                            <div>
                                <div>Rent</div>
                                <div>₹{rate}/mon</div>
                            </div>
                            <div>
                                <div>Deposit</div>
                                <div>₹{deposit}</div>
                            </div>
                        </section>
                    </div>
                    <div>
                        <DeleteOutlined onClick = {()=>deleteItem(_id)} />
                    </div>
               </div>
               <div className={styles.quantity}>
                    <div className={styles.button}>
                        <button disabled={count === 1} onClick={()=>handleCount(-1)}>-</button>
                        <div>{count}</div>
                        <button disabled={count === 5} onClick={()=> handleCount(1)}>+</button>
                    </div>
                    <div>
                        <select onChange={handleSelect} value={valid}>
                            <option value="12">12 Months</option>
                            <option value="6">6 Months</option>
                            <option value="3">3 Months</option>
                        </select>
                    </div>  
               </div>
           </div>
           <div className={styles.delivery}>
               <div className={styles.deliveryItem}>
                   <img src="https://www.rentomojo.com/public/images/radical-cart/icons/truck__icon.svg" alt="img" />
                   <div>Delivery by 18th Jun 2021</div>
               </div>
               <InfoCircleOutlined />
           </div>
        </div>
    )
}
