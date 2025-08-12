import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar futuristic-navbar">
    <div className="logo">
  <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo WEBSYSTEMS" style={{height: '56px', verticalAlign: 'middle', borderRadius: '12px', boxShadow: '0 2px 12px #232a3d'}} />
    </div>
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
