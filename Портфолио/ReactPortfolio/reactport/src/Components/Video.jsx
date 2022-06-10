import React from 'react';
import vid from "./Assets/video.mp4"

const Video = () => {
    return (
        <div class="video__main">
        <a class="video__play">&#9655;</a>
        <a class="video__pause">&#9723;</a>
        <video class="video" id="video">
        <source src={vid} type="video/mp4"/>
        </video>
      </div>
    );
};

export default Video;