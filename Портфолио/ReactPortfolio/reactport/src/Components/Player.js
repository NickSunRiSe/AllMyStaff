import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import song1 from "./Sounds/111.mp3"
import song2 from "./Sounds/222.mp3"
import song3 from "./Sounds/333.mp3"

export default function Player() {
    const tracks =  [
        {src: "./Sounds/111.mp3" },
        {
           src: "./Sounds/222.mp3"
        },
        {
            src: "./Sounds/333.mp3"
        }
    ];
  const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? tracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
    <div className="App">
      <h1>audio</h1>
      <AudioPlayer
        style={{ borderRadius: "1rem" }}
        autoPlay
        src={tracks[trackIndex].src}
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={true}
        showJumpControls={false}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
      />
    </div>
  );
}
