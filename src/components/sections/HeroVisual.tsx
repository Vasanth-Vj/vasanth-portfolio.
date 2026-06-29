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
      className="relative w-full aspect-square max-w-[440px] mx-auto flex items-center justify-center cursor-none select-none"
    >
      {/* Background soft glow - increased size & opacity for visual presence */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-accent-primary/8 blur-[90px] -z-10 pointer-events-none"
        style={{
          x: springX,
          y: springY,
        }}
      />

      {/* Orbit 1: Outer very soft dashed rotation - increased visibility */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[85%] h-[85%] rounded-full border border-border-muted/25 border-dashed flex items-center justify-center"
      >
        {/* Floating node on Outer Orbit - increased size & glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-3 h-3 rounded-full bg-accent-primary shadow-[0_0_12px_var(--accent-primary)]" />
        </div>
      </motion.div>

      {/* Orbit 2: Mid-level reverse rotation - increased visibility */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[62%] h-[62%] rounded-full border border-border-muted/30 flex items-center justify-center"
      >
        {/* Data points */}
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500/80" />
        </div>
        <div className="absolute bottom-1/2 left-0 -translate-x-1/2 translate-y-1/2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
      </motion.div>

      {/* Orbit 3: Inner solid glass ring - high depth layering */}
      <div className="absolute w-[40%] h-[40%] rounded-full border border-accent-primary/20 bg-bg-secondary/25 backdrop-blur-lg flex items-center justify-center shadow-[inset_0_1px_12px_rgba(255,255,255,0.03)]">
        {/* Clean, minimalist performance core */}
        <span className="font-mono text-sm font-semibold tracking-widest text-accent-primary/80">
          FAST
        </span>
      </div>

      {/* Dynamic vector lines projecting to the cursor */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="vector-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Center core dot */}
        <circle cx="50" cy="50" r="1.2" fill="var(--accent-primary)" opacity="0.8" />

        {/* Line extending to springed mouse pointer - slightly thicker */}
        <motion.line
          x1="50"
          y1="50"
          x2={lineX2}
          y2={lineY2}
          stroke="url(#vector-grad)"
          strokeWidth="0.8"
          strokeDasharray="3 1.5"
        />
      </svg>

      {/* Cursor proxy element */}
      <motion.div
        className="absolute w-4.5 h-4.5 rounded-full border border-accent-primary/60 bg-accent-primary/15 pointer-events-none flex items-center justify-center"
        style={{
          x: springX,
          y: springY,
        }}
      />
    </div>
  );
};

export default HeroVisual;
