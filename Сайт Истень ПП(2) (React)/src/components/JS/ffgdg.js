import "../sounds/111.mp3"
import "../sounds/222.mp3"
import "../sounds/333.mp3"

const Player = () => {
  const time = document.querySelector(".time");
  const btnPlay = document.querySelector(".play");
  const btnPause = document.querySelector(".pause");
  let btnPrev = document.querySelector(".prev");
  let btnNext = document.querySelector(".next");
  let track = document.getElementById("track_item");
  var playlist = ["sounds/111.mp3", "sounds/222.mp3", "sounds/333.mp3"];
  let songNum = 0;
  btnPlay.addEventListener("click", function () {
    audio.play();
    audioPlay = setInterval(function () {
      let audioTime = Math.round(audio.currentTime);
      let audioLength = Math.round(audio.duration);
      time.style.width = (audioTime * 100) / audioLength + "%";
      if (audioTime == audioLength && songNum < 2) {
        //колличество треков ручное, длинна не срабатывает
        songNum++;
        audio.src = playlist[songNum];
        audio.play();
      } else if (audioTime == audioLength) {
        songNum = 0;
        audio.src = playlist[songNum];
        audio.play();
      }
    }, 10);
  });
  btnPause.addEventListener("click", function () {
    audio.pause();
    clearInterval(audioPlay);
  });
  function nexttrack() {
    if (songNum < 2) {
      songNum++;
    } else if (songNum == 2) {
      songNum = 0;
    }
    audio.src = playlist[songNum];
    audio.play();
  }
  function prevtrack() {
    if (songNum > 0) {
      songNum--;
    } else {
      songNum = 2;
    }
    audio.src = playlist[songNum];
    audio.play();
  }
}
export default Player;
  
  