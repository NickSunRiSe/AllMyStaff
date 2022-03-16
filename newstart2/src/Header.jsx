import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/main" className="HeaderText">Главная</Link>
      <Link to="/music" className="HeaderText">Дискография</Link>
      <Link to="/bio" className="HeaderText">Биография</Link>
      <Link to="/news" className="HeaderText">Новости</Link>
      <Link to="/contacts" className="HeaderText">Контакты</Link>
    </header>
  );
};

export default Header;
