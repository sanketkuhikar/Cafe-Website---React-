import React, { Components } from "react";
import "./About.css";
import chef from "../../assets/Sunset/Chef.jpg"

const About = () => {
  return (
    <>
      <div className="section2">
        <div className="section2-left">
          <h2>ABOUT US</h2>
          <h3>The story behind sunset ...</h3>
          <p>
            Welcome to Sunset Café, where our journey began with Chef André's
            bold decision to depart from the world of haute cuisine and create a
            culinary sanctuary rooted in simplicity and heartfelt connection.{" "}
            <br />
            <br />
            <br />
            Inspired by a chance encounter with a charming café bathed in the
            warm glow of twilight, Chef André envisioned a place where genuine
            hospitality and exceptional flavors intertwine. At Sunset Café, each
            dish is a reflection of Chef André's dedication to crafting culinary
            experiences that nourish both body and soul.
          </p>
          <span className="leftbtn">Read More</span>
        </div>
        <div className="section2-right">
          <img src= {chef} alt="image" />
        </div>
      </div>
    </>
  );
};

export default About;
