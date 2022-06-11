import React from "react";
import slide1 from "./Images/foto1.jpg"
import slide2 from "./Images/foto2.jpg"
import slide3 from "./Images/foto3.jpg"

const Slider = () => {
  const slides = [{slide1} , {slide2} , {slide3}];
  const slideIndex = 0;
  showSlides(slideIndex);

  const next_slide = () => {
    showSlides((slideIndex += 1));
  };
  const prev_slide = () => {
    showSlides((slideIndex -= 1));
  };
  
  const showSlides = (n) => {
    const slides = document.getElementsByClassName("slider__item");
  
    if (n > slides.length) {
      slideIndex = 0;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
  
  };

  return (
    <div class="slider">
      <div class="slider__out">
        <a class="slider__prev" onclick={prev_slide}>&#10094; </a>
        <a class="slider__next" onclick={next_slide}>&#10095; </a>
        <div class="slider__item">
          {slide1}
        </div>
      </div>
    </div>
    
    
   
    
    
    
  );
};

export default Slider;
