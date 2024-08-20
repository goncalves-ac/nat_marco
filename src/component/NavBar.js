// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './../style/NavBar.css'; // Importa o CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importando o CSS da Font Awesome

import MDireita from './../img/molduraDireita.png';
import MEsquerda from './../img/molduraEsquerda.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section>
      <img src={MDireita} alt="groom" className="MDireta" />
      <img src={MEsquerda} alt="groom" className="MEsquerda" />
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`nav-list ${isMenuOpen ? 'show' : ''}`}>
          <li>
            <Link to="/">
              <i className="fa-brands fa-fort-awesome fa-2x"></i>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/Date">
              <i className="fa-regular fa-calendar-check fa-2x"></i>
              <span>Data do casamento</span>
            </Link>
          </li>
          <li>
            <Link to="/VenusMars">
              <i className="fa-solid fa-venus-mars fa-2x"></i>
              <span>???</span>
            </Link>
          </li>
          <li>
            <Link to="/SlideshowPage">
              <i className="fa-solid fa-camera-retro fa-2x"></i>
              <span>Fotos</span>
            </Link>
          </li>
          <li>
            <Link to="/gifts">
              <i className="fa-solid fa-gifts fa-2x"></i>
              <span>Presentes</span>
            </Link>
          </li>
          <li className="qrcode-icon-container">
            <Link to="/qrcodepix" className="qrcode-icon">
              <i className="fa-solid fa-qrcode fa-2x"></i>
            </Link>
          </li>
          <li>
            <Link to="/perfil">
              <i className="fa fa-user"></i>
              <span>Perfil</span>
            </Link>
          </li>
          <li>
            <Link to="/contato">
              <i className="icon-mail-2"></i>
              <span>Contato</span>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
