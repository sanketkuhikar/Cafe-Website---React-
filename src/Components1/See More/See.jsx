import React, { Components1 } from "react";
import "./See.css";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/Sunset/menu1.jpeg";
import { FaCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link, Router } from "react-router-dom";

const See = () => {
  return (
    <>
      <div className="Menu01">
        <div className="Menu01-image">
          <img src={img1} alt="img1" />
        </div>
        <div className="Menu01-slidepara">
          <ul className="foodItem">
            <li style={{ color: "#FFAF40" }}>BURGER &amp; SANDWICHES</li>
            <li>CHINESE CUSINE</li>
            <li>STARTERS</li>
            <li>SIDES</li>
            <li>SALADS</li>
            <li style={{ fontSize: 30, marginLeft: 30 }}>
              <i id="arrow">
                <FaArrowRight />
              </i>
            </li>
          </ul>
        </div>
        <div className="Menu01-FoodBlock">
          <div className="Menu01-Block">
            <div className="Menu01-FoodItem">
              <h3>BURGERS</h3>
              <div className="circle">
                <div className="outer-circle-G">
                  <div className="inner-circle-G">
                    <i id="fa-circle">
                      <FaCircle />
                    </i>
                  </div>
                </div>
                <div className="outer-circle-R">
                  <div className="inner-circle-R">
                    <i id="fa-circle">
                      <FaCircle />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="Menu01-FoodList">
              <div className="Menu01-FoodItemList">
                <h3>Tandoori Chicken Tikka Burger</h3>
                <p>210/-</p>
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
                <h3>Paneer Bhurji Burger</h3>
                <p>169/-</p>
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
                <h3>Aloo Tikki Burger</h3>
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
                <h3>Egg Bhurji Breakfast Burger</h3>
                <p>129/-</p>
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
                <h3>Keema Pav Burger</h3>
                <p>229/-</p>
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
                <h3>Palak Paneer Burger</h3>
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
          </div>
          {/* Section 2 right side start*/}
          <div className="Menu01-Block">
            <div className="Menu01-FoodItem">
              <h3>SANDWICHES</h3>
              <div className="circle">
                <div className="outer-circle-G">
                  <div className="inner-circle-G">
                    <i id="fa-circle">
                      <FaCircle />
                    </i>
                  </div>
                </div>
                <div className="outer-circle-R">
                  <div className="inner-circle-R">
                    <i id="fa-circle">
                      <FaCircle />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="Menu01-FoodList">
              <div className="Menu01-FoodItemList">
                <h3>Bombay Masala Grilled Cheese</h3>
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
                <h3>Chicken Seekh Kebab SANDWICH</h3>
                <p>179/-</p>
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
                <h3>Mumbai Vada Pav</h3>
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
                <h3>Butter Chicken Naanwich</h3>
                <p>169/-</p>
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
                <h3>Masala Grilled Fish Sandwich</h3>
                <p>199/-</p>
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
                <h3>Veg Seekh Kebab Sub</h3>
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
          </div>
        </div>
        <div className="down-btn">
          <Link to="/menu2">
            <FaArrowCircleDown className="down" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default See;
