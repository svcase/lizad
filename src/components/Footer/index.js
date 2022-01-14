import React from 'react';
import './footer.css';
import { FaInstagram } from 'react-icons/fa';

function Footer() {

  const year = () => {
    const date = new Date();
    return date.getFullYear();
  }

  const openNewWindow = (url) => {
    window.open(url, '_blank');
  }

  return (
    <div className="footer">
      <div className="copyright">
        <p className="footerText">© Copyright {year()}</p>
        <p className="footerText">Liza Darlington</p>
      </div>
      <div className="footerSocial">
        <a className="footerSocialItem" href="https://www.instagram.com/liza.darling/?hl=en" target="_blank"> <FaInstagram /> </a>
      </div>
      <div className="madeBy">
        <p className="footerText">Website By:</p>
        <a className="footerText madeLink" href="http://samuelcase.com/" target="_blank">Sam Case</a>
      </div>
    </div>
  );
}

export default Footer;
