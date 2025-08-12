import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar futuristic-navbar">
    <div className="logo">WEBSYSTEMS</div>
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/servicios">Sistemas</Link></li>
      <li><Link to="/nosotros">Nosotros</Link></li>
      <li><Link to="/contacto">Contacto</Link></li>
      <li><Link to="/chatbot">Bot</Link></li>
    </ul>
  </nav>
);

export default Navbar;
