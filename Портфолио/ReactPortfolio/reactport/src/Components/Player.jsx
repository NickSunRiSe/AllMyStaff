import React, { useRef, useState } from "react";
import song1 from "./Sounds/111.mp3"
import song2 from "./Sounds/222.mp3"
import song3 from "./Sounds/333.mp3"


export default function Header() {
  const audioPlayer = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);

  const playlist = ({
    files: [song1, song2, song3]
  })
const trackIndex = 0;

  const play = () => {
    playlist.play()
  };

  const pause = () => {
    audioPlayer.current.pause();
  };

  const prev_track = () => {
    if (trackIndex > 0) {
        trackIndex--;
      } else {
        trackIndex = 2;
      }
      audioPlayer.src = playlist[trackIndex];
      audioPlayer.current.play();
  }
  
  const next_track = () => {
    playlist.next()
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
