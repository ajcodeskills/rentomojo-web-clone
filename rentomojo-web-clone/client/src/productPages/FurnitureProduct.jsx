import React from 'react';
import { ProductHeader } from '../Components/product/header/ProductHeader';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { ProductProto } from '../Components/productsProto/ProductProto';
import { PrdSideBar } from '../Components/sidebar/PrdSideBar';
import {v4 as uuid} from 'uuid';
import DiscreteSlider from '../Components/Productpage/FilterSlider';

const categ = {
    bedroom:false,
    livingRoom: false,
    workFromHome: false,
    kitchenDining: false,
    babyFurniture: false
}
const prdType = {
    matresses:false,
    beds: false,
    wardrobe: false,
    bedsideTables: false,
    chestDrawers: false
}
export function FurnitureProduct(){
    const {name} = useParams();
    const ctName = name;
    const [productData, setProductData] = React.useState([])
    const [category, setCategory] = React.useState([])
    const [check, setCheck] = React.useState(categ)
    const [pType, setPtype] = React.useState(prdType);
    const [catName, setCatName] = React.useState(name);
    const [typeName, setTypeName] = React.useState("")
    const [slider, setSlider] = React.useState(12);
    let id = "";
    const getCateg = async () => {
        await axios.get('/furnitureCateg')
        .then(res => {
            setCategory(res.data)
            res.data?.forEach(item => {
                if(item.categName === catName){
                    id = item._id;
                }
            })
        });
        return id;
    }
    const allData = async () => {
        const id = await getCateg();
        axios.get(`/furniture/categ/${id}`)
            .then(res => {
                setProductData(res.data)
            })
        // console.log("id",id);
        
    }
    React.useEffect(()=> {
        allData();
    },[catName]);
    const handleChange = (e) => {
        const {name, checked} = e.target;
        setCheck({...check, [e.target.name]: e.target.checked});
        if(checked) {
            if(name === "bedroom") {
                setCatName("Bedroom")
            } else if(name === "livingRoom") {
                setCatName("Living Room")
            } else if(name === "kitchenDining") {
                setCatName("Kitchen & Dinning")
            } else if(name === "babyFurniture") {
                setCatName("Baby Furniture")
            } else if (name === "workFromHome") {
                setCatName("Work From Home")
            }
        } else {
            setCatName(ctName)
        }
        
    }
    const handlePrdChange = (e) => {
        const {name, checked} = e.target;
        setPtype({...pType, [e.target.name]: e.target.checked});
        if(e.target.checked) {
            if(name === "matresses") {
                setTypeName("Mattresses")
            } else if(name === "beds") {
                setTypeName("Beds")
            } else if(name === "wardrobe") {
                setTypeName("Wardrobe& Organizer")
            } else if(name === "bedsideTables") {
                setTypeName("Bedside Tables")
            } else if(name === "chestDrawers") {
                setTypeName("Chest of Drawers")
            }
        } else {
            setTypeName("")
        }
    }
    const handleFilter = (item) => {
        if(typeName) {
            return item.productType === typeName;
        }
        return true;
    }
    const handleMonths = (slider) => {
        setSlider(slider);
    }
    const style = {
        container: {
            marginTop: 60,
            
        },
        
        link : {
            textDecoration: "none",
            color: "#9E9E9E"

        },
        navLink: {
            color:"#6FD3D5",
            textDecoration: "none"
        },
        products: {
            marginTop: 100,
            width: "65%",
            display: "grid",
            gridTemplateRows: "auto",
            gridTemplateColumns: "auto auto auto",
            gap: "20px"
        },
        heading:{
            border: "1px solid #E6E6E6",
            marginBottom: 15,
            borderRadius: 5,
            padding: "20px",
            color: "#706969",
        },
        div: {
            marginBottom:"15px"
        },
        content: {
            marginBottom:"8px"
        },
        input: {
            marginRight: "40px",
            color: "#918b8b",
            
        },
        label: {
            fontSize: 13,
            color:"#706969"
        }
        
        
    }
    return (
        <>
            <div style={style.container}>
                <ProductHeader navig = {<><Link to ="/" style = {style.link}>Home</Link>{`${'>'}`}<Link style = {style.navLink} to ="/furniture-on-rent">Furniture</Link></>}/>
            </div>
            <div style = {{display: "flex", width: "90%", margin: "auto"}}>
                <div style = {{width: "20%", marginTop: 100, marginRight:30}}>
                    <div style = {{width: "90%", padding:"5%", border: "1px solid #E6E6E6", display:"flex", flexDirection:"column", borderRadius:"5px", marginBottom:20}}>
                        <div style = {{display:"flex", justifyContent:"space-between", marginBottom:"15px"}}>
                            <div style = {{fontSize:"13px"}}>CHOOSE RENTAL TENURE</div>
                            <img src="https://www.rentomojo.com/public/images/icons/info-line-icon.svg" alt="" style = {{width: 15, height: 15}} />
                        </div>
                        <DiscreteSlider handleMonths = {handleMonths} color = {"#2FBDC0"} width= "90%" />
                    </div>
                    
                    <div style = {style.heading}>
                        <div style = {style.div}>ROOMS</div>
                        <div style = {style.content}>
                            <input type="checkbox" name="bedroom" checked = {check.bedroom} style = {style.input} onChange = {handleChange} />
                            <label style = {style.label}>Bedroom</label>
                        </div>
                        <div style = {style.content}>
                            <input type="checkbox" name="livingRoom" checked = {check.livingRoom} style = {style.input} onChange = {handleChange} />
                            <label style = {style.label}>Living Room</label>
                        </div>
                        <div style = {style.content}>
                            <input type="checkbox" name="kitchenDining" checked = {check.kitchenDining} style = {style.input} onChange = {handleChange} />
                            <label style = {style.label}>Kitchen & Dining</label>
                        </div>
                        <div style = {style.content}>
                            <input type="checkbox" name="babyFurniture" checked = {check.babyFurniture} style = {style.input} onChange = {handleChange} />
                            <label style = {style.label}>Baby Furniture</label>
                        </div>
                        <div>
                            <input type="checkbox" name="workFromHome" checked = {check.workFromHome} style = {style.input} onChange = {handleChange} />
                            <label style = {style.label}>Work From Home</label>
                        </div>
                    </div>

                    <div style = {style.heading}>
                        <div style = {style.div}>PRODUCT TYPE</div>
                        <div style = {style.content}>
                            <input type="checkbox" name="matresses" checked = {pType.matresses} style = {style.input} onChange = {handlePrdChange} />
                            <label style = {style.label}>Mattresses</label>
                        </div>
                        <div style = {style.content}>
                            <input type="checkbox" name="beds" checked = {pType.beds} style = {style.input} onChange = {handlePrdChange} />
                            <label style = {style.label}>Beds</label>
                        </div>
                        <div style = {style.content}>
                            <input type="checkbox" name="wardrobe" checked = {pType.wardrobe} style = {style.input} onChange = {handlePrdChange} />
                            <label style = {style.label}>Wardrobe & Organizer</label>
                        </div>
                        <div style = {style.content}>
                            <input type="checkbox" name="bedsideTables" checked = {pType.bedsideTables} style = {style.input} onChange = {handlePrdChange} />
                            <label style = {style.label}>Bedside Tables</label>
                        </div>
                        <div>
                            <input type="checkbox" name="chestDrawers" checked = {pType.chestDrawers} style = {style.input} onChange = {handlePrdChange} />
                            <label style = {style.label}>Chest of Drawers</label>
                        </div>
                    </div>
                </div>
                <div style = {style.products}>
                    {
                        productData?.filter(handleFilter).map(item=> (
                            <ProductProto key = {item._id} {...item} slider = {slider} />
                        ))
                    }
                </div>
            </div> 
        </>
    )
    
}