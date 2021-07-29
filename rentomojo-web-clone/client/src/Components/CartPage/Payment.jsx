import React, { useState } from 'react'
import {RightOutlined} from "@ant-design/icons"
import styles from "./Payment.module.css"
import {Redirect} from "react-router-dom"

export const Payment = ({view, total, handleClose}) => {
    const [order, setOrder] = useState(false)
    const [home, setHome] = useState(false)

    const handlePayment = () => {
        setOrder(true)
    }

    const handleHome = () => {
        setHome(true)
    }

    if(home) {
       return <Redirect to="/" />
    }

    return (
       <>
       {view && <div className={styles.paymentBox}>
            <div className={styles.mode}>
                <div>Choose Payment mode</div>
                <main onClick={handleClose}>X</main>
            </div>
           <div className={styles.paymentbg}>
            <div className={styles.total}>Total Amount Payable</div>
                <main>₹{total}</main>
                <div className={styles.checkbox}>
                    <input type="checkbox" />
                    <div>I hereby agree to RentoMojo</div>
                    <main>Terms and conditions</main>
                </div>
                <div className={styles.paymenthead}>Net Banking Debit Card & Credit Card</div>
                <section onClick={handlePayment}>
                    <img src="https://www.rentomojo.com/public/images/cart/payment/razorpay.png" alt="img" />
                    <div>Credit card/ Debit card/ NetBanking</div>
                    <RightOutlined />
                </section>
                <div className={styles.paymenthead}>Wallets</div>
                <section onClick={handlePayment}>
                    <img src="https://www.rentomojo.com/public/images/cart/payment/amazon-pay.png" alt="img" />
                    <div>Pay via Amazon Pay</div>
                    <RightOutlined />
                </section>
                <section onClick={handlePayment}>
                    <img src="https://www.rentomojo.com/public/images/cart/payment/paytm.png" alt="img" />
                    <div>pay via Paytm</div>
                    <RightOutlined />
                </section>
                <section onClick={handlePayment}>
                    <img src="https://www.rentomojo.com/public/images/cart/payment/phonepe.png" alt="img" />
                    <div>pay via PhonePe</div>
                    <RightOutlined />
                </section>
           </div>
        </div>}
        {order &&   <div className={styles.successfull}>
                        <main onClick={handleHome}>X</main>
                        <div> Order Successfull</div>
                     </div>}
       </>
    )
}
