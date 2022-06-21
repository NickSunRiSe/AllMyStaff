import React from "react";
import vid from "./Assets/video.mp4";
import pause from "./javascript/VideoPause";
import play from "./javascript/VideoPlay";

const Video = () => {

  return (
    <div class="video__main">
      <a class="video__play" onClick={play}>&#9655;</a>
      <a class="video__pause" onClick={pause}>&#9723;</a>
      <video class="video" id="video">
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
