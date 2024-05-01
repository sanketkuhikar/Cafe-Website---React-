import React, { Component } from "react";
import "./SignIn.css";
import { Link, Router } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <section className="register-section">
        <h1>Register</h1>
        <div className="container-form">
          <h3>Signup now and get full access to our app.</h3>
          <form action="" className="register-form">
            <input
              type="text"
              name="firstname"
              id="name"
              placeholder="Firstname"
            />
            <input
              type="text"
              name="lastname"
              id="name"
              placeholder="Lastname"
            />
            <input type="email" name="email" id="email" placeholder="Email" />
            <input
              type="password"
              name="password"
              id="pass"
              placeholder="Password"
            />
            <input
              type="password"
              name="confpass"
              id="conspass"
              placeholder="Confirm Password"
            />
            <br />
            <button className="register-btn">Submit</button>
            <div className="account">
              <p>Already have an Account ? </p>
              <Link to="/login">
                <button className="sign-btn">Login</button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignIn;
