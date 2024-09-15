import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function ParticleBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,  // Particles cover the whole screen
          zIndex: -1,    // Ensure particles stay in the background
        },
        background: {
          color: "#000",  // Black background
        },
        particles: {
          color: {
            value: "#FFD700",  // Gold particles
          },
          number: {
            value: 100,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
      }}
    />
  );
}

export default ParticleBackground;
