import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

function Menu(props) {

  return (
    <div className={props.class}>
      <Link className={props.menuClass} to={"/gallery"}> Gallery </Link>
      <Link className={props.menuClass} to={"/about"}> About </Link>
      <Link className={props.menuClass} to={"/contact"}> Contact </Link>
      <div className={props.menuClass}>
        <a className="socialItem" href="https://www.instagram.com/liza.darling/?hl=en" target="_blank"> <FaInstagram /> </a>
      </div>
    </div>
  );
}

export default Menu;
