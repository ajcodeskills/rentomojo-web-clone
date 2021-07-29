import React from 'react'
import styled from 'styled-components';
import package1 from "../image/package.jpg";
import furniture from "../image/furniture.jpg";
import appliances from "../image/appliance.jpg";
import electronic from "../image/electronic.jpg";
import fitness from "../image/fitness.jpg";
import essential from "../image/essential.jpg";
import disco from "../image/discount.jpg";
import { NavLink } from 'react-router-dom';

import Slideshow from './Slideshow';


const CATEGORY = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
  margin-bottom: 50px;
  margin-top: 40px;
  div {
    border: 1px solid #e2eaf0;
    width: 120px;
    border-radius: 10px;
    font-size: 12px;
    text-align: center;
    text-decoration: none;
    color:#676767;
  }

  img {
    padding-top: 20px;
    width: 40px;
    text-align: center;
  }

  div:hover {
    box-shadow: 0 8px 15px 0 rgb(226, 234, 240),
      0 10px 20px 0 rgb(226, 234, 240);
    cursor: pointer;
  }
`;

const styleLink = {
  textDecoration: "none",
  fontSize: "12px",
  textAlign: "center",
  color:"#676767"
}
export default function Slider() {
    return (
      <div>
      <Slideshow/>
        <CATEGORY>
          <div>
            <NavLink to='/packages-on-rent' style = {styleLink}>
              <img src={package1} alt="" /><br />
              <label>Pakages</label>
            </NavLink>
          </div>
          <div>
            <NavLink to = "/furniture-on-rent" style = {styleLink}>
              <img src={furniture} alt="" /><br />
              <label>Furniture</label>
            </NavLink>
          </div>
          <div>
            <NavLink to = "/appliances-on-rent" style = {styleLink}>
              <img src={appliances} alt="" /><br />
              <label>Appliances</label>
            </NavLink>
          </div>
          <div>
            <NavLink to = "/electronics-on-rent" style = {styleLink}>
              <img src={electronic} alt="" /><br />
              <label>Electronics</label>
            </NavLink>
          </div>
          <div>
            <NavLink to = "/fitness-on-rent" style = {styleLink}>
              <img src={fitness} alt="" /><br />
              <label>Fitness</label>
            </NavLink>
          </div>
          <div>
            <img src={essential} alt="" /><br />
            <label>WFH Essentials</label>
          </div>
          <div>
            <img src={disco} alt="" /><br />
            <label>Upto 70% Off</label>
          </div>
        </CATEGORY>
      </div>
    );
}
