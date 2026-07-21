import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  speed: number;
  size: number;
  opacity: number;
}

export default function BlueprintGrid() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate technical grid particles
    const initialParticles: Particle[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: 0.15 + Math.random() * 0.3,
      size: 1 + Math.random() * 3,
      opacity: 0.2 + Math.random() * 0.5
    }));
    setParticles(initialParticles);

    let animationFrameId: number;
    const update = () => {
      setParticles(prev =>
        prev.map(p => {
          let newY = p.y - p.speed;
          if (newY < 0) {
            newY = 100; // Reset to bottom
          }
          return { ...p, y: newY };
        })
      );
      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#030406]">
      {/* Sub-grid (10px increments) */}
      <div className="absolute inset-0 bg-grid-blueprint-fine" />
      {/* Major structural grid (40px increments) */}
      <div className="absolute inset-0 bg-grid-blueprint" />

      {/* Cyberpunk radial lighting (glowing neon spheres in the margins to simulate circuit ambiance) */}
      <div className="absolute top-0 left-1/4 w-125 h-125 rounded-full bg-brand-cyan/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-10 w-150 h-150 rounded-full bg-brand-blue/5 blur-[150px]" />
      <div className="absolute top-1/2 left-10 w-75 h-75 rounded-full bg-brand-amber/3 blur-[100px]" />

      {/* Floating high-voltage particle pulses moving along vertical alignment planes */}
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full bg-brand-cyan/80 transition-transform duration-300"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            boxShadow: `0 0 8px #00f0ff`
          }}
        />
      ))}

      {/* Cyber/Tech layout indicators in the corners */}
      <div className="absolute top-6 left-6 font-mono text-[9px] text-brand-cyan/25 tracking-widest hidden lg:block uppercase">
        GRID_LAYER_ACTIVE // REF:83920
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[9px] text-brand-cyan/25 tracking-widest hidden lg:block uppercase">
        AETHERIS_SYS_CORE // SECURE
      </div>
    </div>
  );
}
