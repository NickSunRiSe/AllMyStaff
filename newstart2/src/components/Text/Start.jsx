import React from 'react';

const Start = () => {
    return (
        <div className='start'>
        <header className="up"> 
        Истень
        <button class="play" type="button"></button>
        <button class="pause" type="button"></button>
        <button class="prev" type="button"></button>
        <button class="next" type="button"></button>
        <div class="audio-track"></div>
        <div class="time"></div>
        </header>
      </div>
    );
};

export default Start;