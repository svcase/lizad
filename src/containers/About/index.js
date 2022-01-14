import React, { useState } from 'react';
import '../../styles/home.css';


const About = () => {

  return (
    <div className="aboutContainer">
      <div className="aboutRow">
        <p className="aboutText">Liza’s art is informed by her love of history, her role as an educator, and her curiosity about the human experience and natural connections.</p>
        <img className="aboutImg" src="images/liza.JPG" alt="liza img" />
      </div>
      <div className="aboutRow">
        <img className="aboutImg" src="images/img_18.JPG" alt="img 18" />
        <p className="aboutText">She explores her own identity, and that of her communities, using portraiture, natural symbols, and fonts.</p>
      </div>
      <div className="aboutRow">
        <p className="aboutText">Through her murals, Liza seeks to mirror, perpetuate, and challenge collective memory.</p>
        <img className="aboutImg" src="images/img_10.JPG" alt="img 10" />
      </div>
    </div>
  );
}

export default About;
