import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./Deals.css";
import img1 from "../../assets/Sunset/MENU/burger.jpg";
import img2 from "../../assets/Sunset/pizza image.png";

const Deals = () => {
  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 28,
      loop: true, // Enable loop
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    return () => {
      // Clean up Swiper instance when component unmounts
      swiper.destroy();
    };
  }, []);

  return (
    <>
      <div className="section3">
        <h2>DEALS AND OFFERS</h2>
        <br />
        <div className="slider-swiper">
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="slider swiper-slide">
                <div className="slider-text">
                  <h3>Flat</h3>
                  <h1>₹75</h1>
                  <h1>OFF</h1>
                  <h2>ON ORDER ABOVE ₹399</h2>
                  <button className="btn-code">
                    Use Code <b> FGU87</b>
                  </button>
                </div>
                <div className="slider-img">
                  <img src={img1} alt="burger" />
                </div>
              </div>
              <div className="slider swiper-slide">
                <div className="slider-text">
                  <h3>Flat</h3>
                  <h1>₹100</h1>
                  <h1>OFF</h1>
                  <h2>ON ORDER ABOVE ₹599</h2>
                  <button className="btn-code">
                    Use Code <b> RTH23</b>
                  </button>
                </div>
                <div className="slider-img">
                  <img src={img2} alt="pizza" />
                </div>
              </div>
              <div className="slider swiper-slide">
                <div className="slider-text">
                  <h3>Flat</h3>
                  <h1>₹100</h1>
                  <h1>OFF</h1>
                  <h2>ON ORDER ABOVE ₹599</h2>
                  <button className="btn-code">
                    Use Code <b> RTH23</b>
                  </button>
                </div>
                <div className="slider-img">
                  <img src={img1} alt="burger" />
                </div>
              </div>
              <div className="slider swiper-slide">
                <div className="slider-text">
                  <h3>Flat</h3>
                  <h1>₹100</h1>
                  <h1>OFF</h1>
                  <h2>ON ORDER ABOVE ₹599</h2>
                  <button className="btn-code">
                    Use Code <b> RTH23</b>
                  </button>
                </div>
                <div className="slider-img">
                  <img src={img2} alt="pizza" />
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Deals;
