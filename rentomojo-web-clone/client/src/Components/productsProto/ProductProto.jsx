
import React from 'react';
import { Redirect } from 'react-router';
import { QuickViewModal } from '../quickViewModal/QuickViewModal';

export function ProductProto({slider, ...restProps}){
    const {_id, name, image, ppmfor3months, ppmfor6months, ppmfor12months} = restProps;
    const img = image[0];
    const [quickView, setQuickView] = React.useState(false)
    const [openModal, setOpenModal] = React.useState(false)
    const [productPage, setProductPage] = React.useState(false);
    const [price, setPrice] = React.useState(ppmfor12months);
    const showQuickView = () => {
        setQuickView(true);
    }
    const closeQuickView = () => {
        setQuickView(false);
    }
    const style = {
        conatiner: {
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            width: 275,
            height: 300,
            border: "1px solid #E6E6E6",
            borderRadius: 5,
            position: 'relative'
        },
        imgDiv: {
            width: "100%",
            height: 225,
        },
        img: {
            width: "100%",
            height: "100%",
        },
        title:{
            width: "90%",
            height: 35,
            display: "flex",
            alignItems: "center",
            margin: "0 15px",
            fontSize: 14,
            fontWeight: "bold",
            color: "#383838",
            borderBottom: "1px solid #E6E6E6"
        },
        priceDiv: {
            display: "flex",
            height: 35,
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0 10px",
            fontSize: 14,
            fontWeight: "600",
            color: "#383838"
        },
        wish: {
            position: "absolute",
            top:10,
            right: 10,
            filter: "brightness(3)"
        },
        wishIcons: {
            width: 20,
            height: 20,
            
        },
        quickView: {
            width: "90%",
            height: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#42ce1f",
            fontSize: 14,
            border: "1px solid #42ce1f",
            borderRadius: "15px",
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',

        },
        viewContainer: {
            width: "60%",
            display: "flex",
            justfyContent: "center",
            alignItems: "center",
            position: "absolute",
            height: 80,
            top:"30%",
            left:"50%",
            // zIndex: 5,
            background:"transparent"
        }
    }
    React.useEffect(()=> {
        if(slider === 3) {
            setPrice(ppmfor3months)
        } else if(slider === 6) {
            setPrice(ppmfor6months)
        } else if(slider === 12) {
            setPrice(ppmfor12months)
        }
    },[slider])
    if(productPage) {
        return <Redirect to={`/product/${_id}`} />;
    } else {
        return (
            <div style = {style.conatiner} onMouseEnter = {showQuickView} onMouseLeave = {closeQuickView}>
                <div style = {style.imgDiv}>
                    <img src = {img} alt = {name} style = {style.img}  onClick = {()=>setProductPage(true)} />
                </div>
                <div style = {style.title}>{name}</div>
                <div style = {style.priceDiv}>
                    <div>{price}rs/ mo</div>
                    <div>Delivery: 3 days</div>
                </div>
                <div style = {style.wish}>
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 471.701 471.701">
                        <g>
                            <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
                                c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
                                l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
                                C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
                                s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
                                c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
                                C444.801,187.101,434.001,213.101,414.401,232.701z"/>
                        </g>
                    </svg>
                </div>
                <div style = {style.viewContainer}>
                    {quickView && <div style = {style.quickView} onClick = {() => setOpenModal(true)}>
                        Quick View
                    </div>}
                </div>
                
                {
                    openModal && <QuickViewModal {...restProps} openModal = {openModal} setOpenModal = {setOpenModal} />
                }
            </div>
        )
    }
    
}