const showSlides = document.getElementById({showSlides});
let slideIndex = 1;
showSlides(slideIndex);

const nextSlide = () => {
    showSlides((slideIndex += 1));
  }
  export default nextSlide;