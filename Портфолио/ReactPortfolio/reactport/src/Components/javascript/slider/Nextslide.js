const [slideIndex, setSlideIndex] = 1;

const nextSlide = () => {
  setSlideIndex((currentSlide) =>
  currentSlide < slideIndex.length - 1 ? currentSlide + 1 : 0
);
}
  export default nextSlide;