import React, { useRef, useEffect } from "react";
import "./Cart.css";
import img1 from "../../assets/Sunset/MENU/sandwich.jpg";
import img2 from "../../assets/Sunset/MENU/Seekh.jpg";
import img3 from "../../assets/Sunset/MENU/Vadapav.jpg";
import img4 from "../../assets/Sunset/leftIcon.jpg";
import img5 from "../../assets/Sunset/MENU/beverages.jpg";
import img6 from "../../assets/Sunset/MENU/sandwich.jpg";
import img7 from "../../assets/Sunset/MENU/burger.jpg";
import img8 from "../../assets/Sunset/derset.jpeg";
import img9 from "../../assets/Sunset/desert.jpg";
import img10 from "../../assets/Sunset/MENU/burger.jpg";
import img11 from "../../assets/Sunset/rightIcon.png";
import { BsTrash } from "react-icons/bs";
import { HiOutlinePlusCircle } from "react-icons/hi2";

function Cart() {
  const scrollContainerRef = useRef(null);

  const handleWheelScroll = (event) => {
    event.preventDefault();
    scrollContainerRef.current.scrollLeft += event.deltaY;
  };

  const handleNextButtonClick = () => {
    const slideWidth = scrollContainerRef.current.offsetWidth / 3; // Assuming each image is of equal width
    scrollContainerRef.current.scrollLeft += slideWidth;
  };

  const handleBackButtonClick = () => {
    const slideWidth = scrollContainerRef.current.offsetWidth / 3; // Assuming each image is of equal width
    scrollContainerRef.current.scrollLeft -= slideWidth;
  };

  return (
    <>
      <div className="cart1-Cart">
        <div className="cart1-LeftSide">
          <div className="cart1-leftSideBlock">
            <div className="cart1-Left-Cart">
              <h3>3 Items Selected</h3>
              <h3>Explore Menu</h3>
            </div>
            <div className="Container-Cart">
              <div className="Container-Cart-Block">
                <img src={img1} alt="img1" />
                <div className="para-cart">
                  <h3>BOMBAY MASALA GRILLED CHEESE</h3>
                  <p>
                    A delightful plant-based option with a savory patty crafted
                    from vegetables and onions, promising a deliciously
                    satisfying bite.
                  </p>
                </div>
                <div className="Cart-Amount">
                  <p>Rs. 40</p>
                  <div className="Cart-icon">
                    <div className="trash-icon">
                      <BsTrash />
                    </div>
                    <div className="cart-Num">
                      <ul>1</ul>
                    </div>
                    <div className="Cart-Circle">
                      <HiOutlinePlusCircle />
                    </div>
                  </div>
                </div>
              </div>
              {/* card 2 */}
              <div
                className="Container-Cart-Block"
                style={{ backgroundColor: "rgb(22, 22, 22)" }}
              >
                <img src={img2} alt="img2" />
                <div className="para-cart">
                  <h3>CHICKEN SEEKH KEBEB SANDWICH </h3>
                  <p>
                    A classic favorite featuring tender slices of turkey nestled
                    between soft bread, offering a comforting and fulfilling
                    meal option.
                  </p>
                </div>
                <div className="Cart-Amount">
                  <p>Rs. 70</p>
                  <div className="Cart-icon">
                    <div className="trash-icon">
                      <BsTrash />
                    </div>
                    <div className="cart-Num">
                      <ul>1</ul>
                    </div>
                    <div className="Cart-Circle">
                      <HiOutlinePlusCircle />
                    </div>
                  </div>
                </div>
              </div>
              {/* CART 3*/}
              <div className="Container-Cart-Block">
                <img src={img3} alt="img3" />
                <div className="para-cart">
                  <h3>MUMBAI VADAPAV</h3>
                  <p>
                    A timeless choice showcasing succulent ham slices tucked
                    between fresh bread, delivering a satisfying and hearty meal
                    experience.
                  </p>
                </div>
                <div className="Cart-Amount">
                  <p>Rs. 80</p>
                  <div className="Cart-icon">
                    <div className="trash-icon">
                      <BsTrash />
                    </div>
                    <div className="cart-Num">
                      <ul>1</ul>
                    </div>
                    <div className="Cart-Circle">
                      <HiOutlinePlusCircle />
                    </div>
                  </div>
                </div>
              </div>
              {/* cart 4 */}
              <div className="cart1-Left-heading">
                <h2>Complete your meal with </h2>
                <div className="SliderImage-wrap">
                  <img
                    src={img4}
                    alt="iconleft"
                    id="backBtn"
                    onClick={handleBackButtonClick}
                  />
                  <div
                    className="Container-SliderImage"
                    ref={scrollContainerRef}
                    onWheel={handleWheelScroll}
                  >
                    <div>
                      <span>
                        <img src={img5} alt="img5" />
                      </span>
                      <span>
                        <img src={img6} alt="img6" />
                      </span>
                      <span>
                        <img src={img7} alt="img7" />
                      </span>
                    </div>
                    <div>
                      <span>
                        <img src={img8} alt="img8" />
                      </span>
                      <span>
                        <img src={img9} alt="img9" />
                      </span>
                      <span>
                        <img src={img10} alt="img10" />
                      </span>
                    </div>
                  </div>
                  <img
                    src={img11}
                    alt="iconright"
                    id="nextBtn"
                    onClick={handleNextButtonClick}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="cart1-RightSideBlock">
            <div className="cart1-right-Cart">
              <h3>Choose a delivery address</h3>
            </div>
            <div className="cart1-Delivery-Address">
              <div className="cart1-right-address">
                <div className="cart1-Address">
                  <h3 style={{ fontSize: 22 }}>Current Address</h3>
                  <br />
                  <p style={{ fontFamily: "Josefin Sans", fontSize: 22 }}>
                    Samta Colony, Raipur
                  </p>
                </div>
                <div className="btn-address">
                  <h3>Change</h3>
                </div>
              </div>
              <div className="line" />
              <div className="cart1-login-Add">
                <h3 style={{ fontSize: 22 }}>
                  Login to use your saved addresses
                </h3>
                <div className="btn-My-address">
                  <h3>My Address</h3>
                </div>
              </div>
            </div>
            <div className="cart1-right-Cart">
              <h3>Offers</h3>
            </div>
            <div className="cart1-offer">
              <div className="cart1-offers">
                <br />
                <h3>Select offer / Apply coupon</h3>
                <br />
                <p>Get discount with your order</p>
              </div>
            </div>
            <div className="cart1-PriceDetails">
              <h3>Price Details</h3>
            </div>
            <div className="cart1-Price">
              <div className="cart1-Prices">
                <div className="cart1-PriceList">
                  <p>Sub Total</p>
                  <p>Discount</p>
                  <p>Taxes and Charges</p>
                  <br />
                </div>
                <div className="cart1-PriceLists">
                  <p>190</p>
                  <p> - </p>
                  <p>32.2</p>
                </div>
              </div>
              <div className="cart1-Prices1">
                <div className="cart1-PriceList1">
                  <p style={{ fontFamily: '"Josefin Sans"' }}>Grand Total</p>
                </div>
                <div className="cart1-PriceLists1">
                  <p>222.2</p>
                </div>
              </div>
              <div className="cart1-Order">
                <h3>Place Order</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="cart2-Images">
          <div className="cart2-heading">
            <h2>Recently ordered</h2>
          </div>
          <div className="cart2-Image-wrap">
            <img src={img4} id="leftbtn" />
            <div className="cart2-Images-gallery">
              <div>
                <img src={img9} alt="img9" />
                <img src={img8} alt="img8" />
                <img src={img5} alt="img5" />
                <img src={img6} alt="img6" />
                <img src={img7} alt="img7" />
              </div>
              <div>
                <img src={img9} alt="img9" />
                <img src={img8} alt="img8" />
                <img src={img5} alt="img5" />
                <img src={img6} alt="img6" />
                <img src={img10} alt="img10" />
              </div>
            </div>
            <img src={img11} id="rightbtn" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
