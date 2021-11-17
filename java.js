let audio = document.getElementById("audio");
let time = document.querySelector(".time");
let lp = document.querySelector(".lp");
var playlist = ["sounds/111.mp3", "sounds/222.mp3", "sounds/333.mp3"];
let mp3;
window.onload = function () {
  mp3 = 0;
};

function playy() {
  audio.play();
  audioPlay = setInterval(function () {
    let audioTime = Math.round(audio.currentTime);
    let audioLength = Math.round(audio.duration);
    time.style.width = (audioTime * 100) / audioLength + "%";
    if (audioTime == audioLength && mp3 < 2) {
      //колличество треков ручное, длинна не срабатывает
      mp3++;
      audio.src = playlist[mp3];
      audio.play();
    } else if (audioTime == audioLength) {
      mp3 = 0;
      audio.src = playlist[mp3];
      audio.play();
    }
  }, 10);
}
function pauses() {
  audio.pause();
  clearInterval(audioPlay);
}

function prevmp3() {
  mp3--;
  if (mp3 < 0) {
    mp3 = 2;
  }
  audio.src = playlist[mp3];
  audio.play();
}
function nextmp3() {
  mp3++;
  if (mp3 >= playlist.length) {
    mp3 = 0;
  }
  audio.src = playlist[mp3];
  audio.play();
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
window.alert("Докрасить слайдер, доделать плеер");
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
