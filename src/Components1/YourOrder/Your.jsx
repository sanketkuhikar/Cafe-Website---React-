import React from "react";
import "./Your.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/Sunset/cloud.png";
import img2 from "../../assets/Sunset/MENU/sandwich.jpg";
import img3 from "../../assets/Sunset/MENU/burger.jpg";
import img4 from "../../assets/Sunset/MENU/sandwich 2.jpg";

const Your = () => {
  return (
    <>
      <div className="BackGroundColor">
        <div className="Order1-Account">
          <div className="Add1-LeftSide">
            <div className="LeftSide-Block">
              <Link to="/account">
                <p>My Account</p>
              </Link>
              <Link to="/accountInfo">
                <p>Account Information</p>
              </Link>
              <Link to="/address">
                <p>Address Book</p>
              </Link>
              <p style={{ fontWeight: "bold", fontSize: 25 }}>Your Order</p>
            </div>
          </div>
          <div className="Order1-RightSide-Block">
            <div className="RightSide-Blocks">
              <h2>Your order</h2>
              <div className="line" />
            </div>
            <div className="RightSide-cont">
              <div className="RightSide-Img">
                <img src={img1} alt="CloudImg" />
                <p>seems like you have yet to place an order</p>
              </div>
            </div>
            <div className="RightSide-Blocks-1">
              <h2>Order History</h2>
              <br />
              <div className="line" />
            </div>
            <div className="Order1-history">
              <div className="order-history">
                <div className="order-Img">
                  <img src={img2} alt="sandwish" />
                </div>
                <div className="order-Items">
                  <h4 style={{ fontSize: 21 }}>Bombay Masala Sandwich</h4>
                  <p>Data: 02-01-24 12:14pm</p>
                  <p>Payment: UPI</p>
                </div>
              </div>
              <div className="order-history">
                <div className="order-Img">
                  <img src={img3} alt="burger" />
                </div>
                <div className="order-Items">
                  <h4 style={{ fontSize: 22 }}>Burger</h4>
                  <p>Data: 01-01-24 1:40pm</p>
                  <p>Payment: UPI</p>
                </div>
              </div>
              <div className="order-history">
                <div className="order-Img">
                  <img src={img4} alt="sandwish" />
                </div>
                <div className="order-Items">
                  <h4 style={{ fontSize: 22 }}>Corn Sandwich</h4>
                  <p>Data:20-12-23 1:04pm</p>
                  <p>Payment: UPI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line1" />
      <div className="slide-email">
        <h2>Let us reach you</h2>
        <input type="email" placeholder="   your E-Mail ID" />
        <button className="btn-sub">SUBMIT</button>
      </div>
    </>
  );
};

export default Your;
