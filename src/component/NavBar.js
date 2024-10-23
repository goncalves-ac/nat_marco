// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './../style/NavBar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
      <button className={`menu-toggle ${isMenuOpen ? 'show' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`nav-list ${isMenuOpen ? 'show' : ''}`}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              <i className="fa-brands fa-fort-awesome fa-2x iconColor"></i>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/Date" onClick={toggleMenu}>
              <i className="fa-regular fa-calendar-check fa-2x iconColor"></i>
              <span>Data do casamento</span>
            </Link>
          </li>
          <li>
            <Link to="/VenusMars" onClick={toggleMenu}>
              <i className="fa-solid fa-venus-mars fa-2x iconColor"></i>
              <span>Apresentação</span>
            </Link>
          </li>
          <li>
            <Link to="/SlideshowPage" onClick={toggleMenu}>
              <i className="fa-solid fa-camera-retro fa-2x iconColor"></i>
              <span>Fotos</span>
            </Link>
          </li>
          <li>
            <Link to="/gifts" onClick={toggleMenu}>
              <i className="fa-solid fa-gifts fa-2x iconColor"></i>
              <span>Presentes</span>
            </Link>
          </li>
          <li className="qrcode-icon-container">
            <Link to="/qrcodepix" className="qrcode-icon" onClick={toggleMenu}>
              <i className="fa-solid fa-qrcode fa-2x iconColor"></i>
              <span>Pix</span>
            </Link>
          </li>
          <li>
            <Link to="/Confirmations" onClick={toggleMenu}>
              <i className="fa-sharp fa-solid fa-circle-check fa-2x iconColor"></i>
              <span>Confirmar presença</span>
            </Link>
          </li>
          <li>
            <Link to="/ConfirmedGuests" onClick={toggleMenu}>
              <i className="fa-solid fa-list fa-2x iconColor"></i>
              <span>Listagem de presença</span>
            </Link>
          </li>
          <li>
            <Link to="/Mensagens" onClick={toggleMenu}>
              <i className="fa-solid fa-envelope fa-2x iconColor"></i>
              <span>Mensagens</span>
            </Link>
          </li>
          <li>
            <Link to="/Login" onClick={toggleMenu}>
              <i className="fa-solid fa-right-to-bracket fa-2x iconColor"></i>
              <span>Entrar / Inscrever-se</span>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
