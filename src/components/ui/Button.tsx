import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
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
  fullWidth?: boolean;
  iconOnly?: boolean;
  loadingText?: string;
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
  fullWidth = false,
  iconOnly = false,
  loadingText,
  children,
  className,
  disabled,
  onClick,
  ...props
}) => {
  const isDisabled = disabled || isLoading;

  const baseStyles =
    'inline-flex items-center justify-center font-semibold text-sm transition-colors duration-150 focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-[length:var(--radius-md)] select-none';

  const variantStyles = {
    primary:
      'bg-accent-primary text-white hover:bg-accent-primary/95 focus:ring-4 focus:ring-accent-primary/20 shadow-[0_4px_14px_rgba(109,94,249,0.25)] border border-transparent',
    secondary:
      'bg-transparent border-2 border-text-primary text-text-primary hover:bg-text-primary hover:text-bg-primary focus:ring-2 focus:ring-text-primary/20',
    ghost:
      'bg-transparent text-text-secondary hover:text-text-primary hover:bg-border-muted/30 focus:ring-2 focus:ring-border-muted',
  };

  const sizeStyles = {
    sm: iconOnly ? 'p-space-2' : 'px-space-3 py-space-1.5 text-xs',
    md: iconOnly ? 'p-space-3' : 'px-space-6 py-space-3 text-sm',
    lg: iconOnly ? 'p-space-4' : 'px-space-8 py-space-4 text-base',
  };

  const isLink = !!to || !!href;
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full flex',
    className,
  );

  const motionProps = {
    whileHover: isDisabled ? undefined : { scale: 1.02 },
    whileTap: isDisabled ? undefined : { scale: 0.98 },
    transition: springPresets.tapScale,
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      const clickHandler = onClick as React.MouseEventHandler<HTMLAnchorElement>;
      clickHandler(e);
    }
  };

  const innerContent = (
    <>
      {isLoading && (
        <svg
          className={cn('animate-spin h-4 w-4 text-current', !iconOnly && 'mr-2')}
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
      {!isLoading && leftIcon && !iconOnly && <span className="mr-2 inline-flex">{leftIcon}</span>}
      {isLoading && loadingText ? <span>{loadingText}</span> : !iconOnly && children}
      {iconOnly && !isLoading && (leftIcon || children)}
      {!isLoading && rightIcon && !iconOnly && (
        <span className="ml-2 inline-flex">{rightIcon}</span>
      )}
    </>
  );

  if (isLink) {
    if (to) {
      const linkProps = props as React.ComponentPropsWithoutRef<typeof Link>;
      return (
        <motion.div {...motionProps} className={cn('inline-block', fullWidth && 'w-full')}>
          <Link
            className={cn(classes, isDisabled && 'opacity-50 pointer-events-none')}
            onClick={handleLinkClick}
            {...linkProps}
          >
            {innerContent}
          </Link>
        </motion.div>
      );
    }

    const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <motion.div {...motionProps} className={cn('inline-block', fullWidth && 'w-full')}>
        <a
          href={href}
          className={cn(classes, isDisabled && 'opacity-50 pointer-events-none')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
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
      {...motionProps}
      className={classes}
      disabled={isDisabled}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      {...(buttonProps as Omit<HTMLMotionProps<'button'>, 'children'>)}
    >
      {innerContent}
    </motion.button>
  );
};

export default Button;
