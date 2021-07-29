import React from 'react'
import { CartList } from './CartList'
import { CartNavbar } from './CartNavbar'
import { CartSummary } from './CartSummary'
import { Payment } from "./Payment"
import styles from "./CartPage.module.css"
import { getUser } from '../utils/localStorage'
import axios from 'axios';

export const CartPage = () => {
    const [cartData, setCartData] = React.useState([])
    const [view, setView] = React.useState(false)

    const handleView = () => {
        setView(true)
    }
    const handleClose = () => {
        setView(false)
    }


    const getCartData = () => {
        const user = getUser('user');
        //console.log(user)
        if(user !== null) {
            axios.get(`/carts/${user.mob}`)
            .then(res=>{
                setCartData(res.data);
                //console.log(res.data)
            })
            .catch(err=>console.log(err.message));
        }
    }

    const deleteItem = (id) => {
        axios.delete(`/carts/${id}`)
            .then(res => {
                getCartData();
            })
            .catch(err => console.log(err.message));
    }

    const updateItem = () => {
        getCartData();
    }

    const totalRefund = cartData.reduce((ac, el) => {
        return ac + Number(el.deposit)
    }, 0)
    //console.log(totalRefund)

    const totalRent = cartData.reduce((ac, el) => {
        let rent = el.ppmfor12months * el.quantity
        if(el.months === "6"){
            rent = el.ppmfor6months * el.quantity
        }
        else if(el.months === "3") {
            rent = el.ppmfor3months * el.quantity
        }
        return ac + rent
    }, 0)
    //console.log(totalRent)

    React.useEffect(()=> {
        getCartData()
    },[])
    return (
        <div className={styles.display}>
            <div>
                <CartNavbar/>
            </div>
            <div className={styles.bg}>
                <div>
                    <CartSummary refund={totalRefund} rent={totalRent} handleView={handleView}/>
                </div>
                <div className={styles.cartBox}>
                    <CartList cartData={cartData} deleteItem={deleteItem} updateItem={updateItem}/>
                    <div>
                        <Payment view={view} total={totalRent+totalRefund} handleClose={handleClose}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
