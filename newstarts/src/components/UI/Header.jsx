import React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
              <Link to="/about">About</Link>
              <Link to="/users">Users</Link>
      </header>
    );
};

export default Header;