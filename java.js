var images = [
  "assets/images/РНП1.jpg",
  "assets/images/РНП2.jpg",
  "assets/images/РНП3.jpg",
];
var num = 0;
function nextfoto() {
  var foto = document.getElementById("foto");
  num++;
  if (num >= images.length) {
    num = 0;
  }
  foto.src = images[num];
}

function prevfoto() {
  var foto = document.getElementById("foto");
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  foto.src = images[num];
}
let audio = document.getElementById("audio");
let tits = document.getElementById("tits");
let time = document.querySelector(".time");
let btnPlay = document.querySelector(".play");
let btnPause = document.querySelector(".pause");
let btnPrev = document.querySelector(".prev");
let btnNext = document.querySelector(".next");
let lp = document.querySelector(".lp");
var playlist = ["sounds/111.mp3", "sounds/222.mp3", "sounds/333.mp3"];
let mp3;
window.onload = function () {
  mp3 = 0;
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
      audio.src = playlist[mp3];
      audio.play();
    } else if (audioTime == audioLength) {
      mp3 = 0;
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
  mp3--;
  if (mp3 < 0) {
    mp3 = 2;
  }
  audio.src = playlist[mp3];
  audio.play();
});
btnNext.addEventListener("click", function () {
  mp3++;
  if (mp3 >= playlist.length) {
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
window.alert("Анимация, доделать плеер, улучшить видео");
window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
};
