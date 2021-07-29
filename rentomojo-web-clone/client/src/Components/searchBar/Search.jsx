
import React from 'react'
import axios from 'axios';
import { SearchContext } from '../../Context/SearchContext';
import { NavLink } from 'react-router-dom';
export function Search() {
    const [searchData, setSearchData] = React.useState([]);
    const [search, setSearch] = React.useState("");
    const [openDiv, setOpenDiv] = React.useState(false);
    const {set} = React.useContext(SearchContext)
    const style = {
        divModal: {
            padding: 20,
            width: 498,
            position: "absolute",
            top: 30,
            left: 0,
            border: "1px solid grey",
            borderTop: "none",
            borderBottomRightRadius:"10px",
            borderBottomLeftRadius:"10px",
            display: "flex",
            flexDirection: "column",
            background: "#ffff",
            textAlign: "center"
        },
        div:{
            margin: "5px 0 5px 0",
            textAlign: "left",
            fontSize: 14,
            color: "#454646",
            textDecoration: "none",
        },
        searchContent: {
            position: "relative"
        }
    }
    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    }
    React.useEffect(() => {
        if(search) {
            axios.get(`/products?search=${search}`)
            .then(res=>{
                setSearchData(res.data);
                set(res.data);
            })
            .catch(err=>{
                console.log(err.message);
            })
        }
    },[search])
    return (
        <div style = {style.searchContent}>
            <input 
                type="text"
                placeholder="Search For Products"
                name="product-name"
                style = {{outline:"none"}}
                onChange = {handleChange}
                onClick = {()=>setOpenDiv(true)}
            />
            
            {openDiv && <div style = {style.divModal}>
                {
                    searchData?.map(item => <NavLink to='/search' style = {style.div} onClick = {()=>setOpenDiv(false)} >{item.name}</NavLink>)
                }
            </div>}
        </div>
    )
}


