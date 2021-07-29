import React, { useState } from 'react'
import {CheckCircleFilled, LineOutlined, RightCircleFilled} from "@ant-design/icons"
import styles from "./CartSummary.module.css"

const initState = {
    name: "",
    mobile: "",
    otp: "",
    referal: "",
    email: "",
    address: ` 11 try, Unnamed road, Ambedkar veedhi 
                Bengaluru, Karnataka, India, Banglore 
                560001`
}

export const CartSummary = ({refund, rent, handleView}) => {
    const [user, setUser] = useState(initState)
    const [pay, setPay] = useState(true)
    const [mobile, setMobile] = useState("")
    const [mobileCond, setMobileCond] = useState(true)
    const [otp, setOtp] = useState("")
    const [otpCond, setOtpCond] = useState(true)
    const [name, setName] = useState("")
    const [referal, setReferal] = useState("")
    const [email, setEmail] = useState("")
    const [userCond, setUserCond] = useState(true)
    

    const handlePay = () => {
        setPay(false)
    }

    const handleMobile = () => {
        setUser({
            ...user,
            mobile
        })
        setMobileCond(false)
         
    }

    const handleUser = () => {
        setUser({
            ...user,
            name,
            referal,
            email
        })
        setUserCond(false)
         
    }
    

    return (
        <div className={styles.summary}>
            <div className={styles.suggest}>
                <div className={styles.addon}>
                    <div>Suggested Addons</div>
                    <div className={styles.added}>
                        <CheckCircleFilled />
                        <div> 0 of 1 added </div>
                    </div>
                </div>
                <div className={styles.image}>
                    <main><img src="https://p.rmjo.in/productSquare/bqema5lu-250x250.jpg" alt="img" /></main>
                    <div>These addons are curated to give the bes experience with the products in your cart.</div>
                    <button>Choose & Add</button>
                </div>
            </div>

            <div className={styles.order}>
                <div className={styles.orderImage}>
                    <img src="https://www.rentomojo.com/public/images/radical-cart/icons/summary__icon.svg" alt="img"/>
                    <div>Order Summary</div>
                </div>
                <div className={styles.rent}>
                    <div className={styles.rentOne}>
                        <section>Payable Now</section>
                        <main>
                            <div>Refundable Deposit</div>
                            <div>₹{refund}</div>
                        </main>
                        <main>
                            <div>Delivery Charges</div>
                            <div>₹0</div>
                        </main>
                    </div>
                    <div>
                        <div className={styles.rentOne}>
                            <section>Monthly Payable</section>
                            <main>
                                <div>Product Rent</div>
                                <div>₹{rent}</div>
                            </main>
                            <main>
                                <div>Addons Rent</div>
                                <div>₹0</div>
                            </main>
                            <hr/>
                            <main>
                                <div>Total Monthly Rent</div>
                                <div>₹{rent}/mo</div>
                            </main>
                            
                        </div>
                        <div className={styles.note}>
                            <img src="https://www.rentomojo.com/public/images/radical-cart/icons/calendar__icon.svg" alt="img"/>
                            <div>Not to be Paid now. Pay post usage every month.</div>
                        </div>
                    </div>
                </div>
                {pay && (
                    <div onClick={handlePay} className={styles.button}>
                        <div>
                            <main>₹{refund+rent}</main>
                            <div>Payable Now</div>
                        </div>
                        <section>Proceed</section>
                    </div>
                )
                }
            </div>

            <LineOutlined style={{color: "rgb(191,207,220)"}} rotate={90}/>

            {userCond ? (
                <>
                {pay ? (
                    <div className={styles.whitebg}>
                        <img src="https://www.rentomojo.com/public/images/radical-cart/icons/account__icon-inactive.svg" alt="img" />
                        <div>Verify Your Phone Number</div>
                    </div>
               ) : (
                   <div className={styles.verify}>
                    <div className={styles.verifyBg}>
                        <div className={styles.flex}>
                            <img src="https://www.rentomojo.com/public/images/radical-cart/icons/account__icon.svg" alt="img"/>
                            <div>Verify Your Phone Number</div>
                        </div>
                       
                           { mobileCond ? (
                                <>
                                <div className={styles.input}>
                                    <input
                                        type="text"
                                        value={mobile}
                                        placeholder="enter mobile number"
                                        onChange={(e)=> setMobile(e.target.value)}
                                        maxLength= "10"
                                    />
                                    <input
                                        className={mobile.length === 10 ? styles.inputenabled : styles.inputdisabled}
                                        disabled={mobile.length<10}
                                        type="submit"
                                        value="GO"
                                        onClick={handleMobile}
                                    />
                                </div>
                                <div className={styles.mobcount}>{mobile.length}/10</div>
                                </>
                           ) : otpCond ? (
                            <>
                            <div className={styles.input}>
                                <input
                                    type="text"
                                    value={otp}
                                    placeholder="enter the OTP"
                                    onChange={(e)=> setOtp(e.target.value)}
                                    maxLength= "4"
                                />
                                <input
                                    className={otp.length === 4 ? styles.inputenabled : styles.inputdisabled}
                                    disabled={otp.length !== 4}
                                    type="submit"
                                    value="GO"
                                    onClick={()=> setOtpCond(false)}
                                />
                            </div>
                            <div>{otp.length}/4</div>
                            </>
                           ) : (
                               <div className={styles.nameVerify}>
                                    <main>Just one last step</main>
                                    <div className={styles.nameFlex}>
                                        <input
                                            type="text"
                                            value={name}
                                            placeholder="enter Name*"
                                            onChange={(e)=> setName(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            value={referal}
                                            placeholder="Referal code "
                                            onChange={(e)=> setReferal(e.target.value)}
                                            maxLength= "6"
                                        />
                                    </div>
                                    <div className={styles.email}>
                                        <input
                                            type="text"
                                            value={email}
                                            placeholder="Enter Email ID* "
                                            onChange={(e)=> setEmail(e.target.value)}
                                        />
                                    </div>
                                    <button
                                        className={name.length>0 && email.length>0 ? styles.buttonEn : styles.buttonDi}
                                        disabled={name.length === 0 || email.length === 0} 
                                        onClick={handleUser}
                                    >
                                        Submit
                                    </button>
                               </div>
                           )
    
                           }
                    </div>
                    </div>
               )}
               </>
            ) : (
                <div className={styles.whitebg}>
                    <img src="https://www.rentomojo.com/public/images/radical-cart/icons/account__icon.svg" alt="img"/>
                    <div>{`Logged in as ${user.name} (${user.mobile})`}</div>
                </div>
            )}

            <LineOutlined style={{color: "rgb(191,207,220)"}} rotate={90}/>

            { userCond ? (
                <div className={styles.whitebg}>
                    <img src="https://www.rentomojo.com/public/images/radical-cart/icons/address__icon-inactive.svg" alt="img" />
                    <div>Address & payment</div>
                </div>
            ) : (
                <div className={styles.address}>
                    <div className={styles.addressbg}>
                        <div className={styles.flex}>
                            <img src="https://www.rentomojo.com/public/images/radical-cart/icons/address__icon.svg" alt="img" />
                            <div>Address & payment</div>
                        </div>
                        <div className={styles.addressbox}>
                        {user.address}
                        </div>
                        <div className={styles.flexSmall}>
                            <div>Change</div>
                            <main><RightCircleFilled /></main>
                        </div>
                        <div onClick={handleView} className={styles.button}>
                            <div>
                                <main>₹{refund+rent}</main>
                                <div>Payable Now</div>
                            </div>
                            <section>Proceed</section>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}
