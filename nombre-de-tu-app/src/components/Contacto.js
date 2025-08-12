import React from 'react';
import './Contacto.css';

const Contacto = () => (
  <section className="contacto-section">
    <h2>Contacto</h2>
    <div className="contacto-content">
      <p>¿Listo para transformar tu empresa? ¡Contáctanos!</p>
      <div className="contacto-info">
        <div>
          <span className="contact-icon">📞</span>
          <a href="tel:+50583574654">+505 83574654</a>
        </div>
        <div>
          <span className="contact-icon">✉️</span>
          <a href="mailto:vallecristopher102@gmail.com">vallecristopher102@gmail.com</a>
        </div>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo" required />
        <textarea placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </section>
);

export default Contacto;
