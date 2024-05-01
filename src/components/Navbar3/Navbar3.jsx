import React, { Components } from "react";
import "./Navbar3.css";
import logo from "../../assets/Sunset/sunset-cafe-high-resolution-logo-transparent.png";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

const Navbar3 = () => {
  return (
    <>
      <main>
        <nav className="nav">
          <div className="nav-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav-links">
            <ul className="nav-links-list">
              <li>
                <Link to="/">Home</Link>
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
                <Link to="/account">
                  <i id="user">
                    <FaRegUserCircle />
                  </i>
                </Link>
              </li>
              <Link to="/cart">
                <div className="Cart">
                  <LuShoppingCart />
                  <span>My Cart</span>
                </div>
              </Link>
            </ul>
          </div>
        </nav>
      </main>
    </>
  );
};

export default Navbar3;
