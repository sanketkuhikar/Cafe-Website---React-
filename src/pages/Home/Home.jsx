import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import Deals from "../../components/Deals/Deals";
import Reservation from "../../components/Reservation/Reservation";
import Motivation from "../../components/Motivation/Motivation";
import Footer from "../../components/Footer/Footer";


const Homepage = () => {
  return (
    <>
      <Navbar />
      <About />
      <Deals />
      <Reservation />
      <Motivation />
      <Footer />
    </>
  );
};

export default Homepage;
