import currentSlide from "./CurrentSlide";
import nextSlide from "./Nextslide";
import previousSlide from "./Prev__slide";
import image1 from "../../Images/foto1.jpg"

const Sliderjs = () => {
  return (
            <div class="slider">
            <div class="slider__out">
              <a class="slider__prev" onclick={previousSlide}>&#10094;</a>
              <a class="slider__next" onclick={nextSlide}>&#10095;</a>
              <div class="slider__item">
                  <img src={image1}/>
              </div>
              <div class="slider__item">
                  <img src="C:\Users\Некит\Desktop\hjvfy\САЙТ\Портфолио\Классика\Assets\Images\foto2.jpg"/>
              </div>
              <div class="slider__item">
                  <img src="C:\Users\Некит\Desktop\hjvfy\САЙТ\Портфолио\Классика\Assets\Images\foto3.jpg"/>
              </div>
            </div>
            </div>
  );
};


export default Sliderjs;