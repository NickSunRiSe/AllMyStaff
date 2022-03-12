import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/Mainpage";
import Nothing from "./pages/Nothing";

const Roter = () => {
  return (
    <div>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<Nothing/>}/>
      </Routes>
    </div>
  );
};

export default Roter;

