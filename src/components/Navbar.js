import React from "react";
import "../components/Style.css";

const Navbar = () => {

  // const [navbar, setNavbar] = useState(false);

  // const changeBackground = () => {
  //   if (window.screenY >= 80) {
  //     setNavbar(true);
  //     console.log('scroll');
  //   } else {
  //     setNavbar(false);
  //   }
  // };
  // window.addEventListener("scroll", changeBackground);

  return (
    
      <div className="navbar-container">
        
        <nav>
          <h3 className="navbar__logo-title">Pobdev</h3>
        </nav>

        <nav className="nav__items">
          <span className="item active">Places to stay</span>
          <span className="item">Experiences</span>
          <span className="item">Online Experiences</span>
        </nav>

        <nav className="nav__item profile">
          <a href="#">
            <span>Become a host</span>
          </a>
          <a href="#">
            <i class="far fa-moon"></i>
          </a>
          <a href="#">
            <i class="fa fa-globe"></i>
          </a>
          <nav className="user">
            <i class="fa fa-bars" aria-hidden="true"></i>
            <i class="far fa-user" aria-hidden="true"></i>
          </nav>
        </nav>
      </div>

  );
};

export default Navbar;
