import React, { Component } from "react";
import "./Login.css";
import login from "../../assets/Sunset/login.png";
import { Link, Router } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login-section">
        <div className="login-leftside">
          <h1>Log In</h1>
          <div className="container-login">
            <h3>Log in to your Account</h3>
            <form action="" className="login-form" />
            <input
              type="text"
              name="firstname"
              id="name"
              placeholder="Username.."
            />
            <input
              type="password"
              name="lastname"
              id="name"
              placeholder="Password"
            />
            <Link to="/forget">
              <p className="forgot">Forget Password ?</p>
            </Link>
            <br />
            <button className="login-btn">Submit</button>
            <p>
              If you dont have account{" "}
              <button className="login-button">Login</button>
            </p>
          </div>
        </div>
        <div className="login-rightside">
          <img src={login} alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
