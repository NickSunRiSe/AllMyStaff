import React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
              <Link to="/about">Главная</Link>
              <Link to="/audio">Дискография</Link>
              <hr />
      </header>
    );
};

export default Header;