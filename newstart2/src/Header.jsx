import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/main" className="HeaderMain">Главная</Link>
      <Link to="/music" className="HeaderMusic">Дискография</Link>
      <Link to="/main" className="HeaderMainLogo">Logo</Link>
    </header>
  );
};

export default Header;
