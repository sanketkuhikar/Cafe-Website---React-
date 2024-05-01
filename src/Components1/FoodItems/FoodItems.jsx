import React from "react";
import "./FoodItems.css";
import img1 from "../../assets/Sunset/menu2.jpeg";
import img2 from "../../assets/Sunset/MENU/burger.jpg";
import img3 from "../../assets/Sunset/MENU/chinese.jpg";
import img4 from "../../assets/Sunset/MENU/st1.jpg";
import img5 from "../../assets/Sunset/MENU/sides.jpg";
import img6 from "../../assets/Sunset/MENU/BLOGS/salads.jpg";
import img7 from "../../assets/Sunset/derset.jpeg";
import img8 from "../../assets/Sunset/MENU/main.jpg";
import img9 from "../../assets/Sunset/pepsiCombo.jpg";
import img10 from "../../assets/Sunset/MENU/beverages.jpg";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link, Router } from "react-router-dom";

const FoodItems = () => {
  return (
    <>
      <div className="items1">
        <div className="items1-image">
          <img src={img1} alt="img1" />
        </div>
        <div className="items1-foodImg">
          <div className="items1-heading">
            <div className="text-with-lines">WHAT’S ON YOUR MIND?</div>
          </div>
        </div>
        <div className="items1-ImgBlock">
          <div className="Images">
            <img src={img2} alt="img2" />
            <div className="FoodName">
              <Link to="/seeMore">BURGER &amp; SANDWICHES</Link>
            </div>
          </div>
          <div className="Images">
            <img src={img3} alt="img3" />
            <div className="FoodName">
              <Link to="/menu2">CHINESE CUSINE</Link>
            </div>
          </div>
          <div className="Images">
            <img src={img4} alt="img4" />
            <div className="FoodName">
              <Link to="/menu3">STARTERS</Link>
            </div>
          </div>
          <div className="Images">
            <img src={img5} alt="img5" />
            <div className="FoodName">
              <Link to="/menu4">SIDES</Link>
            </div>
          </div>
          <div className="Images">
            <img src={img6} alt="img6" />
            <div className="FoodName">
              <Link to="/menu5">SALADS</Link>
            </div>
          </div>
          <div className="Images">
            <img src={img7} alt="img7" />
            <div className="FoodName">
              <Link to="/menu6">DESSERTS / ICE-CREAM</Link>
            </div>
          </div>
          <div className="Images">
            <img src={img8} alt="img8" />
            <div className="FoodName">
              <Link to="/menu7">MAIN COURSE</Link>
            </div>
          </div>
          <div className="Images">
            <img src={img9} alt="img9" />
            <div className="FoodName">
              <Link to="/menu8">VALUE COMBO</Link>
            </div>
          </div>
          <div className="Images">
            <img src={img10} alt="img10" />
            <div className="FoodName">
              <a href="" className="btn-FoodPages">
                BEVERAGES
              </a>
            </div>
          </div>
        </div>
        <div className="items1-link-SeeMore">
          <i id="circle-arrow">
            <IoIosArrowDropdownCircle />
          </i>
          <Link to="/seeMore">
            <a className="btn-seeMore">See More</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FoodItems;
