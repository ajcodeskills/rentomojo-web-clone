import React from 'react'
import styled from 'styled-components';
import appstore from "../image/appstore.png";
import telegram from "../image/telegram.png";
import fbicon from "../image/fbicon.jpg";
import twitter from "../image/twiitericon.jpg";
import LinedIN from "../image/linkedinicon.jpg";
import youtube from "../image/youtube.jpg";
import insta from "../image/instaicon.jpg";
import social from "../image/socialicon.jpg";
import dial from "../image/dial.jpg"

const FOOTER = styled.div`
  background: #f5f7fa;
  padding: 150px 200px 50px 200px ;

  label {
    color: #717171;
    font-size: 11px;
  }
  h5,h3 {
    color: #717171;
  }
  #read-more {
    cursor: pointer;
    font-size: 11px;
  }
  ul > li {
    font-size: 11px;
    color: #717171;
    line-height: 31px;
    list-style-type: none;
  }
  ul>li:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  ul{
      display: flex;
      flex-direction: column;
      float: left;
      justify-content: space-around;
      width: 25%;
  }
  ul>li>#chat-input{
      background: none;
      border:1px solid black;
      width: 150px;
      border-radius: 8px;
      padding: 10px;
      cursor: pointer;
  }
  ul>li>img{
      width: 260px;
      margin: -10px;
  }
  hr{
      width: 100%;
  }

  .footer-end{
      margin:40px;
      display: flex;
      justify-content: space-between;
  }
  
  .footer-end>div>img{
    width:30px;
    margin-top: -20px;
    cursor: pointer;
    margin-left: 5px;
  }
`;
export default function Footer() {
    return (
      <>
        <FOOTER>
          <div>
            <h5>RentoMojo Pune: The Budget Way To A Better Lifestyle!</h5>
            <label>
              RentoMojo is a leading Indian rental brand. We offer top-quality
              furniture, appliances, and electronics on rent in Pune at a budget
              monthly price. It’s cheaper to rent what your home needs from us,
              instead of spending a huge amount purchasing it from a store. We
              provide great deals and benefits with our rental products.
            </label>
            <br />
            <br />
            <label>
              You can rent any furniture, appliance, or gadget from us for a few
              weeks or a few years, based on your needs and budget. If you
              subscribe long-term, you get the most savings. We provide multiple
              added advantages with a top-notch rental experience. Our benefits
              include free maintenance, free relocation, and damage waiver.
            </label>
            <br />
            <br />
            <label>
              All the products in our inventory are in mint condition. We
              provide furniture, electronics, and appliances made by the best
              brands in the market. You can rent from us within 5 minutes
              online. We offer free doorstep delivery and installation all over
              Pune, including localities such as Camp, Koregaon Park, Hinjewadi,
              Yerawada, and Kothrud.
            </label>
            <br />
            <br />
            <label id="read-more">Read More &nbsp;&nbsp;</label>
            <br />
            <br />
            <br />
            <div>
              <ul>
                <h3 style={{ fontSize: "13px" }}>RENTOMOJO</h3>
                <br />
                <li>About Us</li>
                <li>Culture</li>
                <li>Investors</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Our Benefits</li>
                <li>Sitemap</li>
              </ul>
              <ul>
                <h3 style={{ fontSize: "13px" }}>INFORMATION</h3>
                <br />
                <li>Blog</li>
                <li>FAQs</li>
                <li>Documents Required</li>
                <li>Your Guide to a Smarter Living</li>
              </ul>
              <ul>
                <h3 style={{ fontSize: "13px" }}>POLICIES</h3>
                <br />
                <li>Shipping Policy</li>
                <li>Cancellation & Return</li>
                <li>Privacy Policy</li>
                <li>Rental Terms & Conditions</li>
                <li>Referral Terms & Conditions</li>
              </ul>
              <ul>
                <h3 style={{ fontSize: "13px" }}>NEED HELP ?</h3>
                <br />
                <li>
                  <img
                    src={dial}
                    alt="dial"
                    style={{
                      width: "30px",
                      marginRight: "5px",
                      marginBottom: "-20px",
                      marginLeft: "1px",
                    }}
                  />{" "}
                  1800 102 6601
                </li>
                <li style={{ marginLeft: "40px" }}> 080 4687 2700</li>

                <li style={{ marginLeft: "40px" }}>(9AM - 6PM)</li>
                <li>
                  <img
                    src={telegram}
                    alt="telegram"
                    style={{
                      width: "20px",
                      marginRight: "14px",
                      marginLeft: "5px",
                    }}
                  />
                  jo@rentomojo.com
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Chat with us"
                    id="chat-input"
                  />
                </li>
                <br />
                <li>
                  <h3>DOWNLOAD APP</h3>
                </li>
                <li>
                  <img src={appstore} alt="img" />
                </li>
              </ul>
            </div>
            <hr />
            <div className="footer-end">
              <label>© 2021. Edunetwork Pvt. Ltd.</label>
              <div className="footor-icons">
                <img src={fbicon} alt="fb" />
                <img src={twitter} alt="twitter" />
                <img src={LinedIN} alt="li" />
                <img src={youtube} alt="yt" />
                <img src={insta} alt="insta" />
                <img src={social} alt="social" />
              </div>
              <label style={{ cursor: "pointer" }}>Go Up</label>
            </div>
          </div>
        </FOOTER>
      </>
    );
}
