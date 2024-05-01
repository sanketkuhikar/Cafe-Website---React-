import React, { Component } from "react";
import "./Forget.css";
import forget from "../../assets/Sunset/forward.png";
import { Link, Router } from "react-router-dom";

const Forget = () => {
  return (
    <>
      <div className="forget-section">
        <div className="forget-leftside">
          <img src={forget} alt="" />
        </div>
        <div className="forget-rightside">
          <h2>Forgot Password?</h2>
          <div className="container-forget">
            <h3>
              Enter the Email address associated with your account to get a
              code.
            </h3>
            <form action="" className="forget-form" />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter email address"
            />
            <br />
            <button className="forget-btn">Send Code</button>
            <div className="account">
              <Link to="/login">
                <p className="for-btn">Back to login</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forget;
