import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesBg = () => (
  <Particles
    options={{
      background: { color: { value: '#181c2b' } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'repulse' },
          resize: true,
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: '#7f9cf5' },
        links: {
          color: '#7f9cf5',
          distance: 120,
          enable: true,
          opacity: 0.3,
          width: 1.5,
        },
        collisions: { enable: true },
        move: {
          direction: 'none',
          enable: true,
          outModes: { default: 'bounce' },
          random: false,
          speed: 1.2,
          straight: false,
        },
        number: { density: { enable: true, area: 800 }, value: 60 },
        opacity: { value: 0.5 },
        shape: { type: 'circle' },
        size: { value: { min: 2, max: 4 } },
      },
      detectRetina: true,
    }}
    style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}
  />
);

export default ParticlesBg;
