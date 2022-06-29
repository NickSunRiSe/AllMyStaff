const [slideIndex, setSlideIndex] = 1;

const previousSlide = () => {
    setSlideIndex((currentSlide) =>
    currentSlide === 0 ? slideIndex.length - 1 : currentSlide - 1
  );
}
 
export default previousSlide;