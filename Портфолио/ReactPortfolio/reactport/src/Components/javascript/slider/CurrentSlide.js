const showSlides = document.getElementById({showSlides});
let slideIndex = 1;
showSlides(slideIndex);


const currentSlide= (n) => {
    showSlides((slideIndex = n));
  }

export default currentSlide;