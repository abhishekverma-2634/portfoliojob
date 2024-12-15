import React from "react";
import "./Header.css";
import {useState} from "react";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className="header">
      <div className="styleHeader">
      <div className="logoName">
        <img src="../download.jpg"/>
        <p>Abhishek Verma</p>
      </div>
      <button className="hamburgerMenu" onClick={toggleMenu}>&#9776;</button>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <li> <a href="#home">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#services">Services</a></li>
        <li> <a href="#contact">Contact</a></li>


      </nav>
      </div>
    </header>
  );
}

export default Header;
