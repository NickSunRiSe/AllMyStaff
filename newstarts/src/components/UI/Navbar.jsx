import React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
        <div className="navbar_links">
          <Link to="/123"> All</Link>
          <Link to="/321"> that</Link>
        </div>
      </div>
    );
};

export default Navbar;