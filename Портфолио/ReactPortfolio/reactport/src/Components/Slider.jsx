import React from 'react';
import Foto1 from "./Images/foto1"
import Foto2 from "./Images/foto2"
import Foto3 from "./Images/foto3"

const Slider = () => {
    return (
             <div class="slider">
             <div class="slider__out">
              <a class="slider__prev" onclick="previousSlide()">&#10094;</a>
              <a class="slider__next" onclick="nextSlide()">&#10095;</a>
             <div class="slider__item">
              <Foto1/>
              </div>
              <div class="slider__item">
              <Foto2/>
              </div>
              <div class="slider__item">
              <Foto3/>
              </div>
        </div>
        </div>
    );
};

export default Slider;