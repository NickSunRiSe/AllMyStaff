import React from "react";
import End from "../End";
import Header from "../Header";
import Player from "../components/sounds/PlayerReact"

const Music = () => {
  return (
    <div className="con1">
      <Header />
      <Player/>
      Дискография 
      <End />
    </div>
  );
};

export default Music;
