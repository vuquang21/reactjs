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
    <div className={navbar ? '' : 'navbar'}>
      <div className="navbar-container">
        <div>
          <a href="#"><h3 className={navbar ? 'navbar__logo change-color' : 'navbar__logo'}>Pobdev</h3></a>
        </div>

        <div className={navbar ? 'hiden' : 'navbar__items'}>
          <a href="#">
            <span className="item active e--1 ">Places to stay</span>
          </a>
          <a href="#">
            <span className="item e--2">Experiences</span>
          </a>
          <a href="#">
            <span className="item e--3">Online Experiences</span>
          </a>
        </div>

        <div className="navbar__profile">
          <div className={navbar ? 'navbar__profile--host change-color' : 'navbar__profile--host'}>
            <a href="#">
              <span className={navbar ? 'change-color' : ''}>Become a host</span>
            </a>
            <a href="#">
              <i class="far fa-moon" />
            </a>
            <a href="#">
              <i class="fa fa-globe" />
            </a>
          </div>
          <div className={navbar ? 'navbar__profile--user change-color' : 'navbar__profile--user'}>
            <i class="fa fa-bars" aria-hidden="true"></i>
            <i class="far fa-user" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
