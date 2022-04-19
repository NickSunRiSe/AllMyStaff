import React from "react";
import End from "../End";
import Header from "../Header";
import Player from "../components/JS/Player";

const Music = () => {
  return (
    <div className="con">
      <Header />
      <Player/>
      Дискография по альбомам
      <End />
    </div>
  );
};

export default Music;
