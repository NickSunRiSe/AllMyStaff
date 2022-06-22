const showSlides = document.getElementById({showSlides});
let slideIndex = 1;
showSlides(slideIndex);


const previousSlide = () => {
    showSlides((slideIndex -= 1));
  }
 
export default previousSlide;