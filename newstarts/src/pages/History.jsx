import React, { useState, useEffect } from "react";
import Text3 from "../components/Text/Text3";
import End from "../components/End";
import Header from "../components/UI/Header";
import LogoMain from "../components/images/LogoMain";

const FirstPage = () => {
  return (
    <div className="con">
      <div className="LogoMainDiv">
        <LogoMain />
        </div>
      <Header />
      <Text3 />
      <End />
    </div>
  );
};

export default FirstPage;
