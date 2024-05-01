import React, { Components } from "react";
import "./Navbar2.css";
import logo from "../../assets/Sunset/sunset-cafe-high-resolution-logo-transparent.png";
import { Link, Router } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import img1 from "../../assets/Sunset/MENU/Chai Infusion.jpg";
import img2 from "../../assets/Sunset/MENU/Sizzling Tandoori Platter.jpg";
import img3 from "../../assets/Sunset/MENU/Mango Curry.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar2 = () => {
  return (
    <>
      <header>
        <nav className="nav">
          <div className="nav-logo">
            <a href="">
              <img src={logo} alt="logo" />
            </a>
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

        <section className="section1">
          <div className="leftside">
            <h2>WELCOME</h2>
            <p>
              Discover Culinary Elegance at Café Sunset: Where Every Sip and
              Bite Unveils a Symphony of Flavors and Moments.
            </p>
            <h3>
              Gateway to Serenity,
              <br />
              Culinary Delights,
            </h3>
            <p className="small-p">
              Step into a World Where Ambiance, Flavor, and Warmth Converge—A
              Haven Where Every Visit Feels Like Coming Home.
            </p>
            <span className="leftbtn">Order Now</span>
          </div>
          <div className="rightside">
            <h3>We Are Known For :-</h3>
            <div className="wrapper">
              <i id="left">
                <IoIosArrowBack />
              </i>
              <ul className="carousel">
                <li className="card">
                  <div className="img">
                    <img src={img1} alt="img1" draggable="false" />
                  </div>
                  <h2
                    style={{
                      color: "rgba(209, 110, 67, 1)",
                      fontSize: "large",
                    }}
                  >
                    Chai Infusion Dessert: Cardamom Chai Panna Cotta
                  </h2>
                  <p style={{ margin: "2px" }}>
                    Experience the sweet finale of your meal with our Chai
                    Infusion Dessert-Cardamom Chai Panna Cotta. This delectable
                    creation melds the velvety smoothness of Italian panna cotta
                    with the aromatic allure of Indian chai.
                  </p>
                  <div id="find">
                    <p style={{ color: "rgba(209, 110, 67, 1)" }}>
                      Find out more...
                    </p>
                  </div>
                </li>
                <li className="card">
                  <div className="img">
                    <img
                      src={img2}
                      style={{
                        height: "100%",
                        width: "100%",

                        objectFit: "cover",
                      }}
                      alt="img2"
                      draggable="false"
                    />
                  </div>
                  <h2
                    style={{
                      color: "rgba(209, 110, 67, 1)",
                      marginTop: "-40px",
                      fontSize: "large",
                    }}
                  >
                    Sizzling Tandoori Platter: A Feast for the Senses
                  </h2>
                  <p style={{ fontSize: "14.5px", marginBottom: "-90px" }}>
                    Transport your taste buds to the streets of India with our
                    Sizzling Tandoori Platter. Succulent morsels of marinated
                    chicken, paneer, and lamb are grilled to perfection in our
                    traditional tandoor, imparting a smoky flavor and tender
                    texture. Served with a side of mint chutney
                  </p>
                  <div id="fi2">
                    <p
                      style={{
                        color: "rgba(209, 110, 67, 1)",
                        marginTop: "20px",
                      }}
                    >
                      Find out more...
                    </p>
                  </div>
                </li>
                <li className="card">
                  <div className="img">
                    <img
                      src={img3}
                      style={{
                        height: "100%",
                        width: "100%",

                        objectFit: "cover",
                      }}
                      alt="img3"
                      draggable="false"
                    />
                  </div>
                  <h2
                    style={{
                      color: "rgba(209, 110, 67, 1)",
                      marginTop: "-40px",
                      fontSize: "large",
                    }}
                  >
                    Mango Curry Chicken
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
                      marginTop: "20px",
                      lineHeight: "1.2rem",
                    }}
                  >
                    Indulge in the rich flavors of our Seasonal Spice Delight -
                    Mango Curry Chicken. A symphony of succulent chicken pieces
                    bathed in a luscious curry infused with the sweetness of
                    ripe mangoes.
                  </p>
                  <div id="fi3">
                    <p
                      style={{
                        color: "rgba(209, 110, 67, 1)",
                        marginTop: "40px",
                      }}
                    >
                      Find out more...
                    </p>
                  </div>
                </li>
              </ul>
              <i id="right">
                <IoIosArrowForward />
              </i>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Navbar2;
