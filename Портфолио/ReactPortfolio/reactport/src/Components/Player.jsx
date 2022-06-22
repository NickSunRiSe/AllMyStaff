import { useState } from "react";
import song1 from "./Sounds/111.mp3"
import song2 from "./Sounds/222.mp3"
import song3 from "./Sounds/333.mp3"
import audio__pause from "./javascript/AudioPause";
import audio__play from "./javascript/AudioPlay";

export default function Player() {
    const musicTracks =  [
        {src: song1 },
        {
          src:  song2
        },
        {
            src: song3
        }
    ];
  const [trackIndex, setTrackIndex] = useState(0);


  const audio__prev = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
  };

  const audio__next = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
    <div className="header">
      <audio  id="audio" type="audio/mpeg" src={musicTracks[trackIndex].src}/>
      <a class="audio__play" onclick={audio__play}>&#9655;</a>
      <a class="audio__pause" onclick={audio__pause}>&#9723;</a>
      <a class="audio__next" onclick={audio__next}>&#8811;</a>
      <a class="audio__prev" onclick={audio__prev}>&#8810;</a>
      <div class="audio__line"><div class="audio__time"></div></div>
    </div>
  );
}
