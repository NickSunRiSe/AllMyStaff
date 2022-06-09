import React from "react";
import "../src/index.css";
import End from "./Components/End";
import Start from "./Components/Start";
import Text from "./Components/Text";
import Video from "./Components/Video";
import Header from "./Components/Header"
import Slider from "./Components/Slider";

function App() {
  return (
    <div>
      <Header/>
    <div class="con">
      <Text/>
      <div class="start__con">
      <Start/>
      <Slider/>
      </div>
      <Video/>
      <End/>
      </div>
    </div>
  );
}

export default App;
