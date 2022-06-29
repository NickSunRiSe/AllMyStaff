import React from "react";
import End from "../End";
import Start from "../Start";
import Text from "../Text";
import Video from "../Video";
import Header from "../Header";

const Main = () => {
  return (
    <div>
      <Header />
      <div class="con">
        <Text />
        <div class="start__con">
          <Start />
        </div>
        <Video />
        <End />
      </div>
    </div>
  );
};

export default Main;
