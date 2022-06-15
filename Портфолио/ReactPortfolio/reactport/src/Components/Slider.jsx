import React from "react";
import { useState } from "react";
import slide1 from "./Images/foto1.jpg"
import slide2 from "./Images/foto2.jpg"
import slide3 from "./Images/foto3.jpg"

const Slider = () => {
  const slides = [{src: slide1} , {src: slide2} , {src: slide3}];
  const [slideIndex, setSlideIndex] = useState(0);
  showSlides(slideIndex);

  const next__slide = () => {
    setSlideIndex((currentSlide) =>
    currentSlide < slides.length - 1 ? currentSlide + 1 : 0
    );
  };
  const prev__slide = () => {
    setSlideIndex((currentSlide) =>
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    );
  };
  
  const showSlides = (n) => {
  
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
  
  };

  return (
    <div class="slider">
      <div class="slider__out">
        <a class="slider__prev" onclick={prev__slide}>&#10094; </a>
        <a class="slider__next" onclick={next__slide}>&#10095; </a>
        <div class="slider__item">
          <source src={slides[slideIndex].src}></source>
        </div>
      </div>
    </div>
    
    
   
    
    
    
  );
};

export default Slider;
