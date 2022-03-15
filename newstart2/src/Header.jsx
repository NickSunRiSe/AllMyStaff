import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/main" className="HeaderMain">Главная</Link>
      <Link to="/music" className="HeaderMusic">Дискография</Link>
      <Link to="/bio" className="HeaderBio">Биография</Link>
      <Link to="/news" className="HeaderNews">Новости</Link>
      <Link to="/contacts" className="HeaderContacts">Контакты</Link>
    </header>
  );
};

export default Header;
