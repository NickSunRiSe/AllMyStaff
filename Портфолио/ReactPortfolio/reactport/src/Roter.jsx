import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Components/Pages/Main";
import Nothing from "./Components/Pages/Nothing";



const Roter = () => {
    return (
        <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<Nothing/>}/>
      </Routes>
    );
};

export default Roter;