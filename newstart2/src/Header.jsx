import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/main" className="HeaderMain">Главная</Link>
    </header>
  );
};

export default Header;
