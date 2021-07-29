import React, { useEffect, useState } from 'react'
import { CheckCircleFilled, InfoCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styles from "./ProductAdd.module.css"
import DiscreteSlider from './FilterSlider';
import { getUser, setUser } from '../utils/localStorage';
import axios from 'axios';
import SimpleAlerts from '../quickViewModal/AlertBox';
export const ProductAdd = ({featureSpecs, image, _id, name, description, color, material, dimensions, productType, bgImage, ppmfor3months, ppmfor6months,
    ppmfor12months, deposit, stock, dishcount, refundable, categId }) => {
        const [product, setProduct] = useState("");
        const [months, setMonths] = useState("");
        const [rate, setRate] = useState(ppmfor12months);
        const [alertPopUp, setAlertPopUp] = React.useState(false);
        console.log(months, product)

        const handleMonths = (slide) => {
            setMonths(slide)
            setProduct({
                ...product,
                months: slide
            })
        }
        const handleAddCart = () => {
            setAlertPopUp(true);
           
            const user = getUser('user');
            // console.log("users", user);
            const payload = {
                user:user.mob,
                name,
                ppmfor3months, 
                ppmfor6months,
                ppmfor12months, 
                deposit, 
                stock, 
                dishcount,
                months,
                quantity: 1,
                refundable,
                image:image[0],
            }
            axios.post('/carts', payload)
                .then(res=>console.log(res.data))
                .catch(err=>console.log(err.message));
        }
        
        const handlerate = (months) => {
            if(months === 3) {
                setRate(ppmfor3months)
            }
            else if(months === 6) {
                setRate(ppmfor6months)
            }
            else if(months === 12) {
                setRate(ppmfor12months)
            }
        }
    
    useEffect(()=> {
        handlerate(months)
    },[months])

    return (
        <div className={styles.addBox}>
            <div className={styles.proName}>{name}</div>
            <div className={styles.cond}>
                <div>How long do you want to rent this for? (Months)</div>
                <InfoCircleOutlined/>
            </div>
            <div>
                <div style={{padding: "13px" }}>
                   <DiscreteSlider handleMonths={handleMonths}/>
                </div>
                {alertPopUp && <div>
                        <SimpleAlerts />
                    </div>}
                <table>
                    <tbody>
                        <tr className={styles.firstrow}>
                            <td>
                                <main>₹{rate}/mo</main>
                                <div className={styles.flex}>
                                    <div>Monthly Rent</div>
                                    <InfoCircleOutlined/>
                                </div>
                            </td>
                            <td>
                                <main>₹{deposit}</main>
                                <div className={styles.flex}>
                                    <div>Deposit</div>
                                    <InfoCircleOutlined/>
                                </div>
                            </td>
                        </tr>
                        <tr className={styles.secondrow}>
                            <td colSpan="2">
                                <section>
                                <main>
                                    <CheckCircleFilled />
                                    7 Days free trail
                                </main>
                                <main>
                                    <CheckCircleFilled />
                                    Free relocation
                                </main>
                                <main>
                                    <CheckCircleFilled />
                                    Free upgrades
                                </main>
                                <div className={styles.link}>
                                    <Link to="/">View All</Link>
                                </div>
                                </section>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className={styles.compare}>
                    <Link to="/">
                        Compare All Tenures
                    </Link>
                </div>
                <div className={styles.delivery}>
                    <div className={styles.spread}>
                    <img src="https://image.flaticon.com/icons/png/128/2373/2373197.png" alt="img"/>
                    <div>Delivery By 15th June 2021</div>
                    </div>
                    <div className={styles.info}>
                        <InfoCircleOutlined/>
                    </div>
                </div>
                <div className={styles.book}>
                    <ShoppingCartOutlined />
                    <div onClick={handleAddCart}>Book your plan</div>
                </div>
                <div className={styles.bg}>
                    <div className={styles.special}>Special Offers</div>
                    <div className={styles.offerBox}>
                        <img src="https://image.flaticon.com/icons/png/512/879/879757.png" alt="img"/>
                        <div>
                            <div className={styles.inline}>
                                <div>UseCode</div>
                                <main>HOME5</main>
                            </div>
                            <div>Get 5% OFF every month on a min...</div>
                            <div className={styles.link}><Link to="/">Read More</Link></div>
                        </div>
                        <button className={styles.copy}>
                            Copy
                        </button>
                    </div>
                </div>
            </div> 

        </div>
    )
}
