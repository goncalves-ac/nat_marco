// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

import './../style/NavBar.css'; // Importa o CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importando o CSS da Font Awesome

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
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
  );
};

export default Navbar;
