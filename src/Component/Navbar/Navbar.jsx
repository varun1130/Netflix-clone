import React from "react";
import "./nav-style.css";
import Img from '/public/netflix_logo.png'
function Navbar() {
  return (
      <div className="main">
        <div id="logo">
          <img id="img" src={Img} alt="" />
          <h2 id="name">Netflix</h2>
        </div>
        <div className="options">
          <select name="" id="sel">
            <option value="">English</option>
          </select>
          <button>Sign In</button>
        </div>
      </div>
  );
}
export default Navbar;
