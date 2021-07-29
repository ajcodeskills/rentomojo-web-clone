import React from 'react'
import styled from 'styled-components'
import pro1 from "../image/pro1.jpg";
import relocation from "../image/relocation.jpg";
import maintain from "../image/maintain.jpg";
import cancel from "../image/cancel.jpg";
import delivery from "../image/delivery.jpg";
import elec from "../image/elec.jpg" 
import Slider from './Slider';
import Feedback from './Feedback';
import { AllItems } from './allItems/AllItems';


const FEATURES = styled.div`
  margin-top: 30px;
  padding: 50px 200px 50px 200px;


  #lbl1 {
    font-size: 20px;
  }
  .lbl2 {
    font-size: 18px;
  }
  hr {
    width: 50px;
    margin-top: 18px;
    background: #dc3226;
    border: 1px solid #dc3226;
  }

  .feature-sec > div {
    display: grid;
    grid-template-columns: auto auto auto;
    text-align: left;
  }
  .feature-sec > div > div {
    margin-top: 20px;
    padding: 30px 50px 30px 0;
    width: 360px;
  }

  .feature-sec > div > div > img {
    width: 70px;
    margin-left: -12px;
    padding-bottom: 10px;
  }
  .lbl3 {
    font-size: 12.5px;
    color: #717171;
  }
`;

export default function Features() {
    return (
      <FEATURES>
        <Slider />

        <label id="lbl1">There's more</label>
        <br />
        <label className="lbl2">to renting</label>
        <hr />
        <div>
          <AllItems />
        </div>
        

        <div className="feature-sec">
          <div>
            <div>
              <img src={pro1} alt="pro1" />
              <br />
              <label className="lbl2">Finest-quality products</label>
              <br />
              <label className="lbl3">
                Quality matters to you, and us! That's why we do a strict
                quality-check for every product.
              </label>
            </div>
            <div>
              <img src={relocation} alt="reloaction" />
              <br />
              <label className="lbl2">Free relocation</label>
              <br />
              <label className="lbl3">
                Quality matters to you, and us! That's why we do a strict
                quality-check for every product.
              </label>
            </div>
            <div>
              <img src={maintain} alt="maintain" />
              <br />
              <label className="lbl2">Free maintenance</label>
              <br />
              <label className="lbl3">
                Quality matters to you, and us! That's why we do a strict
                quality-check for every product.
              </label>
            </div>
            <div>
              <img src={cancel} alt="cancel" />
              <br />
              <label className="lbl2">Cancel anytime</label>
              <br />
              <label className="lbl3">
                Quality matters to you, and us! That's why we do a strict
                quality-check for every product.
              </label>
            </div>
            <div>
              <img
                src={delivery}
                alt="delivery"
                style={{ paddingTop: "15px" }}
              />
              <br />
              <label className="lbl2">Easy return on delivery</label>
              <br />
              <label className="lbl3">
                Quality matters to you, and us! That's why we do a strict
                quality-check for every product.
              </label>
            </div>
            <div>
              <img src={elec} alt="elec" style={{ marginTop: "-10px" }} />
              <br />
              <label className="lbl2">Keep upgrading</label>
              <br />
              <label className="lbl3">
                Quality matters to you, and us! That's why we do a strict
                quality-check for every product.
              </label>
            </div>
            <div>
              <label className="lbl2">
                <a
                  href="/"
                  style={{
                    color: "#5BCFD1",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  KNOW MORE
                </a>
              </label>
            </div>
          </div>
        </div>


        <Feedback/>

      </FEATURES>
    );
}
