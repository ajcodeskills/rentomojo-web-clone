import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";




const slideImages = [
  "https://s.rmjo.in/HP_WP-Web.png",
  "https://s.rmjo.in/HPHome-web.png",
];


const SLIDESHOW = styled.div`
  .each-slide > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 350px;
    border-radius: 20px;
  }


  .safe-div {
      text-align: center;
      color: grey;
    height: 25px;
    border-radius: 20px;
    margin-top: -40px;
    font-size: 12px;
    background: rgb(212, 224, 233);
    padding-top:50px;
  }
`;
const Slideshow = () => {
  return (
    <div>
      <SLIDESHOW>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          </div>
        </Slide>
        <div className="safe-div">
          <img
            src="https://www.rentomojo.com/public/images/icons/virusSafetyGreen.png"
            alt="covid" style={{width:"15px",marginLeft:"140px",float:"left",marginRight:"-100px"}}
          />
          Safety precautions during COVID-19. We’re taking additional steps and
          precautionary measures to protect our community from COVID-19. Know
          more
        </div>
      </SLIDESHOW>
    </div>
  );
};

export default Slideshow;
