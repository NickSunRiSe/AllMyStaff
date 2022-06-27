import React from "react";
import Header from "../Header";
import End from "../End";

const Nothing = () => {
  return (
    <div className="con">
      <Header />
      <div className="nothing">
        Данная страница не содержит какого либо контента.
      </div>
      <End />
    </div>
  );
};

export default Nothing;
