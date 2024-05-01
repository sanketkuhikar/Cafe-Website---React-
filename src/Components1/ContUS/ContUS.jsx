import React, { Components1 } from "react";
import "./ContUS.css";
import img1 from "../../assets/Sunset/map.jpeg";
import img2 from "../../assets/Sunset/Email.png";
import img3 from "../../assets/Sunset/phone.jpeg";

const ContUS = () => {
  return (
    <>
      <main>
        <div className="Cont1">
          <div className="Cont1-heading">
            <h1>
              “Your thoughts matter to us, so drop us a line and let's start a
              conversation today."
            </h1>
          </div>
        </div>
        <div className="Cont2">
          <div className="Cont2-Image">
            <div className="Image-Blocks">
              <img src={img1} alt="img1" />
              <h1>Address</h1>
              <p>
                MFC Center, Railway Station, Amazing Hotel, near Raipur, Raipur,
                Chhattisgarh 492001
              </p>
            </div>
            <div className="Image-Blocks">
              <img src={img2} alt="img2" />
              <h1>Email</h1>
              <p>sunset@gmail.com</p>
            </div>
            <div className="Image-Blocks">
              <img src={img3} alt="img3" />
              <h1>Conatct no.</h1>
              <p>+91-6254777844</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="Cont3">
          <div className="Cont3-cont">
            <h1>Contact Us</h1>
            <form action="" className="contact-form">
              <div className="Cont3-name">
                <div>
                  <label htmlFor="fname">First Name</label>
                  <br />
                  <input
                    type="text"
                    name="firstname"
                    id="name"
                    placeholder=""
                  />
                  <br />
                </div>
                <div>
                  <label htmlFor="fname">Last Name</label>
                  <br />
                  <input type="text" name="lastname" id="name" placeholder="" />
                </div>
              </div>
              <div className="Cont3-name-1">
                <div>
                  <label htmlFor="cnumber">Contact Number</label>
                  <br />
                  <input
                    type="number"
                    name="contant number"
                    id="name"
                    placeholder=""
                  />
                  <br />
                </div>
                <div>
                  <label htmlFor="email">Email ID</label>
                  <br />
                  <input type="email" name="emial" id="name" placeholder="" />
                </div>
              </div>
              <div className="TextBox">
                <textarea
                  name="text"
                  id="name"
                  cols={30}
                  rows={10}
                  placeholder="your message for us....."
                  defaultValue={""}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="button">
          <button className="button-sub">SUBMIT</button>
        </div>
      </main>
    </>
  );
};

export default ContUS;
