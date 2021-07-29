import React from 'react';
import styled from "styled-components";
import banglore from "../../image/banglore.jpg"
import mumbai from "../../image/mumbai.jpg"
import pune from "../../image/pune.jpg";
import delhi from "../../image/delhi.jpg";
import noida from "../../image/noida.jpg";
import gurgaon from "../../image/gurgaon.jpg";
import hyderabad from "../../image/hyderabad.jpg";
import chennai from "../../image/chennai.jpg";
import ahmedabad from "../../image/ahmedabad.jpg";
import mysore from "../../image/mysore.jpg";
import jaipur from "../../image/jaipur.jpg";
import faridabad from "../../image/faridabad.jpg";
import ghaziabad from "../../image/gaziabad.jpg";
import gandhinagar from "../../image/gandhinagar.jpg";
import chandigarh from "../../image/chandigarh.jpg";
import kolkata from "../../image/kokata.jpg";

export default function Allcity({handleClose,handleCity}) {
    


  const style = {
    container: {
      width: 1100,
      background: "#ffff",
      padding: "15px",
      position: "fixed",
      borderRadius: "4px",
      border: "1px solid rgb(186,186,186)",
    },
    cityicons: {
      marginTop: "15px",
      padding: "10px",
    },
    input: {
      padding: "15px",
      width: "1050px",
      marginLeft: "8px",
      borderRadius: "8px",
      border: "1px solid rgb(186,186,186)",
    },
  };

  const CITYMODAL = styled.div`
    .icons {
      display: grid;
      grid-template-columns: auto auto auto auto auto auto auto auto;
    }
    .icons > div {
      margin: 10px 10px 10px 10px;
      height: 120px;
      text-align: center;
      width: 120px;
      border-radius: 10px;
      color: grey;
    }

    .icons > div:hover {
      border: 1px solid rgb(220, 50, 38);
    }
  `;

  const cityObj = [
    {
      img: banglore,
      cityname: "Bangalore",
    },
    {
      img: mumbai,
      cityname: "Mumbai",
    },
    {
      img: pune,
      cityname: "Pune",
    },
    {
      img: delhi,
      cityname: "Delhi",
    },
    {
      img: noida,
      cityname: "Noida",
    },
    {
      img: gurgaon,
      cityname: "Gurgaon",
    },
    {
      img: hyderabad,
      cityname: "Hyderabad",
    },
    {
      img: chennai,
      cityname: "Chennai",
    },
    {
      img: ahmedabad,
      cityname: "Ahmedabad",
    },
    {
      img: mysore,
      cityname: "Mysore",
    },
    {
      img: jaipur,
      cityname: "Jaipur",
    },
    {
      img: faridabad,
      cityname: "Faridabad",
    },
    {
      img: ghaziabad,
      cityname: "Ghaziabad",
    },
    {
      img: gandhinagar,
      cityname: "Ghandinagar",
    },
    {
      img: chandigarh,
      cityname: "Chandigarh",
    },
    {
      img: kolkata,
      cityname: "Kolkata",
    },
  ];
  return (
    <CITYMODAL>
      {" "}
      <div style={style.container}>
        <div>
          <input
            type="text"
            style={style.input}
            placeholder="Search city here"
          />
        </div>

        <div>
          <div onClick={handleClose} className="icons">
            {cityObj.map((e) => {
              return (
                <div onClick={()=>handleCity(e.cityname)}>
                  <img
                    src={e.img}
                    alt="pic"
                    style={{
                      cursor: "pointer",
                    }}
                  />
                  <p style={{fontSize:"13px"}}>{e.cityname}</p>
                </div>
                
              );
            })}
          </div>
        </div>
      </div>
    </CITYMODAL>
  );
}
