import React from 'react';

import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <h1 className="navbar-title">VSP SOLS</h1>
        <p className="navbar-subtitle">
          FACING CHALLENGES, BUT ALSO HAS A PLAN FOR REVIVAL AND EXPANSION
        </p>
      </div>
      <div className="navbar-right">
        <a href="#home">Home</a>
        <a href="#latest">Latest</a>
        <a href="#about">About Us</a>
      </div>
    </div>
  );
}

export default Navbar;
