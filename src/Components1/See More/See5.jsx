import React from "react";
import "./See.css";
import img5 from "../../assets/Sunset/salad.jpeg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link, Router } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const See5 = () => {
  return (
    <>
      <div className="Menu01">
        <div className="Menu01-image">
          <img src={img5} alt="img5" />
        </div>
        <div className="Menu01-slidepara">
          <ul className="foodItem1">
            <li style={{ fontSize: 30 }}>
              <i id="arrow">
                <FaArrowLeft />
              </i>
            </li>
            <li style={{ color: "#FFAF40" }}>SALADS</li>
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
              <h3>SALADS</h3>
            </div>
            <div className="Menu01-FoodList">
              <div className="Menu01-FoodItemList">
                <h3>Classic Caesar Salad</h3>
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
                <h3>Mediterranean Chickpea Salad</h3>
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
                <h3>Asian Sesame Noodle Salad</h3>
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
                <h3>Summer Berry Spinach Salad</h3>
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
                <h3>Grilled Chicken Avocado Salad</h3>
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
                <h3>Shrimp and Mango Salad (Mango Substitute Available)</h3>
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
                <h3>Tuna Nicoise Salad</h3>
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
                <h3>Thai Beef Salad</h3>
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
              <h3>ENHANCEMENTS</h3>
            </div>
            <div className="Menu01-FoodList">
              <div className="Menu01-FoodItemList">
                <h3>Protein Add-Ons</h3>
                <br />
                <li
                  style={{
                    width: 200,
                    color: "white",
                    fontFamily: '"Josefin Sans", sans-serif',
                  }}
                >
                  Description: Customize your salad with additional grilled
                  chicken, shrimp, salmon, or tofu for an extra protein boost.
                </li>
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
                <h3> Gluten-Free Options Available</h3>
                <br />
                <li
                  style={{
                    width: 200,
                    color: "white",
                    fontFamily: '"Josefin Sans", sans-serif',
                  }}
                >
                  Description: Ask your server for gluten-free alternatives for
                  select salads.
                </li>
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
          <Link to="/menu6">
            <FaArrowCircleDown className="down" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default See5;
