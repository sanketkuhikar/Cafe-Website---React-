import React, { Components1 } from "react";
import "./See.css";
import img3 from "../../assets/Sunset/MENU/st1.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link, Router } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const See3 = () => {
  return (
    <>
      <div className="Menu01">
        <div className="Menu01-image">
          <img src={img3} alt="img3" />
        </div>
        <div className="Menu01-slidepara">
          <ul className="foodItem1">
            <li style={{ fontSize: 30 }}>
              <i id="arrow">
                <FaArrowLeft />
              </i>
            </li>
            <li style={{ color: "#FFAF40" }}>STARTERS</li>
            <li>SIDES</li>
            <li>SALADS</li>
            <li>DESSERTS / ICE-CREAM</li>
            <li>MAIN COURSE</li>
            <li>VALUE COMBO</li>
            <li style={{ fontSize: 30 }}>
              <i id="arrow">
                <FaArrowRight />
              </i>
            </li>
          </ul>
        </div>
        <div className="Menu01-FoodBlock">
          <div className="Menu01-Block">
            <div className="Menu01-FoodItem1">
              <h3>STARTERS</h3>
            </div>
            <div className="Menu01-FoodList">
              <div className="Menu01-FoodItemList">
                <h3>Crispy Vegetable Spring Rolls</h3>
                <p>159/-</p>
              </div>
              <div className="outer-circle-G">
                <div className="inner-circle-G">
                  <i id="fa-circle">
                    <FaCircle />
                  </i>
                </div>
              </div>
              <span className="white-Circle">1</span>
              <span className="btn-add">
                ADD
                <i id="fa-plus">
                  <FaPlus />
                </i>
              </span>
            </div>
            <div className="Menu01-FoodList">
              <div className="Menu01-FoodItemList">
                <h3>Paneer Tikka Skewers</h3>
                <p>149/-</p>
              </div>
              <div className="outer-circle-G">
                <div className="inner-circle-G">
                  <i id="fa-circle">
                    <FaCircle />
                  </i>
                </div>
              </div>
              <span className="white-Circle">1</span>
              <span className="btn-add">
                ADD
                <i id="fa-plus">
                  <FaPlus />
                </i>
              </span>
            </div>
            <div className="Menu01-FoodList">
              <div className="Menu01-FoodItemList">
                <h3>Stuffed Mushrooms with Spinach and Feta</h3>
                <p>139/-</p>
              </div>
              <div className="outer-circle-G">
                <div className="inner-circle-G">
                  <i id="fa-circle">
                    <FaCircle />
                  </i>
                </div>
              </div>
              <span className="white-Circle">1</span>
              <span className="btn-add">
                ADD
                <i id="fa-plus">
                  <FaPlus />
                </i>
              </span>
            </div>
            <div className="Menu01-FoodList">
              <div className="Menu01-FoodItemList">
                <h3>Corn and Cheese Balls</h3>
                <p>139/-</p>
              </div>
              <div className="outer-circle-G">
                <div className="inner-circle-G">
                  <i id="fa-circle">
                    <FaCircle />
                  </i>
                </div>
              </div>
              <span className="white-Circle">1</span>
              <span className="btn-add">
                ADD
                <i id="fa-plus">
                  <FaPlus />
                </i>
              </span>
            </div>
            <div className="Menu01-FoodList">
              <div className="Menu01-FoodItemList">
                <h3>Chicken Satay with Peanut Sauce</h3>
                <p>139/-</p>
              </div>
              <div className="outer-circle-R">
                <div className="inner-circle-R">
                  <i id="fa-circle">
                    <FaCircle />
                  </i>
                </div>
              </div>
              <span className="white-Circle">1</span>
              <span className="btn-add">
                ADD
                <i id="fa-plus">
                  <FaPlus />
                </i>
              </span>
            </div>
            <div className="Menu01-FoodList">
              <div className="Menu01-FoodItemList">
                <h3>Prawn Tempura</h3>
                <p>139/-</p>
              </div>
              <div className="outer-circle-R">
                <div className="inner-circle-R">
                  <i id="fa-circle">
                    <FaCircle />
                  </i>
                </div>
              </div>
              <span className="white-Circle">1</span>
              <span className="btn-add">
                ADD
                <i id="fa-plus">
                  <FaPlus />
                </i>
              </span>
            </div>
            <div className="Menu01-FoodList">
              <div className="Menu01-FoodItemList">
                <h3>Spicy Chicken Wings</h3>
                <p>139/-</p>
              </div>
              <div className="outer-circle-R">
                <div className="inner-circle-R">
                  <i id="fa-circle">
                    <FaCircle />
                  </i>
                </div>
              </div>
              <span className="white-Circle">1</span>
              <span className="btn-add">
                ADD
                <i id="fa-plus">
                  <FaPlus />
                </i>
              </span>
            </div>
            <div className="Menu01-FoodList">
              <div className="Menu01-FoodItemList">
                <h3>Fish Tikka Tacos</h3>
                <p>139/-</p>
              </div>
              <div className="outer-circle-R">
                <div className="inner-circle-R">
                  <i id="fa-circle">
                    <FaCircle />
                  </i>
                </div>
              </div>
              <span className="white-Circle">1</span>
              <span className="btn-add">
                ADD
                <i id="fa-plus">
                  <FaPlus />
                </i>
              </span>
            </div>
          </div>
          {/* Section 2 right side start*/}
          <div className="Menu01-Block">
            <div className="Menu01-FoodItem1">
              <h3>MOUTHWATERING COMBOS</h3>
            </div>
            <div className="Menu01-FoodList">
              <div className="Menu01-FoodItemList">
                <h3>Vegetarian Platter</h3>
                <p>149/-</p>
              </div>
              <span className="white-Circle">1</span>
              <span className="btn-add">
                ADD
                <i id="fa-plus">
                  <FaPlus />
                </i>
              </span>
            </div>
            <div className="Menu01-FoodList">
              <div className="Menu01-FoodItemList">
                <h3>Sunset Signature Sampler</h3>
                <p>139/-</p>
              </div>
              <span className="white-Circle">1</span>
              <span className="btn-add">
                ADD
                <i id="fa-plus">
                  <FaPlus />
                </i>
              </span>
            </div>
          </div>
        </div>
        <div className="down-btn">
          <Link to="/menu4">
            <FaArrowCircleDown className="down" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default See3;
