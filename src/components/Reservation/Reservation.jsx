import React, { Component } from "react";
import "./Reservation.css";
import table from "../../assets/Sunset/MENU/Book a table.jpg";

const Reservation = () => {
  return (
    <>
      <div className="section4">
        <div className="section4-left">
          <img src={table} alt="img" />
        </div>
        <div className="section4-right">
          <form action="">
            <h3>Reservation</h3>
            <h2>BOOK A TABLE ONLINE</h2>
            <input type="text" name="name" id="name" placeholder="Your Name" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            <input
              type="datetime"
              name="datetime"
              id="datetime"
              placeholder="Date & Time"
            />
            <input
              type="number"
              name="number"
              id="number"
              placeholder="No. of people"
            />
            <textarea
              name="text"
              id="text"
              cols={30}
              rows={10}
              placeholder="Special Request"
              defaultValue={""}
            />
            <button className="btn-form">BOOK NOW</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reservation;
