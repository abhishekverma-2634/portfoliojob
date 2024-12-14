import React from "react";
import "./Header.css";
function Header() {
  return (
    <header className="styleHeader">
      <div className="logoName">
        <img src="../download.jpg"/>
        <p>Abhishek Verma</p>
      </div>
      <nav className="nav">
        <li> <a href="#home">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#services">Services</a></li>
        <li> <a href="#contact">Contact</a></li>


      </nav>
    </header>
  );
}

export default Header;
