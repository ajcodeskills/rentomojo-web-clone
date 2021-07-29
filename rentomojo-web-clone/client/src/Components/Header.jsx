
import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from "react-modal";
import cart from "../image/cart.jpg";
import { Search } from './searchBar/Search';
import { SignInModal } from './signin/SignInModal';
import Allcity from './citynames/Allcity';
import { getUser, setUser } from './utils/localStorage';

Modal.setAppElement("#root")

const HEADER = styled.div`
  height: 60px;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  width: 100%;
  top: 0;
  /* float: left; */
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.2);
  z-index: 4;
  img {
    /* float: left; */
    cursor: pointer;
  }

  input {
    border-radius: 12px;
    border: 1px solid grey;
    padding: 0px 20px 0px 18px;
    width: 500px;
    height: 40px;
    background: #ffff;
  }

  #login-btn {
    color: white;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #dc3226;
    background: #dc3226;
    font-weight: 400;
    padding: 0 15px 0 15px;
  }

  #login-btn:hover {
    cursor: pointer;
    background: none;
    color: #dc3226;
  }

  #cart-btn {
    cursor: pointer;
    border: none;
    background: none;
  }

  select {
    border: none;
    cursor: pointer;
  }
  .city-btn{
    border: none;
    background: none;
    cursor: pointer;
  }
`;
const style = {
  header: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
    position: "absolute",
  },
  signInModal: {
    position:"absolute",
    top:100,
    left:"25%",
    zIndex: '8',
  },
  modalBg: {
    top:0,
    position:"fixed",
    width:"100%",
    height: "100vh",
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: "5",
    
  },
  cityModal: {
    position: "relative",
    top: 65,
    left: "12%",
    zIndex: "8",
  }
}

const INPUTSEC = styled.div`
  #mobile-num:hover {
    border-bottom: 2px solid black;
  }
  #mobile-num:focus {
    outline: none;
  }
`;

export default function Header() {

  const [modalIsOpen,setModalIsOpen]=useState(false);
  const [acc, setAcc] = React.useState(false)
  const [isAuth, setIsAuth] = React.useState(JSON.parse(getUser('isAuth')));
  const user = getUser("user");
  const [cityModal,setCityModal]=useState(false);
  const [cityName, setCityName] = React.useState("Pune");
  
  const handleCity=(cityName)=>{
    console.log(cityName);
    setCityName(cityName);
  }
  const handleClose = () => {
    setModalIsOpen(false);
    setCityModal(false);
  }
  const handleLogOut = () => {
    setUser('isAuth', false)
    setIsAuth(false);
    setAcc(false);
  }
  React.useEffect(() => {
    setIsAuth(JSON.parse(getUser('isAuth')));
  },[modalIsOpen,acc])
    return (
      <>
        <HEADER>
          <div style={style.header}>
            <Link to="/">
              <img
                src="https://www.rentomojo.com/public/images/logo.svg"
                alt="icon"
                width="150px"
              />
            </Link>
            <button className="city-btn" onClick={() => setCityModal(true)}>
              {cityName}
            </button>
            <Search />
            <Link to="/cart">
              <button id="cart-btn">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: 25,
                    width: 60,
                    fontSize: 15,
                  }}
                >
                  <img
                    src={cart}
                    alt="cart"
                    style={{
                      width: "20px",
                    }}
                  />{" "}
                  Cart
                </div>
              </button>
            </Link>
            {!isAuth && (
              <div>
                <button id="login-btn" onClick={() => setModalIsOpen(true)}>
                  LOGIN / SIGNUP
                </button>
              </div>
            )}
            {isAuth && (
              <div
                style={{
                  border: "1px solid green",
                  height: 30,
                  width: 150,
                  display: "flex",
                  overflow: "hidden",
                  padding: "5px 5px",
                  borderRadius: "5px",
                }}
                onClick={() => setAcc(!acc)}
              >
                <div
                  style={{
                    width: 30,
                    height: 30,
                    color: "#ffff",
                    borderRadius: 15,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
                    marginRight: "5px",
                  }}
                >
                  {user.name[0]}
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {user.name.split(" ")[0]}
                </div>
              </div>
            )}
          </div>
          {acc && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 150,
                position: "absolute",
                top: 50,
                left: "77%",
                padding: "10px 10px 10px 10px",
                background: "#ffff",
                border: "1px solid grey",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                  margin: "10px 0",
                }}
              >
                <img
                  src="https://static.thenounproject.com/png/3542378-200.png"
                  style={{ width: 20, marginRight: "10px" }}
                  alt=""
                />
                Account
              </div>
              <div
                style={{
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                  margin: "10px 0",
                }}
              >
                <img
                  src="https://pics.freeicons.io/uploads/icons/png/17773426191535958157-512.png"
                  style={{ width: 20, marginRight: "10px" }}
                  alt=""
                />
                Settings
              </div>
              <div
                style={{
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                  margin: "10px 0",
                }}
              >
                <img
                  src="https://image.shutterstock.com/image-vector/heart-plus-pozitive-wishlist-icon-260nw-666321889.jpg"
                  style={{ width: 20, marginRight: "10px" }}
                  alt=""
                />
                My Wishlist
              </div>
              <div
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  margin: "10px 0",
                }}
                onClick={handleLogOut}
              >
                <img
                  src="https://cdn1.iconfinder.com/data/icons/ios-edge-line-6/25/Logout_1-512.png"
                  style={{ width: 20, marginRight: "10px" }}
                  alt=""
                />
                Logout
              </div>
            </div>
          )}
        </HEADER>

        {modalIsOpen &&<div style = {style.modalBg}><div style = {style.signInModal} ><SignInModal handleClose= {handleClose}/></div></div>}
        {cityModal && (
          <div style={style.cityModal}>
            <Allcity handleClose={handleClose} handleCity={handleCity} />
          </div>
        )}

      </>
    );
}
