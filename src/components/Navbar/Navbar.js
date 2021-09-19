import React, { useState } from "react";
import "../Navbar/index.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
      console.log("scroll");
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar__logo">
          <a href="#" style={{color: 'white'}}><h3>Pobdev</h3></a>
        </div>

        <div className="navbar__items">
          <a href="#">
            <span className="item e--1">Places to stay</span>
          </a>
          <a href="#">
            <span className="item e--2">Experiences</span>
          </a>
          <a href="#">
            <span className="item e--3">Online Experiences</span>
          </a>
        </div>

        <div className="navbar__profile">
          <a href="#">
            <span>Become a host</span>
          </a>
          <a href="#">
            <i class="far fa-moon"></i>
          </a>
          <a href="#">
            <i class="fa fa-globe"></i>
          </a>
          <div className="navbar__profile--user">
            <i class="fa fa-bars" aria-hidden="true"></i>
            <i class="far fa-user" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
