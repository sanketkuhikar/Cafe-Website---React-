import React, { Components1 } from "react";
import "./AddBook.css";
import { Link } from "react-router-dom";

const AddBook = () => {
  return (
    <>
      <div className="BackGroundColor">
        <div className="Add1-Account">
          <div className="Add1-LeftSide">
            <div className="LeftSide-Block">
              <Link to="/account">
                <p>My Account</p>
              </Link>
              <Link to="/accountInfo">
                <p>Account Information</p>
              </Link>
              <Link to="/address">
                <p style={{ fontWeight: "bold", fontSize: 25 }}>Address Book</p>
              </Link>
              <Link to="/yourOrder">
                <p>Your Order</p>
              </Link>
            </div>
          </div>
          <div className="account1-RightSide">
            <div className="RightSide-Block">
              <h2>ADD NEW ADDRESS</h2>
              <h3>CONTACT INFORMATION</h3>
              <div className="line" />
            </div>
            <div className="Add1-information">
              <p>First Name *</p>
              <input type="name" name="firstname" placeholder="  ABC" />
              <p>Last Name *</p>
              <input type="name" name="lastname" placeholder="  XYZ" />
              <p>Phone Number *</p>
              <input type="number" name="Phone" placeholder="" />
            </div>
            <div className="RightSide-Block1">
              <h3>ADDRESS</h3>
              <div className="line" />
            </div>
            <div className="Add1-information-1">
              <p>Street Address *</p>
              <input type="name" name="address" placeholder="" />
              <p>City *</p>
              <input type="name" name="city" placeholder="" />
              <p>State *</p>
              <input type="name" name="State" placeholder="" />
              <p>Zip Code *</p>
              <input type="number" name="code" placeholder="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBook;
