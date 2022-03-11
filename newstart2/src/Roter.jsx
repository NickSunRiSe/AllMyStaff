import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/Mainpage";

const Roter = () => {
  return (
    <div>
      <Routes>
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default Roter;

