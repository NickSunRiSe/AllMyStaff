import React, { useRef, useState } from "react";
import Ustal from "../sounds/Ustal.mp3";

export default function App() {
  const audioPlayer = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);
  let time = document.querySelector(".time");
  var playlist = ["../sounds/Ustal.mp3" , "../sounds/Ustal.mp3" , "../sounds/Ustal.mp3"];
let songNum = 0;

  const play = () => {
    let audioTime = Math.round(audioPlayer.current.currentTime);
    let audioLength = Math.round(audioPlayer.current.duration);
    time.style.width = (audioTime * 100) / audioLength + "%";
    if (audioTime == audioLength && songNum < 2) {
      //колличество треков ручное, длинна не срабатывает
      songNum++;
      audioPlayer.current.src = playlist[songNum];
      audioPlayer.current.play();
    } else if (audioTime == audioLength) {
      songNum = 0;
      audioPlayer.current.src = playlist[songNum];
      audioPlayer.current.play();
    }
  };

  const [songs] = useState([
    {
      src:{Ustal},
    },
    {
      src:{Ustal},
    },
    {
      src:{Ustal},
    },
  ]);
  const plan = () => {
    audioPlayer.current.play();
  };
  const prev = () => {
    audioPlayer.current.prev();
  };
  const next = () => {
    audioPlayer.current.next();
  };
  const pause = () => {
    audioPlayer.current.pause();
  };
  const stop = () => {
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;
  };
  const onPlaying = () => {
    setCurrentTime(audioPlayer.current.currentTime);
    setSeekValue(
      (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
    );
  };
  return (
    <div className="App">
      <audio src={songs.src} ref={audioPlayer} onTimeUpdate={onPlaying}>

        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <br />
      <p>{currentTime}</p>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={seekValue}
        onChange={(e) => {
          const seekto = audioPlayer.current.duration * (+e.target.value / 100);
          audioPlayer.current.currentTime = seekto;
          setSeekValue(e.target.value);
        }}
      />
      <div>
        <button onClick={play}>&#9655;</button>
        <button onClick={pause}>&#9723;</button>
        <button onclick={prev}>&#8810;</button>
        <button onclick={next}>&#8811;</button>
        <button onClick={stop}>stop</button>
      </div>
    </div>
  );
      }
