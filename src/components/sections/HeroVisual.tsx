import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDoodle, CircleDoodle, SparkleDoodle, StarDoodle } from '../ui/Doodles';

export const HeroVisual: React.FC = () => {
  // Float animation presets
  const floatAnim = (duration: number, delay: number = 0) => ({
    animate: {
      y: [0, -10, 0],
      rotate: [0, 2, -2, 0],
    },
    transition: {
      duration,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut' as const,
      delay,
    },
  });

  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center select-none pt-6 pb-12">
      {/* Background Soft Warm Glow */}
      <div className="absolute w-[320px] h-[320px] rounded-full bg-accent-primary/5 blur-[80px] -z-10 pointer-events-none" />
      <div className="absolute w-[240px] h-[240px] rounded-full bg-accent-warm/5 blur-[70px] -z-10 pointer-events-none" />

      {/* Main Polaroid Frame Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: -3 }}
        whileHover={{ rotate: 0, scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 80, damping: 15 }}
        className="relative z-10 bg-white p-4 pb-14 shadow-2xl border border-black/[0.06] rounded-[2px] w-[290px] md:w-[320px] cursor-pointer"
      >
        {/* Paper Tape effect at top */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-bg-secondary/60 backdrop-blur-xs border-x border-t border-black/[0.04] shadow-xs rotate-[-1deg] opacity-90 z-20" />

        {/* Image Container */}
        <div className="relative aspect-square w-full bg-bg-secondary overflow-hidden border border-black/[0.04] rounded-xs">
          <img
            src="/avatar.png"
            alt="Vasanthakumar"
            className="w-full h-full object-cover filter contrast-[1.02] brightness-[0.98]"
            loading="eager"
          />
        </div>

        {/* Polaroid Caption */}
        <div className="mt-5 text-center">
          <span className="font-handwritten text-text-primary text-3xl md:text-4xl tracking-wide select-none">
            Vasanthakumar
          </span>
        </div>
      </motion.div>

      {/* FLOATING BADGES & SKETCHY ANNOTATIONS */}

      {/* Annotation 1: Clean Code (Top Left) */}
      <motion.div
        {...floatAnim(5, 0.2)}
        className="absolute top-2 left-6 z-20 flex flex-col items-center"
      >
        <span className="font-handwritten text-text-secondary text-lg md:text-xl font-bold rotate-[-12deg]">
          Clean Code
        </span>
        <ArrowDoodle
          className="w-12 h-10 text-accent-primary mt-1 opacity-70"
          rotation={45}
          delay={0.8}
        />
      </motion.div>

      {/* Annotation 2: Pixel Perfect (Top Right) */}
      <motion.div
        {...floatAnim(5.5, 0.5)}
        className="absolute top-[-10px] right-6 z-20 flex flex-col items-center"
      >
        <span className="font-handwritten text-text-secondary text-lg md:text-xl font-bold rotate-[10deg]">
          Pixel Perfect
        </span>
        <SparkleDoodle className="w-6 h-6 text-accent-warm mt-1" delay={1} />
      </motion.div>

      {/* Annotation 3: Performance (Bottom Left) */}
      <motion.div
        {...floatAnim(4.8, 0.8)}
        className="absolute bottom-6 left-[-15px] z-20 flex flex-col items-center"
      >
        <span className="font-handwritten text-text-secondary text-lg md:text-xl font-bold rotate-[15deg]">
          Performance
        </span>
        <ArrowDoodle
          className="w-12 h-10 text-accent-primary mt-1 opacity-70"
          rotation={120}
          delay={1.2}
        />
      </motion.div>

      {/* Annotation 4: Client Focused (Bottom Right) */}
      <motion.div
        {...floatAnim(6, 1)}
        className="absolute bottom-[-10px] right-2 z-20 flex flex-col items-center"
      >
        <div className="relative px-4 py-2 flex items-center justify-center">
          <CircleDoodle
            className="absolute inset-0 w-full h-full text-accent-warm opacity-80"
            delay={0.9}
          />
          <span className="font-handwritten text-text-primary text-lg md:text-xl font-bold rotate-[-3deg] z-10">
            Client Focused
          </span>
        </div>
      </motion.div>

      {/* Star Doodle Floating */}
      <motion.div
        {...floatAnim(4, 1.2)}
        className="absolute top-1/2 left-[10px] -translate-y-1/2 z-20 text-accent-warm opacity-60"
      >
        <StarDoodle className="w-8 h-8" delay={1.4} />
      </motion.div>

      {/* Floating Badge: React */}
      <motion.div
        {...floatAnim(4.2, 0.1)}
        className="absolute top-24 left-[15%] z-20 bg-white border border-border-muted px-3 py-1 rounded-full shadow-md text-xs font-mono text-text-primary flex items-center gap-1.5 rotate-[-5deg]"
      >
        <span className="w-2 h-2 rounded-full bg-[#61DAFB]" />
        React
      </motion.div>

      {/* Floating Badge: TypeScript */}
      <motion.div
        {...floatAnim(4.5, 0.3)}
        className="absolute top-[40%] right-[10%] z-20 bg-white border border-border-muted px-3 py-1 rounded-full shadow-md text-xs font-mono text-text-primary flex items-center gap-1.5 rotate-[8deg]"
      >
        <span className="w-2 h-2 rounded-full bg-[#3178C6]" />
        TypeScript
      </motion.div>

      {/* Floating Badge: Next.js */}
      <motion.div
        {...floatAnim(4.9, 0.6)}
        className="absolute bottom-24 right-[12%] z-20 bg-white border border-border-muted px-3 py-1 rounded-full shadow-md text-xs font-mono text-text-primary flex items-center gap-1.5 rotate-[-4deg]"
      >
        <span className="w-2 h-2 rounded-full bg-[#000000]" />
        Next.js
      </motion.div>

      {/* Floating Badge: UI/UX */}
      <motion.div
        {...floatAnim(5.2, 0.9)}
        className="absolute bottom-20 left-[20%] z-20 bg-white border border-border-muted px-3 py-1 rounded-full shadow-md text-xs font-mono text-text-primary flex items-center gap-1.5 rotate-[6deg]"
      >
        <span className="w-2 h-2 rounded-full bg-accent-primary" />
        UI/UX
      </motion.div>
    </div>
  );
};

export default HeroVisual;
