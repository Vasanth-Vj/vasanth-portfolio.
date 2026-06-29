import React from 'react';
import { cn } from '../../lib/utils';

interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'prefix' | 'suffix'
> {
  label?: string;
  error?: string;
  helperText?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, helperText, prefix, suffix, required, className, id, type = 'text', ...props },
    ref,
  ) => {
    return (
      <div className="w-full flex flex-col gap-space-2">
        {label && (
          <label
            htmlFor={id}
            className="text-[length:var(--font-small-size)] font-medium text-text-secondary select-none flex items-center"
          >
            {label}
            {required && <span className="text-state-error ml-1 select-none">*</span>}
          </label>
        )}
        <div className="relative w-full flex items-center">
          {prefix && (
            <span className="absolute left-space-4 text-text-disabled pointer-events-none select-none flex items-center justify-center">
              {prefix}
            </span>
          )}
          <input
            id={id}
            type={type}
            ref={ref}
            required={required}
            className={cn(
              'w-full bg-bg-secondary border text-text-primary placeholder:text-text-disabled text-sm px-space-4 py-space-3 outline-none transition-all duration-150 rounded-[length:var(--radius-md)]',
              prefix && 'pl-space-12',
              suffix && 'pr-space-12',
              error
                ? 'border-state-error focus:border-state-error focus:ring-1 focus:ring-state-error/20'
                : 'border-border-muted focus:border-border-focus focus:ring-4 focus:ring-accent-primary/10',
              className,
            )}
            {...props}
          />
          {suffix && (
            <span className="absolute right-space-4 text-text-disabled pointer-events-none select-none flex items-center justify-center">
              {suffix}
            </span>
          )}
        </div>
        {helperText && !error && (
          <span className="text-xs text-text-secondary/75 mt-0.5 select-none leading-normal">
            {helperText}
          </span>
        )}
        {error && (
          <span className="text-[length:var(--font-small-size)] text-state-error font-medium mt-0.5">
            {error}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
export default Input;
