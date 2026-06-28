import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'accent';
  dot?: boolean; // Adds a blinking availability dot (good for Vasanth's live SLA indicator)
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  dot = false,
  children,
  className,
  ...props
}) => {
  const variantStyles = {
    default: 'bg-bg-secondary text-text-secondary border border-border-muted',
    success: 'bg-state-success/10 text-state-success border border-state-success/20',
    accent: 'bg-accent-primary/10 text-text-primary border border-accent-primary/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-space-3 py-1 font-mono text-[length:var(--font-mono-size)] font-medium rounded-full select-none',
        variantStyles[variant],
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
