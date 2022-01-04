import React from "react";

const player = () => {
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
};

export default player;
