import React from "react";
import "../src/index";
import End from "./Components/End";
import Start from "./Components/Start";
import Text from "./Components/Text";
import Video from "./Components/Video";

function App() {
  return (
    <div class="con">
      <Text/>
      <Start/>
      <Video/>
      <End/>
      </div>
  );
}

export default App;
