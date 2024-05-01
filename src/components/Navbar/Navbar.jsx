import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/Sunset/sunset-cafe-high-resolution-logo-transparent.png";
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import img1 from "../../assets/Sunset/MENU/Chai Infusion.jpg";
import img2 from "../../assets/Sunset/MENU/Sizzling Tandoori Platter.jpg";
import img3 from "../../assets/Sunset/MENU/Mango Curry.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  const wrapperRef = useRef(null);
  const carouselRef = useRef(null);
  const firstCardWidthRef = useRef(0);

  const [isDragging, setIsDragging] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const carousel = carouselRef.current;

    if (!carousel || !wrapper) return;

    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    firstCardWidthRef.current = firstCardWidth;
    const arrowBtns = wrapper.querySelectorAll("i");
    const carouselChildrens = Array.from(carousel.children);

    let startX, startScrollLeft;

    // Get the number of cards that can fit in the carousel at once
    const cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    // Insert copies of the last few cards to beginning of carousel for infinite scrolling
    carouselChildrens
      .slice(-cardPerView)
      .reverse()
      .forEach((card) => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
      });

    // Insert copies of the first few cards to end of carousel for infinite scrolling
    carouselChildrens.slice(0, cardPerView).forEach((card) => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        carousel.scrollLeft -=
          btn.id === "left" ? -firstCardWidth : firstCardWidth;
      });
    });

    const handleMouseMove = (event) => {
      if (!isDragging) return;
      const delta = startX - event.clientX;
      carousel.scrollLeft = startScrollLeft + delta;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseDown = (event) => {
      setIsDragging(true);
      startX = event.clientX;
      startScrollLeft = carousel.scrollLeft;

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    carousel.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      carousel.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isDragging && isAutoPlay) {
        carouselRef.current.scrollLeft += firstCardWidthRef.current;
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isDragging, isAutoPlay]);

  
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
                <Link to="/SignIn">
                  <button className="nav-btn">Sign in</button>
                </Link>
                <Link to="/Login">
                  <button className="nav-button">Login</button>
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

export default Navbar;
