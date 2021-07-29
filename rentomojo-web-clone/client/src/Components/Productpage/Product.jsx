import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from "./product.module.css"
import { ProductAdd } from './ProductAdd';
import { HeartOutlined, HeartFilled, RightCircleFilled } from '@ant-design/icons';
import { ProductSlider } from './ProductSlider'
import axios from 'axios';
const slideImages = [
    "https://images.unsplash.com/photo-1563089145-599997674d42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  ];

const init = {
    featureSpecs: [
        "1 drawer configuration",
        "1 stool",
        "Wenge finish",
        "Stool height LxBxH: 16'x12'x16'"
    ],
    image: [
        "https://p.rmjo.in/productSquare/djbfgoay-500x500.jpg",
        "https://drive.google.com/file/d/1Bh8bCDVTn_EXDE72OegRlTX7iUB5myxO/view?usp=sharing",
        "https://drive.google.com/file/d/1FsRR8CBPH4Gdufut0Vef11iBTO8x3x07/view?usp=sharing",
        "https://drive.google.com/file/d/1yJCR1-VSY_zvKVxpjaOxuwDMpQ8_6EyT/view?usp=sharing"
    ],
    id: "60c0936aed990821bc00c126",
    name: "Betty Dresser with Stool",
    description: "With its functional design, ample drawer and cabinet space , the Betty dresser is perfect to hold your vanity essentials. The comfy cushioning of the stool makes it cozier",
    color: "#645452",
    material: "Engineered wood",
    dimensions: "19'L x 13'B x 69'H",
    productType: "Dressers",
    bgImage: "https://p.rmjo.in/moodShot/y1kcb1eu-1024x512.jpg",
    ppmfor3months: "219",
    ppmfor6months: "199",
    ppmfor12months: "179",
    deposit: "449",
    stock: "43",
    dishcount: "30",
    refundable: true,
    categId: "60c045c7d623851b110e5605",
    v: 0
} 

export const Product = () => {
    const [products, setProducts] = React.useState(init);
    // Product id from url,
    // We can make an api call for that and get the data using the id
    // api link:- `/product/${_id}`
    const {id} = useParams();
    const {featureSpecs, image, _id, name, description, color, material, dimensions, productType, bgImage, ppmfor3months, ppmfor6months,
        ppmfor12months, deposit, stock, dishcount, refundable, categId } = products
    React.useEffect(() => {
        axios.get(`/product/${id}`)
            .then(res => setProducts(res.data))
            .catch(err=>console.log(err.message))
    },[]);
    return (
        <div className={styles.display}>
            <div className={styles.dis}>
                <div className={styles.imgBox}>
                    <div>
                    <HeartOutlined />
                    </div>
                    <img src={bgImage} alt="img"/>
                </div>
                <div className={styles.tag}>
                    <div className={styles.why}>
                        Why Rent from us
                    </div>
                    <div className={styles.pro}>
                        Product Details
                    </div>
                </div>
                <div className={styles.proBox}>
                    <div className={styles.covid}>
                        <div className={styles.covid1}>
                            <img src="https://www.rentomojo.com/public/images/icons/virusSafetyGreen.png" alt="covid"/>
                        </div>
                        <div className={styles.covid2}>
                            Safety precautions during COVID-19. We’re taking additional steps and precautionary measures to protect our community from COVID-19.
                        </div>
                        <div className={styles.covid3}>
                            <Link to="/">Know more <RightCircleFilled /></Link>
                            
                        </div>
                        
                    </div>
                    <div className={styles.head}>Product Details</div>
                    <div className={styles.proDetail}>
                        <div className={styles.smallImg}>
                           <img src={image[0]} alt="img"/>
                        </div>
                        <div className={styles.proDetail2}>
                            <div className={styles.proHead}>{name}</div>
                            <p>{description}</p>
                            <div className={styles.flex}>
                                <div>
                                    <main>Sizes & Dimensions</main>
                                    <li>{dimensions}</li>
                                    <main>Material & Color</main>
                                    <div className={styles.color}>
                                    <div style={{backgroundColor: color, height: "15px", width: "15px", borderRadius: "50px"}}></div>
                                    <div>color</div>
                                    </div>
                                    <main>Safety & Usage</main>
                                    <ul>
                                        {
                                            
                                        }
                                    </ul>
                                </div>
                                <div >
                                    <main>Feature & Specs</main>
                                        {
                                            featureSpecs.map(item => (
                                                <li key={item}>{item}</li>
                                            ))
                                        }
                                </div>
                            </div>
                            <hr/>
                            <div className={styles.proBottom}>
                                <div>
                                    <main>Monthly Rental:</main>
                                    <div>₹{ppmfor12months}</div>
                                </div>
                                <div>
                                <main>Deposit:</main>
                                <div>₹{deposit}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.addCart}>
                <ProductAdd {...products}/>
            </div>
        </div>
    )
}
