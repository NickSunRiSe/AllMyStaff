import { useState } from "react";
import song1 from "./Sounds/111.mp3"
import song2 from "./Sounds/222.mp3"
import song3 from "./Sounds/333.mp3"

export default function Player() {
  const time = document.querySelector(".audio__time");
  const btnPlay = document.querySelector(".audio__play");
  const btnPause = document.querySelector(".audio__pause");
  const btnPrev = document.querySelector(".audio__prev");
  const btnNext = document.querySelector(".audio__next");
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

  const AudioPlay  = () => {
    Player.play();
      let audioTime = Math.round(Player.currentTime);
      let audioLength = Math.round(Player.duration);
      time.style.width = (audioTime * 100) / audioLength + "%";
      if (audioTime == audioLength && trackIndex < 2) {
        setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
        Player.src = musicTracks[trackIndex].src;
        Player.play();
      } else if (audioTime == audioLength) {
        trackIndex = 0;
        Player.src = musicTracks[trackIndex].src;
        Player.play();
      }
    };


  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
    <div className="header">
       <audio
        src={musicTracks[trackIndex].src}
      />
       <a class="audio__play">&#9655;</a>
      <a class="audio__pause">&#9723;</a>
      <a class="audio__next" onclick={handleClickNext}>&#8811;</a>
      <a class="audio__prev" onclick={handleClickPrevious}>&#8810;</a>
      <div class="audio__line"><div class="audio__time"></div></div>
    </div>
  );
}
