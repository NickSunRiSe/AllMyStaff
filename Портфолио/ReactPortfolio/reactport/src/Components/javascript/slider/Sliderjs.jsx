import nextSlide from "./Nextslide";
import previousSlide from "./Prev__slide";
import slide1 from "../../Images/foto1.jpg"
import slide2 from "../../Images/foto2.jpg"
import slide3 from "../../Images/foto3.jpg"

const Sliderjs = () => {
  const slides = [{src: slide1} , {src: slide2} , {src: slide3}];
  return (
            <div class="slider">
            <div class="slider__out">
              <a class="slider__prev" onclick={previousSlide}>&#10094;</a>
              <a class="slider__next" onclick={nextSlide}>&#10095;</a>
              <div class="slider__item">
                 <img src={slides.src}/>
              </div>
            </div>
            </div>
  );
};


export default Sliderjs;