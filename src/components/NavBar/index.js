import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Hamburger from '../Hamburger';
import Menu from '../Menu';

const NavBar = () => {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  let setMenu = "navMenu";
  if (hamburgerOpen) {
    setMenu = "menuActive"
  } else {
    setMenu = "navMenu"
  };

  let dropBurger = "menuItem";
  if (hamburgerOpen) {
    dropBurger = "menuItemActive"
  } else {
    dropBurger = "menuItem"
  };

  let burgerOne = "burger burger1";
  if (hamburgerOpen) {
    burgerOne = "burger burger1Active"
  } else {
    burgerOne = "burger burger1"
  };

  let burgerTwo = "burger burger2";
  if (hamburgerOpen) {
    burgerTwo = "burger burger2Active"
  } else {
    burgerTwo = "burger burger2"
  };

  let burgerThree = "burger burger3";
  if (hamburgerOpen) {
    burgerThree = "burger burger3Active"
  } else {
    burgerThree = "burger burger3"
  };

  return (

      <div className="navBarContainer">
        <div className="navLogo">
          <Link className="logo" to={"/"}> Liza Darlington</Link>
        </div>
        <div className="menuContainer">
            <Menu class={setMenu} menuClass={dropBurger} />
            <div className="burgerMenu">
              <Hamburger click={toggleHamburger} burger1={burgerOne} burger2={burgerTwo} burger3={burgerThree} />
            </div>
        </div>
      </div>

  );

}

export default NavBar;
