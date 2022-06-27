import React from "react";
import TextMain from "../components/Text/TextMain";
import Header from "../components/UI/Header";
import LogoMain from "../components/images/LogoMain";
import End from "../components/End";

const MainPage = () => {
  return (
    <div className="con">
        <div className="LogoMainDiv">
        <LogoMain />
        </div>
      <Header />
      <TextMain/>
      <End/>
    </div>
  );
};

export default MainPage;
