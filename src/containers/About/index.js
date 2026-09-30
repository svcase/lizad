import React, { useState } from 'react';
import '../../styles/home.css';


const About = () => {

  return (
    <div className="aboutContainer">
      <div className="aboutRow">
        <p className="aboutText">Liza’s art is informed by her love of history, motherhood, her former role as a teacher, and a curiosity about the human experience and natural connections. Nostalgia, an emotional state Liza has occupied often starting as a young girl, is often a driving force in her art. Recently, she's been exploring a tension between naivety and refinement.</p>
        <img className="aboutImg" src={`${process.env.PUBLIC_URL}/images/alda.jpg`} alt="alda img" />
      </div>
      <div className="aboutRow">
        <img className="aboutImg" src={`${process.env.PUBLIC_URL}/images/esme.jpg`} alt="esme" />
        <p className="aboutText">She explores her own identity, and that of her communities, using portraiture and elements from nature, especially local flora. Liza uses a variety of mediums including water-mixable oils, acrylics, water colors, and digital paints.</p>
      </div>
      <div className="aboutRow">
        <p className="aboutText">Through her murals, Liza seeks to mirror, perpetuate, and challenge collective memory while adding color and a human touch to our community's visual landscape.</p>
        <img className="aboutImg" src={`${process.env.PUBLIC_URL}/images/liza.JPG`} alt="liza" />
      </div>
    </div>
  );
}

export default About;
