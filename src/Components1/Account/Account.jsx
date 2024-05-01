import React, { Components1 } from "react";
import "./Account.css";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <>
      <div className="BackGroundColor">
        <div className="account1-Account">
          <div className="account1-LeftSide">
            <div className="LeftSide-Block">
              <p style={{ fontWeight: "bold", fontSize: 26 }}>My Account</p>
              <Link to="/accountInfo">
                <p>Account Information</p>
              </Link>
              <Link to="/address">
                <p>Address Book</p>
              </Link>
              <Link to="/yourOrder">
                <p>Your Order</p>
              </Link>
            </div>
          </div>
          <div className="account1-RightSide">
            <div className="RightSide-Block">
              <h2>MY ACCOUNT</h2>
              <h3>ACCOUNT INFORMATION</h3>
              <div className="line" />
            </div>
            <div className="RightSide-Block1">
              <h4>CONTACT INFORMATION</h4>
              <br />
              <p>abhilash subhash</p>
              <p>abhilashsubhash12345@gmail.com</p>
              <h3>ADDRESS BOOK</h3>
              <div className="line" />
            </div>
            <div className="RightSide-Block2">
              <h4>DEFAULT BILLING ADDRESS</h4>
              <p>You have not set a default billing address.</p>
              <ul>Edit Address</ul>
              <br />
              <h4>DEFAULT SHIPPING ADDRESS</h4>
              <p>You have not set a default shipping address.</p>
              <ul>Edit Address</ul>
            </div>
          </div>
        </div>
        <div className="line1" />
        <div className="slide-email">
          <h2>Let us reach you</h2>
          <input type="email" placeholder="   your E-Mail ID" />
          <button className="btn-sub">SUBMIT</button>
        </div>
      </div>
    </>
  );
};

export default Account;
