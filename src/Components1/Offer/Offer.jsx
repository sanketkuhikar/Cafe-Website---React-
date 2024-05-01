import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./Offer.css";
import { GoGift } from "react-icons/go";
import img1 from "../../assets/Sunset/MENU/COMBO PEPSI 2.png";
import img2 from "../../assets/Sunset/pepsiCombo.jpg";

function Offer() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = new Swiper(".swiper", {
      slidesPerView: 2.5,
      direction: getDirection(),
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        resize: function () {
          swiperInstance.changeDirection(getDirection());
        },
      },
    });

    // Update swiperRef with the instance
    swiperRef.current = swiperInstance;

    // Cleanup function to destroy the Swiper instance
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  // Function to determine direction based on window width
  function getDirection() {
    const windowWidth = window.innerWidth;
    const direction = windowWidth <= 760 ? "vertical" : "horizontal";
    return direction;
  }

  return (
    <>
      <div className="offers3">
        <div className="offers3-offer">
          <div className="text-with-lines">
            BEST OFFERS
            <i id="gift">
              <GoGift />
            </i>
          </div>
        </div>
        <div className="offers3-imgSlider">
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="first-offer">
                  <h3>SPECIAL PROMO</h3>
                  <h2>BURGER COMBO</h2>
                  <div className="offer-get">
                    <h2>
                      BUY <br /> GET
                    </h2>
                    <h1>1</h1>
                  </div>
                  <button className="btn-offer-first">Order Now</button>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="second-slide-offer">
                  <div className="second-silde-heading">
                    <h1>DELICIOUS COMBO</h1>
                    <ul>
                      <li>PEPSI</li>
                      <li>BURGER</li>
                      <li>FRENCH FRIES</li>
                    </ul>
                  </div>
                  <div className="upTo">
                    <h3>
                      UP TO <br /> 50%
                    </h3>
                  </div>
                  <div className="second-slide-image">
                    <img src={img1} alt="img1" />
                    <button className="btn-second-offer">Order Now</button>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <img className="image-Slide" src={img2} alt="img2" />
              </div>
            </div>
          </div>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      </div>
    </>
  );
}

export default Offer;
