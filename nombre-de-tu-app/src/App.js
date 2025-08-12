import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticlesBg from './components/ParticlesBg';
import Loader from './components/Loader';
import Home from './components/Home';
import Servicios from './components/Servicios';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import ChatBot from './components/ChatBot';
import Portafolio from './components/Portafolio';
function App() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Router>
          <div className="main-bg">
            <ParticlesBg />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/chatbot" element={<ChatBot />} />
              <Route path="/portafolio" element={<Portafolio />} />
            </Routes>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
