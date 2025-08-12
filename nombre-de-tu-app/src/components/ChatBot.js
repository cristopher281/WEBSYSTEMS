import React, { useState } from 'react';
import './ChatBot.css';

const faq = [
  {
    q: '¿Qué servicios ofrecen?',
    a: 'Desarrollamos sistemas web exclusivos: gestión empresarial, e-commerce, CRM, web corporativa y más.'
  },
  {
    q: '¿Cómo puedo contactarlos?',
    a: 'Puedes llamarnos al +505 83574654 o escribirnos a vallecristopher102@gmail.com.'
  },
  {
    q: '¿Por qué elegir WEBSYSTEMS?',
    a: 'Ofrecemos diseño futurista, animaciones únicas, funcionalidad exclusiva y atención personalizada.'
  },
  {
    q: '¿Dónde están ubicados?',
    a: 'Atendemos en toda Latinoamérica de forma remota.'
  },
  {
    q: '¿Qué es un sistema web futurista?',
    a: 'Son plataformas con diseño avanzado, animaciones, IA y experiencia de usuario superior.'
  },
  {
    q: '¿Cómo solicito una cotización?',
    a: 'Contáctanos por teléfono, correo o el formulario de contacto.'
  }
];

function getBotAnswer(input) {
  input = input.toLowerCase();
  for (let f of faq) {
    if (input.includes(f.q.toLowerCase().split(' ')[0])) return f.a;
    if (input.includes(f.q.toLowerCase().split(' ')[1])) return f.a;
  }
  return '¡Hola! Soy el bot de WEBSYSTEMS. Pregúntame sobre nuestros servicios, contacto, empresa o sistemas web.';
}

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: '¡Hola! Soy el bot de WEBSYSTEMS. ¿En qué puedo ayudarte?' }
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
      <h2>Bot WEBSYSTEMS</h2>
      <div className="chatbot-window">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-msg ${msg.from}`}>{msg.text}</div>
        ))}
      </div>
      <form className="chatbot-form" onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ChatBot;
