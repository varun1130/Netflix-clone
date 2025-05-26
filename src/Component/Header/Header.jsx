import React from "react";
import "./Header-style.css";
import { useState } from "react";
import { Link } from "react-router";

// import Fetchdata from "../Logic/FetchData";

function Header() {
  return (
    <>
      <div className="head_main">
        <div className="empty"></div>
        <div className="header_content">
          <h1 id="header_heading">Unlimited movies, TV shows and more</h1>
          <p id="header_cont">Ready to watch?</p>
          <div className="innercont">
            <Link id="HLink" to="/Body">
              <button id="h_bsearch">Movies</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
