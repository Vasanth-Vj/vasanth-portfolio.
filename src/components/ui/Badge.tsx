import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'accent';
  size?: 'sm' | 'md';
  outline?: boolean;
  dot?: boolean; // Adds a blinking availability dot
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  outline = false,
  dot = false,
  children,
  className,
  ...props
}) => {
  const variantStyles = {
    default: outline
      ? 'bg-transparent text-text-secondary border border-border-muted'
      : 'bg-bg-secondary text-text-secondary border border-border-muted',
    success: outline
      ? 'bg-transparent text-state-success border border-state-success'
      : 'bg-state-success/10 text-state-success border border-state-success/20',
    accent: outline
      ? 'bg-transparent text-accent-primary border border-accent-primary/50'
      : 'bg-accent-primary/10 text-text-primary border border-accent-primary/20',
  };

  const sizeStyles = {
    sm: 'px-space-2 py-0.5 text-[10px] gap-1',
    md: 'px-space-3 py-1 text-[length:var(--font-mono-size)] gap-1.5',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-mono font-medium rounded-full select-none',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
              variant === 'success' && 'bg-state-success',
              variant === 'accent' && 'bg-accent-primary',
              variant === 'default' && 'bg-text-secondary',
            )}
          />
          <span
            className={cn(
              'relative inline-flex rounded-full h-2 w-2',
              variant === 'success' && 'bg-state-success',
              variant === 'accent' && 'bg-accent-primary',
              variant === 'default' && 'bg-text-secondary',
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
};

export default Badge;
