import React from 'react';
import './Nosotros.css';

const Nosotros = () => (
  <section className="nosotros-section">
    <h2>Sobre Nosotros</h2>
    <div className="nosotros-content">
      <p>
        Somos <b>WEBSYSTEMS</b>, una empresa dedicada a la creación de sistemas web exclusivos y futuristas. Nuestra misión es impulsar negocios con tecnología de vanguardia, diseño único y soluciones personalizadas.
      </p>
      <div className="valores">
        <div>
          <h3>Misión</h3>
          <p>Transformar empresas con sistemas web innovadores y funcionales.</p>
        </div>
        <div>
          <h3>Visión</h3>
          <p>Ser líderes en desarrollo web futurista en Latinoamérica.</p>
        </div>
        <div>
          <h3>Valores</h3>
          <ul>
            <li>Innovación</li>
            <li>Calidad</li>
            <li>Compromiso</li>
            <li>Exclusividad</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Nosotros;
