import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';
import { springPresets } from '../../animations/springPresets';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  interactive?: boolean;
  glow?: boolean; // Adds a subtle accent glow under the card
  padding?: 'none' | 'sm' | 'md' | 'lg';
  borderless?: boolean;
  glass?: boolean;
  asChild?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  interactive = false,
  glow = false,
  padding = 'md',
  borderless = false,
  glass = false,
  asChild = false,
  className,
  ...props
}) => {
  const baseClass = cn(
    'relative rounded-[length:var(--radius-lg)] overflow-hidden transition-all duration-200',
    !borderless && 'border border-border-muted',
    glass ? 'backdrop-blur-md bg-bg-card/60' : 'bg-bg-card',
    padding === 'sm' && 'p-space-3',
    padding === 'md' && 'p-space-6',
    padding === 'lg' && 'p-space-8',
    padding === 'none' && 'p-0',
    interactive &&
      'hover:border-border-active hover:shadow-[var(--shadow-card-hover)] cursor-pointer',
    className,
  );

  const glowElement = glow && (
    <div className="absolute -inset-px -z-10 rounded-[length:var(--radius-lg)] bg-gradient-to-r from-accent-primary/20 via-transparent to-accent-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-md" />
  );

  // If asChild is enabled and a single valid element is passed, clone and pass styles/props
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<Record<string, unknown>>;
    const mergedClass = cn(baseClass, child.props.className);

    if (interactive) {
      // If interactive, wrap it in a motion block to safely apply spring animations
      return (
        <motion.div
          whileHover={{ y: -4 }}
          transition={springPresets.cardHover}
          className="group inline-block w-full"
        >
          {React.cloneElement(child, {
            className: mergedClass,
            ...props,
          })}
        </motion.div>
      );
    }

    return React.cloneElement(child, {
      className: mergedClass,
      ...props,
    });
  }

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
