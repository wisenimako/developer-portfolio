// No need to import React in modern React projects
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: '#0f172a',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: 'push' },
            onHover: { enable: true, mode: 'repulse' },
            resize: true,
          },
          modes: {
            push: { quantity: 6 },
            repulse: { distance: 120, duration: 0.5 },
          },
        },
        particles: {
          color: { value: '#38bdf8' }, // brighter blue
          links: { enable: true, color: '#38bdf8', distance: 140, opacity: 0.6, width: 1.5 },
          collisions: { enable: true },
          move: { direction: 'none', enable: true, outModes: 'bounce', random: false, speed: 1.5, straight: false },
          number: { density: { enable: true, area: 800 }, value: 100 },
          opacity: { value: 0.8 },
          shape: { type: 'circle' },
          size: { value: { min: 2, max: 7 } },
        },
        detectRetina: true,
      }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}
    />
  );
};

export default ParticleBackground;
