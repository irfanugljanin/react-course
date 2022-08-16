import React, { useState } from "react";
import "./style.css";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const sidebar = () => {
    setMenu(!menu);
  };

  return (
    <div className="container">
      <div className="top-navigation">
        <img
          className="image"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--1mtEvyef--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn.hashnode.com/res/hashnode/image/upload/v1647490619965/P1dsNgj-f1.png"
          alt=""
        />
        <div className="navigation">
          <h1>Home</h1>
          <h1>Services</h1>
          <h1>Product</h1>
          <h1>Contact Us</h1>
        </div>
        <div className="button">
          <button className="sign-up">Sign Up</button>
          <button className="hamburger-menu" onClick={sidebar}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
              alt=""
            />
          </button>
        </div>
      </div>
      {menu ? (
        <div className="sidebar">
          <a>Home</a>
          <a>Services</a>
          <a>Product</a>
          <a>Contact us</a>
        </div>
      ) : (
        false
      )}
    </div>
  );
};

export default Nav;
