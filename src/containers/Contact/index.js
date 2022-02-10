import React from 'react';
import '../../styles/home.css';
import { FaInstagram } from 'react-icons/fa';

const Contact = () => {

  return (
    <div className="contactContainer">
      <div className="instaContainer">
        <p>For the latest from Liza, visit her on Instagram:</p>
        <div className="instaBtn">
          <a href="https://www.instagram.com/liza.darling/?hl=en" target="_blank" className="instaLink"> <FaInstagram className="instaIcon"/> liza.darling</a>
        </div>
      </div>
      <div className="emailContainer">
        <p>Looking to buy or commission a painting? Got a project suggestion? Just want to say "hi"?</p>
        <p className="emailCTA">Contact Liza directly:</p>
        <div className="instaBtn">
          <a href="mailto:darlington.liza@gmail.com" className="emailLink">Email Liza</a>
        </div>
      </div>
      <div className="imageContainer">
        <img className="finalImg" src={`${process.env.PUBLIC_URL}/images/img_16.JPG`} alt="contact img"/>
      </div>
    </div>
  );

}

export default Contact;
