import React from 'react';
import '../../styles/home.css';

//just "images/img_16.JPG" in local dev

const Home = () => {
  return (

    <div className="titleSection">
      <div className="titleText">
        <h1>Liza Darlington Art</h1>
      </div>
      <div className="titleImage">
        <img className="homeImage" src={`${process.env.PUBLIC_URL}/images/portrait.jpg`} alt="home img" />
      </div>
    </div>

  );
}

export default Home;
