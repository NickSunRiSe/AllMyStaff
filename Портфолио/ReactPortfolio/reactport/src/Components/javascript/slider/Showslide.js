const showSlides = (n) => {
    let slides = document.getElementsByClassName(".slider__item");
  
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
  
    for (let slide of slides) {
      slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  export default showSlides;