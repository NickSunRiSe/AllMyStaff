import React, { useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "../src/index";
import Navbar from "./components/UI/Navbar";
import Allinfo from "./pages/Allinfo";
import FP from "./pages/Fs";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Route path="/123">
      <Allinfo/>
    </Route>
    <Route path="/321">
      <FP/>
    </Route>
    </BrowserRouter>
  
  );
}

export default App;
