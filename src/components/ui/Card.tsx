import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';
import { springPresets } from '../../animations/springPresets';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  interactive?: boolean;
  glow?: boolean; // Adds a subtle accent glow under the card
}

export const Card: React.FC<CardProps> = ({
  children,
  interactive = false,
  glow = false,
  className,
  ...props
}) => {
  const baseClass = cn(
    'relative border border-border-muted bg-bg-card p-space-6 rounded-[length:var(--radius-lg)] overflow-hidden transition-colors duration-200',
    interactive &&
      'hover:border-border-active hover:shadow-[var(--shadow-card-hover)] cursor-pointer',
    className,
  );

  const glowElement = glow && (
    <div className="absolute -inset-px -z-10 rounded-[length:var(--radius-lg)] bg-gradient-to-r from-accent-primary/20 via-transparent to-accent-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-md" />
  );

  if (interactive) {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        transition={springPresets.cardHover}
        className={cn('group', baseClass)}
        {...props}
      >
        {glowElement}
        {children}
      </motion.div>
    );
  }

  // Safely clone and remove Framer Motion properties to prevent React DOM errors on static div elements
  const staticProps = { ...props } as Record<string, unknown>;
  const motionKeys = [
    'whileHover',
    'whileTap',
    'whileDrag',
    'whileFocus',
    'whileInView',
    'animate',
    'initial',
    'exit',
    'variants',
    'transition',
    'onDrag',
    'onDragStart',
    'onDragEnd',
  ];

  motionKeys.forEach((key) => {
    delete staticProps[key];
  });

  return (
    <div className={baseClass} {...staticProps}>
      {children}
    </div>
  );
};

export default Card;
