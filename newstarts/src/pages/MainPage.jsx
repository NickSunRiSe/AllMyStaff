import React from "react";
import TextMain from "../components/Text/TextMain";
import Header from "../components/UI/Header";
import LogoMain from "../components/images/LogoMain";

const MainPage = () => {
  return (
    <div className="con">
        <div className="LogoMainDiv">
        <LogoMain />
        </div>
      <Header />
      <TextMain/>
    </div>
  );
};

export default MainPage;
