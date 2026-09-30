import React, { useState } from 'react';
import '../../styles/home.css';

//just "images/img_01.jpg" in local dev

const image1 = `${process.env.PUBLIC_URL}/images/img_01.jpg`;
const image2 = `${process.env.PUBLIC_URL}/images/img_02.jpg`;
const image3 = `${process.env.PUBLIC_URL}/images/img_03.jpg`;
const image4 = `${process.env.PUBLIC_URL}/images/img_04.jpg`;
const image5 = `${process.env.PUBLIC_URL}/images/img_05.jpg`;
const image6 = `${process.env.PUBLIC_URL}/images/img_06.jpg`;
const image7 = `${process.env.PUBLIC_URL}/images/img_07.jpg`;
const image8 = `${process.env.PUBLIC_URL}/images/img_08.jpg`;
const image9 = `${process.env.PUBLIC_URL}/images/img_09.jpg`;
const image11 = `${process.env.PUBLIC_URL}/images/img_11.JPG`;
const image12 = `${process.env.PUBLIC_URL}/images/img_12.JPG`;
const image13 = `${process.env.PUBLIC_URL}/images/img_13.JPG`;
const image14 = `${process.env.PUBLIC_URL}/images/img_14.jpg`;
const image15 = `${process.env.PUBLIC_URL}/images/img_15.jpg`;
const image17 = `${process.env.PUBLIC_URL}/images/carl.JPG`;
const image19 = `${process.env.PUBLIC_URL}/images/img_19.jpg`;
const image20 = `${process.env.PUBLIC_URL}/images/img_20.jpg`;
const image21 = `${process.env.PUBLIC_URL}/images/img_21.jpg`;

const images = [image15, image4, image17, image6, image2, image7, image8, image13, image9, image19, image14, image1, image3, image20, image5, image11, image21, image12];

const Gallery = () => {

  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const showImage = (image) => {
      setImageToShow(image);
      setLightBoxDisplay(true);
    };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (

    <div className="galleryContainer">
      <div className="galleryRow">
        <img className="galleryImg" onClick={() => showImage(image15)} src={image15} alt="img 15" />
        <img className="galleryImg" onClick={() => showImage(image4)} src={image4} alt="img 4" />
        <img className="galleryImg" onClick={() => showImage(image17)} src={image17} alt="img 17" />
      </div>
      <div className="galleryRow">
        <img className="galleryImg" onClick={() => showImage(image6)} src={image6} alt="img 06" />
        <img className="galleryImg" onClick={() => showImage(image2)} src={image2} alt="img 02" />
        <img className="galleryImg" onClick={() => showImage(image7)} src={image7} alt="img 07" />
      </div>
      <div className="galleryRow">
        <img className="galleryImg" onClick={() => showImage(image8)} src={image8} alt="img 8" />
        <img className="galleryImg" onClick={() => showImage(image13)} src={image13} alt="img 13" />
        <img className="galleryImg" onClick={() => showImage(image9)} src={image9} alt="img 9" />
      </div>
      <div className="galleryRow">
        <img className="galleryImg" onClick={() => showImage(image19)} src={image19} alt="img 19" />
        <img className="galleryImg" onClick={() => showImage(image14)} src={image14} alt="img 14" />
        <img className="galleryImg" onClick={() => showImage(image1)} src={image1} alt="img 01" />
      </div>
      <div className="galleryRowLast">
        <img className="galleryImg" onClick={() => showImage(image3)} src={image3} alt="img 03" />
        <img className="galleryImg" onClick={() => showImage(image20)} src={image20} alt="img 20" />
        <img className="galleryImg" onClick={() => showImage(image5)} src={image5} alt="img 5" />
      </div>
      <div className="galleryRowLast">
        <img className="galleryImg" onClick={() => showImage(image11)} src={image11} alt="img 11" />
        <img className="galleryImg" onClick={() => showImage(image21)} src={image21} alt="img 21" />
        <img className="galleryImg" onClick={() => showImage(image12)} src={image12} alt="img 12" />
      </div>
      { lightboxDisplay ?
          <div className="modalActive">
            <span className="close cursor" onClick={hideLightBox}>&times;</span>
            <img className="lightbox-img" src={imageToShow}></img>

            <a className="prev" onClick={showPrev}>&#10094;</a>
            <a className="next" onClick={showNext}>&#10095;</a>
          </div>
        : ''
      }
    </div>


  );
}

export default Gallery;
