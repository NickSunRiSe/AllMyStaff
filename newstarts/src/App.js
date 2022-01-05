import React, {useState} from "react";
import '../src/index';
import End from "./components/End";
import Start from "./components/Start";
import Text1 from "./components/Text1";


function App() {
  return(
     <div className="con">
      <Start/>
      <Text1/>
      <End/>
     </div>
    
  );
}

export default App;
