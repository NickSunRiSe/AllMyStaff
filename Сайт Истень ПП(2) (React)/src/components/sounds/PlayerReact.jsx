import React from 'react';
import a from "../sounds/111.mp3"
import b from "../sounds/222.mp3"
import c from "../sounds/333.mp3"
import ReactAudioPlayer from 'react-audio-player';

const PlayerReact = () => {
    return (
        <div>
             <ReactAudioPlayer
  src={a}
  controls
/>
плеер
        </div>
    );
};

export default PlayerReact;