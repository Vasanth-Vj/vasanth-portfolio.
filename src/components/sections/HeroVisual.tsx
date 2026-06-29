import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const HeroVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track mouse coordinates relative to visual container
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor reactivity
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  // Map coordinate values dynamically for the line
  const lineX2 = useTransform(springX, (val) => val / 4.8 + 50);
  const lineY2 = useTransform(springY, (val) => val / 4.8 + 50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center cursor-none select-none"
    >
      {/* Background soft glow that tracks mouse */}
      <motion.div
        className="absolute w-[250px] h-[250px] rounded-full bg-accent-primary/10 blur-[80px] -z-10"
        style={{
          x: springX,
          y: springY,
        }}
      />

      {/* Orbit 1: Outer slow rotation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[85%] h-[85%] rounded-full border border-border-muted/40 border-dashed flex items-center justify-center"
      >
        {/* Floating node on Outer Orbit */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-3 h-3 rounded-full bg-accent-primary shadow-[0_0_12px_var(--accent-primary)]" />
        </div>
      </motion.div>

      {/* Orbit 2: Mid-level reverse rotation */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[65%] h-[65%] rounded-full border border-border-muted/60 flex items-center justify-center"
      >
        {/* Data points */}
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
        </div>
        <div className="absolute bottom-1/2 left-0 -translate-x-1/2 translate-y-1/2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
      </motion.div>

      {/* Orbit 3: Inner solid line ring */}
      <div className="absolute w-[45%] h-[45%] rounded-full border border-accent-primary/20 bg-bg-secondary/40 backdrop-blur-md flex items-center justify-center">
        {/* Performance metrics micro-indicators */}
        <span className="font-mono text-2xl font-bold tracking-widest text-text-primary">100%</span>
      </div>

      {/* Dynamic vector lines projecting to the spring mouse cursor */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="vector-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Center dot */}
        <circle cx="50" cy="50" r="1.5" fill="var(--accent-primary)" />

        {/* Line extending from center to cursor coordinates mapped to 0-100 grid */}
        <motion.line
          x1="50"
          y1="50"
          x2={lineX2}
          y2={lineY2}
          stroke="url(#vector-grad)"
          strokeWidth="0.8"
          strokeDasharray="2 1"
        />
      </svg>

      {/* Cursor proxy element inside container */}
      <motion.div
        className="absolute w-5 h-5 rounded-full border-2 border-accent-primary/60 bg-accent-primary/20 pointer-events-none flex items-center justify-center"
        style={{
          x: springX,
          y: springY,
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
      </motion.div>
    </div>
  );
};

export default HeroVisual;
