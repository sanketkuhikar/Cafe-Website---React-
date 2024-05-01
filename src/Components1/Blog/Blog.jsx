import React, { Components1 } from "react";
import "./Blog.css";
import img1 from "../../assets/Sunset/bg1.jpeg";
import img2 from "../../assets/Sunset/MENU/BLOGS/Blog Thumbnail (1).jpg";
import img3 from "../../assets/Sunset/MENU/BLOGS/Blog Thumbnail (4).jpg";
import img4 from "../../assets/Sunset/MENU/BLOGS/Blog Thumbnail (2).jpg";
import img5 from "../../assets/Sunset/MENU/BLOGS/Blog Thumbnail (5).jpg";
import img6 from "../../assets/Sunset/MENU/BLOGS/Blog Thumbnail (3).jpg";
import img7 from "../../assets/Sunset/MENU/BLOGS/Blog Thumbnail (6).jpg";

const Blog = () => {
  return (
    <>
      <div className="BGcolor">
        <div className="background-container">
          <img src={img1} alt="backgroundImages" className="background-image" />
          <div className="overlay-text">
            <h1>SUNSET</h1>
          </div>
          <div className="overlay-text1">
            <h1>OUR VISION</h1>
            <p>
              To create a haven where every cup is a canvas, painting moments of
              serenity and connection against the backdrop of a setting sun.
            </p>
          </div>
        </div>
      </div>

      <div className="BGimges">
        <hr className="hr-color" />
        <h4>LATEST BLOG POST</h4>
        <div className="BGSlider">
          <div className="WhiteBG">
            <div className="BGWord">
              <img src={img2} alt="chef" />
            </div>
            <div className="rightword">
              <p>Sip, Savor, Socialize: The Three S's of Café Sunset</p>
              <br />
              <span>Found out More.</span>
            </div>
          </div>
        </div>
        <div className="BGSlider">
          <div className="WhiteBG">
            <div className="BGWord">
              <img src={img3} alt="img3" />
            </div>
            <div className="rightword">
              <p>
                Café Sunset Chronicles: A Journey Through Flavors and Moments.
              </p>
              <br />
              <span>Found out More.</span>
            </div>
          </div>
        </div>
        <div className="BGSlider">
          <div className="WhiteBG">
            <div className="BGWord">
              <img src={img4} alt="img4" />
            </div>
            <div className="rightword">
              <p>
                Sunset Sessions: Live Music, Lively Conversations at Café
                Sunset.
              </p>
              <br />
              <span>Found out More.</span>
            </div>
          </div>
        </div>
        <div className="BGSlider">
          <div className="WhiteBG">
            <div className="BGWord">
              <img src={img5} alt="img5" />
            </div>
            <div className="rightword">
              <p>Sipping Serenity: The Art of Sunset at Café Sunset.</p>
              <br />
              <span>Found out More.</span>
            </div>
          </div>
        </div>
        <div className="BGSlider">
          <div className="WhiteBG">
            <div className="BGWord">
              <img src={img6} alt="img6" />
            </div>
            <div className="rightword">
              <p>
                Bites of Bliss: The Sweet Symphony of Pastries at Café Sunset.
              </p>
              <br />
              <span>Found out More.</span>
            </div>
          </div>
        </div>
        <div className="BGSlider">
          <div className="WhiteBG">
            <div className="BGWord">
              <img src={img7} alt="img7" />
            </div>
            <div className="rightword">
              <p>
                Flavorful Escapes: Exploring Café Sunset's Seasonal Specialties.
              </p>
              <br />
              <span>Found out More.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
