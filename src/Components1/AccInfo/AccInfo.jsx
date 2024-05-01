import React from "react";
import "./AccInfo.css";
import { Link } from "react-router-dom";

const AccInfo = () => {
  return (
    <>
      <div className="BackGroundColor">
        <div className="info1-Account">
          <div className="info1-LeftSide">
            <div className="LeftSide-Block">
              <Link to="/account">
                <p>My Account</p>
              </Link>
              <Link to="/accountInfo">
                <p style={{ fontWeight: "bold", fontSize: 26 }}>
                  Account Information
                </p>
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
              <h2>EDIT ACCOUNT INFORMATION</h2>
              <h3>ACCOUNT INFORMATION</h3>
              <div className="line" />
              <div className="info1-information">
                <p>First Name *</p>
                <input type="name" name="firstname" placeholder="  ABC" />
                <p>Last Name *</p>
                <input type="name" name="lastname" placeholder="  XYZ" />
              </div>
              <div className="info1-checkbox">
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  value="checkbox_value"
                  style={{ marginRight: "10px" }}
                ></input>
                <label type="checkbox">Change Email</label>
                <br />
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  value="checkbox_value"
                  style={{ marginRight: "10px" }}
                ></input>
                <label type="checkbox">Change PassWord</label>
              </div>
              <div className="Button">
                <button className="btn-save">SAVE</button>
                <button className="btn-back">GO BACK</button>
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

export default AccInfo;
