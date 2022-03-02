import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/main" className="HeaderMain">Главная</Link>
      <Link to="/history" className="HeaderHistory">История</Link>
      <Link to="/audio" className="HeaderMusic">Дискография</Link>
      <hr />
    </header>
  );
};

export default Header;
