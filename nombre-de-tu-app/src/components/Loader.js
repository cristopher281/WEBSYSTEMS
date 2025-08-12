import React from 'react';
import './Loader.css';

const Loader = () => (
  <div className="loader-bg">
    <div className="loader-logo">
      <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo WEBSYSTEMS" />
      <div className="loader-spin"></div>
    </div>
    <span className="loader-text">Cargando experiencia única...</span>
  </div>
);

export default Loader;
