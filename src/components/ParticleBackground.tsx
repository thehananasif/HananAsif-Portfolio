
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  color: string;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles: Particle[] = [];
  const particleCount = 50;
  const colors = ['#6E59A5', '#9b87f5', '#1A1F2C'];
  
  const initParticles = (width: number, height: number) => {
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 10,
        size: Math.random() * 5 + 2,
        speed: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  };
  
  const moveParticles = (width: number, height: number) => {
    for (let i = 0; i < particles.length; i++) {
      particles[i].y -= particles[i].speed;
      
      if (particles[i].y < -particles[i].size * 2) {
        particles[i].y = height + particles[i].size * 2;
        particles[i].x = Math.random() * width;
      }
    }
  };
  
  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      ctx.beginPath();
      
      // Use different shapes for variety
      if (i % 3 === 0) {
        // Diamond
        ctx.moveTo(p.x, p.y - p.size);
        ctx.lineTo(p.x + p.size, p.y);
        ctx.lineTo(p.x, p.y + p.size);
        ctx.lineTo(p.x - p.size, p.y);
      } else if (i % 3 === 1) {
        // Square
        ctx.rect(p.x - p.size, p.y - p.size, p.size * 2, p.size * 2);
      } else {
        // Triangle
        ctx.moveTo(p.x, p.y - p.size);
        ctx.lineTo(p.x + p.size, p.y + p.size);
        ctx.lineTo(p.x - p.size, p.y + p.size);
      }
      
      ctx.closePath();
      ctx.fillStyle = p.color;
      ctx.fill();
    }
  };
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      initParticles(canvas.width, canvas.height);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    initParticles(canvas.width, canvas.height);
    
    const animate = () => {
      moveParticles(canvas.width, canvas.height);
      drawParticles(ctx);
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default ParticleBackground;
