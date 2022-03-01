import React from "react";
import Allinfo from "./pages/Allinfo";
import Fs from "./pages/Fs";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Rooottting = () => {
  return (
    <div>
        <Routes>
      <Route path="/about" element={<Fs/>}/>
      <Route path="*" element={<Fs/>}/>
      <Route path="/audio" element={<Allinfo/>}/>
      </Routes>
    </div>
  );
};

export default Rooottting;
