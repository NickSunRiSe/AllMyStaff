import React from "react";
import {Link } from "react-router-dom";
import Logo from "./components/images/ISten.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="headerleft">
        <img className="minilogo" src={Logo}></img>
      </div>
      <div className="headercenter">
        <Link to="/main" className="HeaderText">
          Главная
        </Link>
        <Link to="/music" className="HeaderText">
          Дискография
        </Link>
        <Link to="/bio" className="HeaderText">
          Биография
        </Link>
        <Link to="/news" className="HeaderText">
          Новости
        </Link>
        <Link to="/contacts" className="HeaderText">
          Контакты
        </Link>
      </div>
      <div className="headerright">
        <a
          href="https://vk.com/istenoff"
          className="Vk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faVk} size="3x" />
        </a>
      </div>
    </div>
  );
};

export default Header;
