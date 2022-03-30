import React, { useRef, useState } from "react";
import Ustal from "../sounds/Ustal.mp3";

export default function App(props) {
  const audioPlayer = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);
  const [songs] = useState({ src: "Ustal", src: "Ustal", src: "Ustal" });

  const play = () => {
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
      <audio
        source={{ src: props.songs }}
        ref={audioPlayer}
        onTimeUpdate={onPlaying}
      >
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
