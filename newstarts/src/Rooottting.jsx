import React from "react";
import Allinfo from "./pages/Music";
import Fs from "./pages/History";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";

const Rooottting = () => {
  return (
    <div>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/history" element={<Fs />} />
        <Route path="/audio" element={<Allinfo />} />
      </Routes>
    </div>
  );
};

export default Rooottting;
