import React from "react";
import "./See.css";
import img8 from "../../assets/Sunset/menu9.jpeg";

import { FaArrowLeft } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const See8 = () => {
  return (
    <>
      <div className="Menu01">
        <div className="Menu01-image">
          <img src={img8} alt="img8" />
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
            <li>MAIN COURSE</li>
            <li style={{ color: "#FFAF40" }}>VALUE COMBO</li>
            <li style={{ fontSize: 30 }}></li>
          </ul>
        </div>
        <div className="Menu01-FoodBlock">
          <div className="Menu01-Block">
            <div className="Menu01-FoodList">
              <div className="Menu01-FoodItemList">
                <h3>Combo 1: Sunset Sampler</h3>
                <br />
                <ul className="comboItem">
                  <li>Choice of Starter:</li>
                  <span className="comboItemList">
                    <li>Crispy Vegetable Spring Rolls</li>
                    <li>Chicken Satay Skewers</li>
                  </span>
                </ul>
                <ul className="comboItem">
                  <li>Main Course:</li>
                  <span className="comboItemList">
                    <li>Vegetable Pad Thai</li>
                    <li>Chicken Tikka Masala</li>
                  </span>
                </ul>
                <ul className="comboItem">
                  <li>Side Dish:</li>
                  <span className="comboItemList">
                    <li>Garlic Parmesan Fries</li>
                  </span>
                </ul>
                <ul className="comboItem">
                  <li>Beverage:</li>
                  <span className="comboItemList">
                    <li>Soft Drink or Iced Tea</li>
                  </span>
                </ul>
                <p>570/-</p>
              </div>
              <span className="white-Circle">1</span>
              <span className="btn-add">
                ADD
                <i id="fa-plus">
                  <FaPlus />
                </i>
              </span>
            </div>
            <br />
            <div className="Menu01-FoodList">
              <div className="Menu01-FoodItemList">
                <h3>Combo 2: Taste of Asia</h3>
                <br />
                <ul className="comboItem">
                  <li>Choice of Starter:</li>
                  <span className="comboItemList">
                    <li>Prawn Tempura</li>
                    <li>Veg Spring Rolls</li>
                  </span>
                </ul>
                <ul className="comboItem">
                  <li>Main Course:</li>
                  <span className="comboItemList">
                    <li>Beef Rendang with Steamed Jasmine Rice</li>
                    <li>Thai Basil Chicken with Egg Fried Rice</li>
                  </span>
                </ul>
                <ul className="comboItem">
                  <li>Dessert:</li>
                  <span className="comboItemList">
                    <li>Mango Sticky Rice</li>
                  </span>
                </ul>
                <ul className="comboItem">
                  <li>Beverage:</li>
                  <span className="comboItemList">
                    <li>Thai Iced Tea or Lemongrass Infusion</li>
                  </span>
                </ul>
                <p>799/-</p>
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
            <div className="Menu01-FoodList">
              <div className="Menu01-FoodItemList">
                <h3>Combo 3: Vegetarian Delight</h3>
                <br />
                <ul className="comboItem">
                  <li>Choice of Starter:</li>
                  <span className="comboItemList">
                    <li>Caprese Salad</li>
                  </span>
                </ul>
                <ul className="comboItem">
                  <li>Main Course:</li>
                  <span className="comboItemList">
                    <li>Paneer Tikka Masala with Garlic Naan</li>
                  </span>
                </ul>
                <ul className="comboItem">
                  <li>Side Dish:</li>
                  <span className="comboItemList">
                    <li>Cumin-Spiced Roasted Potatoes</li>
                  </span>
                </ul>
                <ul className="comboItem">
                  <li>Dessert:</li>
                  <span className="comboItemList">
                    <li>Lemon Meringue Tart</li>
                  </span>
                </ul>
                <ul className="comboItem">
                  <li>Beverage:</li>
                  <span className="comboItemList">
                    <li>Fresh Lime Soda</li>
                  </span>
                </ul>
                <p>799/-</p>
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
                <h3>Combo 4: Family Feast</h3>
                <br />
                <ul className="comboItem">
                  <li>Choice of Starter:</li>
                  <span className="comboItemList">
                    <li>Caprese Salad</li>
                  </span>
                </ul>
                <ul className="comboItem">
                  <li>Main Course:</li>
                  <span className="comboItemList">
                    <li>Paneer Tikka Masala with Garlic Naan</li>
                  </span>
                </ul>
                <ul className="comboItem">
                  <li>Side Dish:</li>
                  <span className="comboItemList">
                    <li>Cumin-Spiced Roasted Potatoes</li>
                  </span>
                </ul>
                <ul className="comboItem">
                  <li>Dessert:</li>
                  <span className="comboItemList">
                    <li>Lemon Meringue Tart</li>
                  </span>
                </ul>
                <ul className="comboItem">
                  <li>Beverage:</li>
                  <span className="comboItemList">
                    <li>Fresh Lime Soda</li>
                  </span>
                </ul>
                <p>699/-</p>
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
        <div className="down-para">
          <p>
            Indulge in Value and Flavor with Our Irresistible Value Combos at
            Café Sunset!
          </p>
        </div>
      </div>
    </>
  );
};

export default See8;
