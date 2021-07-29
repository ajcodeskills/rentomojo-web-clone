import React from 'react'
import {CheckCircleFilled, MinusOutlined} from "@ant-design/icons"
import styles from "./CartNavbar.module.css"
import { Link } from 'react-router-dom';


export const CartNavbar = () => {
    return (
        <div className={styles.display}>
            <Link to="/" className={styles.partOne}>
                <img src="https://www.rentomojo.com/public/images/logo.svg" alt="img"/>
            </Link>
            <div className={styles.partTwo}>
                <main>
                    <CheckCircleFilled />
                    <div>Checkout</div>
                    <MinusOutlined />
                </main>
                <main>
                    <CheckCircleFilled />
                    <div>Verification</div>
                    <MinusOutlined />
                </main>
                <main>
                    <CheckCircleFilled />
                    <div>Delivery</div>
                </main>
            </div>
        </div>
    )
}
