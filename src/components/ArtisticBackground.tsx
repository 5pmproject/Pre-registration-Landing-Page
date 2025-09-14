import React, { useEffect, useRef } from 'react';
import { PARTICLE_CONSTANTS } from '../constants';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
}

export const ArtisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.min(
        PARTICLE_CONSTANTS.MAX_PARTICLES, 
        Math.floor((canvas.width * canvas.height) / PARTICLE_CONSTANTS.DENSITY_FACTOR)
      );
      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * PARTICLE_CONSTANTS.VELOCITY.BASE,
          vy: (Math.random() - 0.5) * PARTICLE_CONSTANTS.VELOCITY.BASE,
          size: Math.random() * (PARTICLE_CONSTANTS.SIZE.MAX - PARTICLE_CONSTANTS.SIZE.MIN) + PARTICLE_CONSTANTS.SIZE.MIN,
          opacity: Math.random() * (PARTICLE_CONSTANTS.OPACITY.MAX - PARTICLE_CONSTANTS.OPACITY.MIN) + PARTICLE_CONSTANTS.OPACITY.MIN,
          hue: Math.random() * (PARTICLE_CONSTANTS.HUE.MAX - PARTICLE_CONSTANTS.HUE.MIN) + PARTICLE_CONSTANTS.HUE.MIN
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create dark gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, PARTICLE_CONSTANTS.BACKGROUND_COLORS.TOP);
      gradient.addColorStop(0.5, PARTICLE_CONSTANTS.BACKGROUND_COLORS.MIDDLE);
      gradient.addColorStop(1, PARTICLE_CONSTANTS.BACKGROUND_COLORS.BOTTOM);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Animate opacity
        particle.opacity += Math.sin(Date.now() * PARTICLE_CONSTANTS.OPACITY.ANIMATION_SPEED + index) * PARTICLE_CONSTANTS.OPACITY.VARIATION;
        particle.opacity = Math.max(PARTICLE_CONSTANTS.OPACITY.MIN, Math.min(PARTICLE_CONSTANTS.OPACITY.MAX, particle.opacity));

        // Draw particle with glow effect
        const glowSize = particle.size * PARTICLE_CONSTANTS.GLOW.MULTIPLIER;
        
        // Outer glow
        const glowGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowSize
        );
        glowGradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, ${particle.opacity * PARTICLE_CONSTANTS.GLOW.OUTER_OPACITY})`);
        glowGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Inner particle
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 80%, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: '#0d0d0d' }}
    />
  );
};