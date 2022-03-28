import React, { useRef, useState } from "react";
import ustal from "../sounds/Ustal.mp3";

export default function App() {
  const audioPlayer = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);
  const play = () => {
    audioPlayer.current.play();
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
      <audio src={ustal} ref={audioPlayer} onTimeUpdate={onPlaying}>
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
        <button onclick="prevtrack()">&#8810;</button>
        <button onclick="nexttrack()">&#8811;</button>
        <button onClick={stop}>stop</button>
      </div>
    </div>
  );
}
