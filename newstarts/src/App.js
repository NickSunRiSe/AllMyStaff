import React from "react";
import reactDom from "react-dom";
import "../src/index";
import Allinfo from "./pages/Allinfo";
import Fs from "./pages/Fs";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Roter from "./Rooottting"
import Header from "./components/UI/Header";

function App() {
  return (
    <Router>
        <Header/>
        <Roter/>
    </Router>
  );
}

export default App;
