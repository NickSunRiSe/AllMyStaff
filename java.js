const audio = document.querySelector(".audio"),
 time = document.querySelector(".time"),
 btnPlay = document.querySelector(".play"),
 btnPause = document.querySelector(".pause"),
 btnPrev = document.querySelector(".prev"),
 btnNext = document.querySelector(".next"),
 lp = document.querySelector(".lp"),
 title = document.querySelector(".title")


const songs = ["sounds/111.mp3", "sounds/222.mp3", "sounds/333.mp3"]

let songNum = 0

function loadsong(song) {
  title.innerHTML = title
  audio.src = songs[songNum]
}








let video = document.getElementById("video");
let btnPlayvid = document.querySelector(".playv");
let btnPausevid = document.querySelector(".pausev");
btnPlayvid.addEventListener("click", function () {
  video.play();
});
btnPausevid.addEventListener("click", function () {
  video.pause();
});

window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
};

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
  showSlides((slideIndex += 1));
}

function previousSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("item");

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


