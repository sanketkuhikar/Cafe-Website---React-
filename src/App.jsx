import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Home";
import MenuPages from "./pages/Menu/Menu";
import Register from "./pages/Register/Register";
import LoginPage from "./pages/Login/LoginPage";
import ForgetPage from "./pages/Forget/ForgetPage";
import Home2 from "./pages/Home2/Home2";
import Explore from "./pages/Explore/Explore";
import SeeMore from "./pages/See More/SeeMore";
import SeeMore2 from "./pages/See More/SeeMore2";
import SeeMore3 from "./pages/See More/SeeMore3";
import SeeMore4 from "./pages/See More/SeeMore4";
import SeeMore5 from "./pages/See More/SeeMore5";
import SeeMore6 from "./pages/See More/SeeMore6";
import SeeMore7 from "./pages/See More/SeeMore7";
import SeeMore8 from "./pages/See More/SeeMore8";
import CartPages from "./pages/CartPages";
import AccountPages from "./pages/AccountPages";
import Contact from "./pages/Contact/Contact";
import AddressBook from "./pages/AddressBook";
import AccountInfo from "./pages/AccountInfo";
import YourOrder from "./pages/YourOrder";
import Blogs from "./pages/Blogs/Blogs";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/Menu" element={<MenuPages />} />
          <Route path="/SignIn" element={<Register />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/forget" element={<ForgetPage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/seeMore" element={<SeeMore />} />
          <Route path="/menu2" element={<SeeMore2 />} />
          <Route path="/menu3" element={<SeeMore3 />} />
          <Route path="/menu4" element={<SeeMore4 />} />
          <Route path="/menu5" element={<SeeMore5 />} />
          <Route path="/menu6" element={<SeeMore6 />} />
          <Route path="/menu7" element={<SeeMore7 />} />
          <Route path="/menu8" element={<SeeMore8 />} />
          <Route path="/cart" element={<CartPages />} />
          <Route path="/account" element={<AccountPages />} />
          <Route path="/address" element={<AddressBook />} />
          <Route path="/accountInfo" element={<AccountInfo />} />
          <Route path="/yourOrder" element={<YourOrder />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
