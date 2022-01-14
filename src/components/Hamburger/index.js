import React, { useState } from 'react';
import './hamburger.css';

function Hamburger(props) {

  return (
    <div className="hamburger" onClick={props.click}>
      <div className={props.burger1} />
      <div className={props.burger2} />
      <div className={props.burger3} />
    </div>
  );
}

export default Hamburger;
