// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './../style/NavBar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import MDireita from './../img/molduraDireita.png';
import MEsquerda from './../img/molduraEsquerda.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section>
      <img src={MDireita} alt="groom" className="MDireta" />
      <img src={MEsquerda} alt="groom" className="MEsquerda" />
      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <button className="menu-button" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </button>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              <i className="fa-brands fa-fort-awesome fa-2x"></i>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/Date" onClick={toggleMenu}>
              <i className="fa-regular fa-calendar-check fa-2x"></i>
              <span>Data do casamento</span>
            </Link>
          </li>
          <li>
            <Link to="/VenusMars" onClick={toggleMenu}>
              <i className="fa-solid fa-venus-mars fa-2x"></i>
              <span>???</span>
            </Link>
          </li>
          <li>
            <Link to="/SlideshowPage" onClick={toggleMenu}>
              <i className="fa-solid fa-camera-retro fa-2x"></i>
              <span>Fotos</span>
            </Link>
          </li>
          <li>
            <Link to="/gifts" onClick={toggleMenu}>
              <i className="fa-solid fa-gifts fa-2x"></i>
              <span>Presentes</span>
            </Link>
          </li>
          <li className="qrcode-icon-container">
            <Link to="/qrcodepix" className="qrcode-icon" onClick={toggleMenu}>
              <i className="fa-solid fa-qrcode fa-2x"></i>
              <span>QRCode Pix</span>
            </Link>
          </li>
          <li>
            <Link to="/perfil" onClick={toggleMenu}>
              <i className="fa fa-user"></i>
              <span>Perfil</span>
            </Link>
          </li>
          <li>
            <Link to="/contato" onClick={toggleMenu}>
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
