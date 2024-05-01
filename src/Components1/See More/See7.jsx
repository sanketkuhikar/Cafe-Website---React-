import React from "react";
import "./See.css";
import img7 from "../../assets/Sunset/menu8.jpeg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link, Router } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const See7 = () => {
  return (
    <>
      <div className="Menu01">
        <div className="Menu01-image">
          <img src={img7} alt="img7" />
        </div>
        <div className="Menu01-slidepara">
          <ul className="foodItem1">
            <li style={{ fontSize: 30 }}>
              <i id="arrow">
                <FaArrowLeft />
              </i>
            </li>
            <li>SALADS</li>
            <li>DESSERTS / ICE-CREAM</li>
            <li style={{ color: "#FFAF40" }}>MAIN COURSE</li>
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
              <h3>MAIN COURSE</h3>
            </div>
            <div className="Menu01-FoodList">
              <div className="Menu01-FoodItemList">
                <h3>Vegetable Pad Thai</h3>
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
                <h3>Paneer Makhani</h3>
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
                <h3>Vegetable Biryani</h3>
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
                <h3>Eggplant Parmesan</h3>
                <p>149/-</p>
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
                <h3>Chicken Tikka Masala</h3>
                <p>149/-</p>
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
                <h3>Grilled Salmon with Lemon Herb Butter</h3>
                <p>149/-</p>
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
                <p>149/-</p>
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
              <h3>PASTA &amp; RISOTTO</h3>
            </div>
            <div className="Menu01-FoodList">
              <div className="Menu01-FoodItemList">
                <h3>Penne Arrabbiata</h3>
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
                <h3>Mushroom Risotto</h3>
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
          </div>
        </div>
        <div className="down-btn">
          <Link to="/menu8">
            <FaArrowCircleDown className="down" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default See7;
