import React, { components1 } from "react";
import "./MenuPart1.css";
import img1 from "../../assets/Sunset/cafe1.jpg";
import img2 from "../../assets/Sunset/cafe2.jpg";
import img3 from "../../assets/Sunset/cafe3.jpg";
import img4 from "../../assets/Sunset/MENU/burger.jpg";
import img5 from "../../assets/Sunset/MENU/BLOGS/salads.jpg";
import img6 from "../../assets/Sunset/desert.jpg";
import img7 from "../../assets/Sunset/comboMenu.jpeg";
import { LuPlusCircle } from "react-icons/lu";
import { Link, Router } from "react-router-dom";

const MenuPart1 = () => {
  return (
    <>
      <div className="menu1">
        <div className="menu1-container">
          <span className="word-with-line">S U N S E T</span>
          <p>CAFE</p>
        </div>
        <div className="menu1-images">
          <div className="menu1-pic">
            <img src={img1} alt="img1" />
            <br />
            <p className="btn-cont">HOT BEVERAGES</p>
          </div>
          <div className="menu1-pic">
            <img src={img2} alt="img2" />
            <br />
            <p className="btn-cont">COLD BEVERAGES</p>
          </div>
          <div className="menu1-pic">
            <img src={img3} alt="" />
            <br />
            <p className="btn-cont">SPECIALTY DRINKS</p>
          </div>
        </div>
        <div className="menu1-leftCont">
          <div className="menu1-leftblock">
            <h3>Espresso</h3>
            <span>
              A single shot of concentrated <br />
              coffee
            </span>
          </div>
          <div className="menu1-leftblockCont">
            <i id="circle">
              <LuPlusCircle />
            </i>
            <p>RS.120</p>
          </div>
        </div>
        <div className="menu1-leftCont">
          <div className="menu1-leftblock">
            <h3>Cappuccino</h3>
            <span>
              Equal parts espresso steamed <br />
              milk, and foam
            </span>
          </div>
          <div className="menu1-leftblockCont">
            <i id="circle">
              <LuPlusCircle />
            </i>
            <p>RS.250</p>
          </div>
        </div>
        <div className="menu1-leftCont">
          <div className="menu1-leftblock">
            <h3>Americano</h3>
            <span>Espresso shots with hot water</span>
          </div>
          <div className="menu1-leftblockCont">
            <i id="circle">
              <LuPlusCircle />
            </i>
            <p>RS.158</p>
          </div>
        </div>
        <div className="menu1-center">
          <div className="menu1-centerblock">
            <h3>Iced Coffee</h3>
            <p>RS.140</p>
          </div>
          <div className="menu1-centerblockCont">
            <i id="circle">
              <LuPlusCircle />
            </i>
          </div>
          <div className="menu1-centerblock">
            <h3>Iced Latte</h3>
            <p>RS.130</p>
          </div>
          <div className="menu1-centerblockCont">
            <i id="circle">
              <LuPlusCircle />
            </i>
          </div>
          <div className="menu1-centerblock">
            <h3>Frappuccino</h3>
            <p>RS.120</p>
          </div>
          <div className="menu1-centerblockCont">
            <i id="circle">
              <LuPlusCircle />
            </i>
          </div>
          <div className="menu1-centerblock">
            <h3>Affogato</h3>
            <p>RS.110</p>
          </div>
          <div className="menu1-centerblockCont">
            <i id="circle">
              <LuPlusCircle />
            </i>
          </div>
          <div className="menu1-centerblock">
            <h3>Ice Latte</h3>
            <p>RS.160</p>
          </div>
          <div className="menu1-centerblockCont">
            <i id="circle">
              <LuPlusCircle />
            </i>
          </div>
        </div>
        <div className="menu1-right">
          <div className="menu1-rightblock">
            <h3>Matcha Latte</h3>
            <p>RS.148</p>
          </div>
          <div className="menu1-rightblockCont">
            <i id="circle">
              <LuPlusCircle />
            </i>
          </div>
          <div className="menu1-rightblock">
            <h3>Turmeric Latte</h3>
            <p>RS.160</p>
          </div>
          <div className="menu1-rightblockCont">
            <i id="circle">
              <LuPlusCircle />
            </i>
          </div>
          <div className="menu1-rightblock">
            <h3>Caramel Tea</h3>
            <p>RS.160</p>
          </div>
          <div className="menu1-rightblockCont">
            <i id="circle">
              <LuPlusCircle />
            </i>
          </div>
          <div className="menu1-rightblock">
            <h3>Green Tea</h3>
            <p>RS.120</p>
          </div>
          <div className="menu1-rightblockCont">
            <i id="circle">
              <LuPlusCircle />
            </i>
          </div>
          <div className="menu1-rightblock">
            <h3>Herbal Infusions</h3>
            <p>RS.120</p>
          </div>
          <div className="menu1-rightblockCont">
            <i id="circle">
              <LuPlusCircle />
            </i>
          </div>
        </div>
      </div>

      <div className="menu2">
        <h3 className="sect2-btn">OTHER CATEGORIES</h3>
        <div className="menu2-images">
          <div className="menu2-img1">
            <img src={img4} alt="img4" />
            <h3>BURGER &amp; SANDWICHES</h3>
          </div>
          <div className="menu2-img2">
            <img src={img5} alt="img5" />
            <h3>SALADS</h3>
          </div>
          <div className="menu2-img2">
            <img src={img6} alt="img6" />
            <h3>DESSERTS / ICE-CREAM</h3>
          </div>
          <div className="menu2-img1">
            <img src={img7} alt="img7" />
            <h3>VALUE COMBO</h3>
          </div>
        </div>
        <Link to="/explore">
          <button className="menu2-btnEXP">EXPLORE</button>
        </Link>
      </div>
    </>
  );
};

export default MenuPart1;
