
import React, { useState } from 'react';
import './ChatBot.css';

const faq = [
  {
    q: 'servicios',
    a: 'Ofrecemos sistemas web empresariales, e-commerce, CRM, web corporativa y más, todos con diseño 3D y animaciones avanzadas.'
  },
  {
    q: 'contacto',
    a: 'Puedes llamarnos al +505 83574654 o escribirnos a vallecristopher102@gmail.com. También tienes el formulario en la sección Contacto.'
  },
  {
    q: 'empresa',
    a: 'WEBSYSTEMS es líder en desarrollo web profesional, con tecnología de vanguardia y atención personalizada.'
  },
  {
    q: 'portafolio',
    a: 'Puedes ver nuestros trabajos y testimonios en la sección Portafolio. ¡Clientes satisfechos y resultados únicos!'
  },
  {
    q: 'colores',
    a: 'Usamos paletas profesionales: azul oscuro (#232a3d), azul fluido (#7f9cf5), gris profundo (#181c2b), blanco luminoso (#eaf0fa) y detalles en dorado (#FFD700).'
  },
  {
    q: 'animaciones',
    a: 'Toda la web tiene animaciones 3D, glassmorphism, transiciones suaves y efectos interactivos para impresionar.'
  },
  {
    q: 'cotización',
    a: 'Solicita tu cotización por el formulario de contacto o por WhatsApp. ¡Respuesta rápida y personalizada!'
  }
];

function getBotAnswer(input) {
  input = input.toLowerCase();
  for (let f of faq) {
    if (input.includes(f.q)) return f.a;
  }
  return '🤖 ¡Hola! Soy el bot 3D de WEBSYSTEMS. Pregúntame sobre servicios, empresa, portafolio, colores, animaciones o cómo contactarnos.';
}

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: '🤖 ¡Hola! Soy el bot 3D de WEBSYSTEMS. ¿Qué quieres saber sobre nuestra web empresarial?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    const botMsg = { from: 'bot', text: getBotAnswer(input) };
    setMessages([...messages, userMsg, botMsg]);
    setInput('');
  };

  return (
    <section className="chatbot-section">
      <h2 style={{fontSize:'2.2rem', fontWeight:'700', color:'#7f9cf5', letterSpacing:'2px', marginBottom:'1.5rem'}}>Bot 3D Empresarial</h2>
      <div className="chatbot-window" style={{perspective:'1200px', transformStyle:'preserve-3d', boxShadow:'0 12px 32px #232a3d'}}>
        {messages.map((msg, i) => (
          <div key={i} className={`chat-msg ${msg.from}`} style={{
            transform: msg.from==='bot' ? 'rotateY(-8deg)' : 'rotateY(8deg)',
            background: msg.from==='bot' ? 'rgba(127,156,245,0.18)' : 'linear-gradient(90deg, #232a3d, #7f9cf5)',
            color: msg.from==='bot' ? '#7f9cf5' : '#eaf0fa',
            boxShadow: msg.from==='bot' ? '0 0 24px #7f9cf5' : '0 0 24px #232a3d',
            fontWeight:'600', fontSize:'1.15rem', marginBottom:'1rem', transition:'transform 0.5s cubic-bezier(.68,-0.55,.27,1.55)'
          }}>{msg.text}</div>
        ))}
      </div>
      <form className="chatbot-form" onSubmit={sendMessage} style={{marginTop:'2rem'}}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
          style={{fontSize:'1.1rem', border:'none', borderRadius:'14px', background:'rgba(127,156,245,0.12)', color:'#eaf0fa', padding:'1rem 1.2rem', boxShadow:'0 0 18px #7f9cf5'}}
        />
        <button type="submit" style={{background:'linear-gradient(90deg, #7f9cf5 0%, #232a3d 100%)', color:'#fff', border:'none', borderRadius:'16px', padding:'1rem 2.5rem', fontSize:'1.15rem', fontWeight:'700', boxShadow:'0 2px 16px #7f9cf544', cursor:'pointer', letterSpacing:'1px', marginLeft:'1rem'}}>Enviar</button>
      </form>
    </section>
  );
};

export default ChatBot;
