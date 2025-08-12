import React from 'react';
import './Servicios.css';

const sistemas = [
  {
    nombre: 'Sistema de Gestión Empresarial',
    descripcion: 'Automatiza procesos, controla inventarios y gestiona ventas con tecnología avanzada.',
    icono: '🧠',
  },
  {
    nombre: 'E-commerce Futurista',
    descripcion: 'Plataforma de ventas online con IA, analítica y experiencia de usuario única.',
    icono: '🛒',
  },
  {
    nombre: 'CRM Inteligente',
    descripcion: 'Gestiona clientes, campañas y ventas con dashboards interactivos y automatización.',
    icono: '🤖',
  },
  {
    nombre: 'Web Corporativa',
    descripcion: 'Sitio web institucional con diseño exclusivo, animaciones y posicionamiento SEO.',
    icono: '🌐',
  },
];

const Servicios = () => (
  <section className="servicios-section">
    <h2>Nuestros Sistemas Web</h2>
    <div className="sistemas-list">
      {sistemas.map((s, i) => (
        <div className="sistema-card" key={i}>
          <div className="sistema-icon">{s.icono}</div>
          <h3>{s.nombre}</h3>
          <p>{s.descripcion}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Servicios;
