import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { springPresets } from '../../animations/springPresets';

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  to?: string;
  href?: string;
}

export type ButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  to,
  href,
  children,
  className,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold text-sm transition-colors duration-150 focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-[length:var(--radius-md)] select-none';

  const variantStyles = {
    primary:
      'bg-accent-primary text-text-primary hover:bg-accent-hover focus:ring-4 focus:ring-accent-primary/20 shadow-[0_0_20px_-5px_var(--accent-glow)] border border-transparent',
    secondary:
      'bg-transparent border border-border-muted text-text-primary hover:bg-border-muted hover:border-border-active focus:ring-2 focus:ring-border-active',
    ghost:
      'bg-transparent text-text-secondary hover:text-text-primary hover:bg-border-muted/30 focus:ring-2 focus:ring-border-muted',
  };

  const sizeStyles = {
    sm: 'px-space-3 py-space-1.5 text-xs',
    md: 'px-space-6 py-space-3 text-sm',
    lg: 'px-space-8 py-space-4 text-base',
  };

  const isLink = !!to || !!href;
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  const innerContent = (
    <>
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!isLoading && leftIcon && <span className="mr-2 inline-flex">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2 inline-flex">{rightIcon}</span>}
    </>
  );

  // If link, render standard tag or React Router Link (wrapped in motion for spring physics tap response)
  if (isLink) {
    if (to) {
      const linkProps = props as React.ComponentPropsWithoutRef<typeof Link>;
      return (
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={springPresets.tapScale}
          className="inline-block"
        >
          <Link to={to} className={classes} {...linkProps}>
            {innerContent}
          </Link>
        </motion.div>
      );
    }

    const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={springPresets.tapScale}
        className="inline-block"
      >
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...anchorProps}
        >
          {innerContent}
        </a>
      </motion.div>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={springPresets.tapScale}
      className={classes}
      disabled={disabled || isLoading}
      {...buttonProps}
    >
      {innerContent}
    </motion.button>
  );
};

export default Button;
