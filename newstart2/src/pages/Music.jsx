import React from "react";
import End from "../End";
import Header from "../Header";
import "../components/JS/Player";
import "../components/sounds/111.mp3"
import "../components/sounds/222.mp3"
import "../components/sounds/333.mp3"

const Music = () => {
  return (
    <div className="condd">
      <Header />
      Дискография
      <audio id="audio" type="audio/mpeg">
        <source src="../components/sounds/111.mp3" />
        <source src="../components/sounds/222.mp3" />
        <source src="../components/sounds/333.mp3" />
      </audio>
      <a class="play">&#9655;</a>
      <a class="pause">&#9723;</a>
      <a class="next" onclick="nexttrack()">
        &#8811;
      </a>
      <a class="prev" onclick="prevtrack()">
        &#8810;
      </a>
      
      <End />
    </div>
  );
};

export default Music;
