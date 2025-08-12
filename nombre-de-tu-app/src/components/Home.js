import React from 'react';
import './Home.css';

const Home = () => (
  <section className="home-section">
    <div className="home-bg-anim"></div>
    <div className="home-content">
      <h1>Bienvenido a <span>WEBSYSTEMS</span></h1>
      <h2>Soluciones web futuristas para tu empresa</h2>
      <p>Desarrollamos sistemas web únicos, modernos y adaptados a tus necesidades. ¡Impulsa tu negocio con tecnología de vanguardia!</p>
      <a href="/contacto" className="cta-btn">Contáctanos</a>
    </div>
  </section>
);

export default Home;
