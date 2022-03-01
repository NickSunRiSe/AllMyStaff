import React from "react";
import "../src/index";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Roter from "./Rooottting"
import Header from "./components/UI/Header";

function App() {
  return (
    <Router>
        <Roter/>
    </Router>
  );
}

export default App;
