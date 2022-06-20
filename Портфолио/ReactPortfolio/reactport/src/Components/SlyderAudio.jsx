import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import slide1 from "./Images/foto1.jpg"
import slide2 from "./Images/foto2.jpg"
import slide3 from "./Images/foto3.jpg"

const SlyderAudio = () => {
    const images = [slide1 ,  slide2 ,  slide3]
   
        return (
            <SimpleImageSlider
            width = {400}
            height = {500}
            images={images}
            showNavs={true}
          />
        );
      };


export default SlyderAudio;
