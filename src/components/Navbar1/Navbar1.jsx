import React, { Components } from "react";
import "./Navbar1.css";
import logo from "../../assets/Sunset/sunset-cafe-high-resolution-logo-transparent.png";
import { Link, Router } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar1 = ({ backgroundColor }) => {
  return (
    <>
      <div className="nav1" style={{ backgroundColor: backgroundColor }}>
        <div className="nav1-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav1-links">
          <ul className="nav1-links-list">
            <li>
              <Link to="/home2">Home</Link>
            </li>
            <li>
              <Link to="/Menu">Menu</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Blogs">Blogs</Link>
            </li>
            <li>
              <i id="search">
                <FaSearch />
              </i>
              <input
                type="search"
                className="input-nav1"
                placeholder="Search items"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const nav1Style = {
  backgroundColor: "#262626",
};

export default Navbar1;
