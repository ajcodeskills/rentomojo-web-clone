import React from 'react'
import {RightOutlined} from "@ant-design/icons"
import {CartItem} from "./CartItem"
import styles from "./CartList.module.css"

export const CartList = ({cartData, deleteItem, updateItem}) => {
   
    return (
        <div className={styles.itemMargin}>
            <div className={styles.offer}>
                <div className={styles.image}>
                    <img src="https://www.rentomojo.com/public/images/radical-cart/icons/coupon__icon.svg" alt="img" />
                    <div>Have a coupan code?</div>
                </div>
                <div>
                <RightOutlined />
                </div>
            </div>
            <div>
                {
                    cartData.map(item => (
                       <CartItem key={item._id} {...item} deleteItem = {deleteItem} updateItem={updateItem}/> 
                    ))
                }
            </div>
        </div>
    )
}
