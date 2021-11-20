let audio = document.getElementById("audio");
let tits = document.getElementById("tits");
let time = document.querySelector(".time");
let btnPlay = document.querySelector(".play");
let btnPause = document.querySelector(".pause");
let btnPrev = document.querySelector(".prev");
let btnNext = document.querySelector(".next");
let lp = document.querySelector(".lp");
let track = document.getElementById("track_item");
var playlist = ["sounds/111.mp3", "sounds/222.mp3", "sounds/333.mp3"];
var tr = [{tr1:"1"}, {tr1: "2"}, {tr1:"3"}]
let mp3;
let t;


window.onload = function () {
  mp3 = 0;
  t = 0;
  showTrack(t);
};
btnPlay.addEventListener("click", function () {
  audio.play();
  audioPlay = setInterval(function () {
    let audioTime = Math.round(audio.currentTime);
    let audioLength = Math.round(audio.duration);
    time.style.width = (audioTime * 100) / audioLength + "%";
    if (audioTime == audioLength && mp3 < 2) {
      //колличество треков ручное, длинна не срабатывает
      mp3++;
      t++;
      track.src = tr[tr1]
      audio.src = playlist[mp3];
      showTrack((slideIndex = n))
      audio.play();
    } else if (audioTime == audioLength) {
      mp3 = 0;
      t=0;
      track.src = tr[tr1]
      showTrack((slideIndex = n))
      audio.src = playlist[mp3];
      audio.play();
    }
  }, 10);
});
btnPause.addEventListener("click", function () {
  audio.pause();
  clearInterval(audioPlay);
});
btnPrev.addEventListener("click", function () {
  audio.pause();
  if (mp3 > 0) {
    mp3--;
  } else {
    mp3 = 3;
  }
  audio.src = playlist[mp3];
  audio.play();
});
btnNext.addEventListener("click", function () {
  audio.pause();
  if (mp3 < 2) {
    mp3++;
  } else {
    mp3 = 0;
  }
  audio.src = playlist[mp3];
  audio.play();
});

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


