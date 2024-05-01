import React, { useState } from "react";
import "./Motivation.css";

const Motivation = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (!slides.length || !dots.length) {
      console.error("Slides or dots not found.");
      return;
    }

    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(n);
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  const handleSubscribe = () => {
    // Add logic to handle subscription here
    console.log("Subscribed!");
  };

  return (
    <div className="section5">
      <div className="slide-first-container">
        <div className="container-heading">
          <h1 style={{ fontStyle: "italic" }}>
            Motivation Being Our Hard Work
          </h1>
        </div>
        <div className="slideshow-container">
          <div className="slide-container mySlides">
            <h3>
              "I just had the best time at Sunset Cafe! It was so cozy and
              welcoming. The coffee smelled amazing, and the people there were
              so friendly. The food? Delicious! I can't wait to go back again
              and again. It's definitely my new favorite spot!"
            </h3>
          </div>
          <div className="slide-container mySlides">
            <h3>
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem quae iusto esse, assumenda ad inventore suscipit
              animi eligendi, quod ducimus fuga, est autem reiciendis provident
              aliquam incidunt id voluptatem explicabo?"
            </h3>
          </div>
          <div className="slide-container mySlides">
            <h3>
              "lor sit amet consectetur ipsum do possimus iure ut animi fugiat
              blanditiis debitis accusantium aliquam deserunt? Voluptatem
              consectetur illum quis! Accusantium animi atque consequuntur
              laudantium nemo ea ipsa dolor quidem."
            </h3>
          </div>
          <a className="prev" onClick={() => plusSlides(-1)}>
            &#10094;
          </a>
          <a className="next" onClick={() => plusSlides(1)}>
            &#10095;
          </a>
        </div>
        <div className="dot-container">
          <span
            className={slideIndex === 1 ? "dot active" : "dot"}
            onClick={() => currentSlide(1)}
          />
          <span
            className={slideIndex === 2 ? "dot active" : "dot"}
            onClick={() => currentSlide(2)}
          />
          <span
            className={slideIndex === 3 ? "dot active" : "dot"}
            onClick={() => currentSlide(3)}
          />
        </div>
      </div>
      <div className="slide-second-container">
        <h2>
          Subscribe To Newsletter
          <br />
          <span style={{ color: "#BBA6A6" }}> and Get -20% off</span>
        </h2>
        <p>
          Your Gateway to Serenity, Culinary Delights, and Unforgettable
          Moments.
        </p>
        <div className="slide-email">
          <input type="email" placeholder="Enter email address..." />
          <button className="btn-sub" onClick={handleSubscribe}>
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Motivation;
