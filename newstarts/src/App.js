import React from "react";
import "../src/index";
import Allinfo from "./pages/Allinfo";
import Fs from "./pages/Fs";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/UI/Header";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Fs/>
      </div>
      <Route path="/about">
      <Allinfo/>
      </Route>
      <Route path="/users">
      <Fs/>
      </Route>
    </Router>
  );
}

export default App;
