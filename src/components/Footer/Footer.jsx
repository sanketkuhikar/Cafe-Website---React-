import React, { Component } from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-first-container">
            <h2>Address</h2>
            <ul>
              <li>Cafe</li>
              <li>Ploat No. 45, Street No. 14</li>
              <li>Marol MIDC Industry </li>
              <li>Estate,</li>
              <li>Andheri</li>
              <li>East, Mumbai-400093</li>
            </ul>
          </div>
          <div className="footer-second-container">
            <h2>Help &amp; Info</h2>
            <ul>
              <li>About Cafe</li>
              <li>Careers</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="footer-third-container">
            <h2>Contact Us</h2>
            <ul>
              <li>1809-908-5647</li>
              <li>Get in Touch</li>
              <li>Cgat With Us </li>
            </ul>
          </div>
          <div className="footer-four-container">
            <h2>Useful Links</h2>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Payment Issues</li>
              <li>Net Banking</li>
              <li>Custom Order</li>
            </ul>
          </div>
        </div>
        <div className="footer-links">
          <h2>Follow Us On :</h2>
          <FaFacebookF />
          <FaInstagram />
          <FaWhatsapp />
          <BsTwitterX />
        </div>
      </footer>

      <div className="footer-last">
        <h2>@2023 Railworld India. All Rights Reserved</h2>
      </div>
    </>
  );
};

export default Footer;
