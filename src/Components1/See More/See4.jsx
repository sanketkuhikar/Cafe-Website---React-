import React from "react";
import "./See.css";
import img4 from "../../assets/Sunset/menu4.jpeg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link, Router } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const See4 = () => {
  return (
    <>
      <div className="Menu01">
        <div className="Menu01-image">
          <img src={img4} alt="img4" />
        </div>
        <div className="Menu01-slidepara">
          <ul className="foodItem1">
            <li style={{ fontSize: 30 }}>
              <i id="arrow">
                <FaArrowLeft />
              </i>
            </li>
            <li style={{ color: "#FFAF40" }}>SIDES</li>
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
              <h3>SIDES</h3>
            </div>
            <div className="Menu01-FoodList">
              <div className="Menu01-FoodItemList">
                <h3>Garlic Parmesan Fries</h3>
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
                <h3>Grilled Seasonal Vegetables</h3>
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
                <h3>Cumin-Spiced Roasted Potatoes</h3>
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
                <h3>Sesame Ginger Glazed Green Beans</h3>
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
                <h3>Honey Sriracha Chicken Wings</h3>
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
                <h3>Honey Sriracha Chicken Wings</h3>
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
                <h3>Honey Sriracha Chicken Wings</h3>
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
              <h3>INDULGENT ADD-ONS</h3>
            </div>
            <div className="Menu01-FoodList">
              <div className="Menu01-FoodItemList">
                <h3>Truffle Parmesan Fries</h3>
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
                <h3>Loaded Potato Skins</h3>
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
          <Link to="/menu5">
            <FaArrowCircleDown className="down" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default See4;
