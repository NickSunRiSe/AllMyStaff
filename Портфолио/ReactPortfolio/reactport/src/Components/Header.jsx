import React, { useRef, useState } from "react";
import song1 from "./Sounds/111.mp3"
import song2 from "./Sounds/222.mp3"
import song3 from "./Sounds/333.mp3"


export default function Header() {
  const audioPlayer = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);

const Tracks = [{src : {song1}} ,{src : {song2}} ,{src : {song3}}];
const [trackIndex, setTrackIndex] = useState(0);
  const play = () => {
    audioPlayer.current.play();
  };

  const pause = () => {
    audioPlayer.current.pause();
  };

  const prev_track = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(Tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  }
  
  const next_track = () => {
    if (trackIndex < Tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  }

  const onPlaying = () => {
    setCurrentTime(audioPlayer.current.currentTime);
    setSeekValue(
      (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
    );
  };

  return (
    <header class="header">
        <audio
        src={song1}
        ref={audioPlayer}
        onTimeUpdate={onPlaying}>
         
      </audio>
        <div class="audio__track"></div>
        <a class="audio__play" onClick={play}>&#9655;</a>
        <a class="audio__pause" onClick={pause}>&#9723;</a>
        <a class="audio__next" onclick={next_track}>&#8811;</a>
        <a class="audio__prev" onclick={prev_track}>&#8810;</a>
        <div class="audio__line"><div class="audio__time"></div></div>
        <p>{currentTime}</p>
      </header>
  );
}

