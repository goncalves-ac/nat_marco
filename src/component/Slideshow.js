import React, { useState, useEffect } from 'react';
import './../style/Slideshow.css';

const Slideshow = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const plusSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex >= images.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    setSlideIndex(newIndex);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  useEffect(() => {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
  }, [slideIndex]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div className="mySlides fade" key={index}>
          <div className="numbertext">{`${index + 1} / ${images.length}`}</div>
          <img src={image.src} alt="" />
          <div className="text">{image.caption}</div>
        </div>
      ))}
      <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
      <a className="next" onClick={() => plusSlides(1)}>❯</a>
    </div>
  );
};

export default Slideshow;
