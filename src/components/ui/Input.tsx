import React from 'react';
import { cn } from '../../lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, type = 'text', ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-space-2">
        {label && (
          <label
            htmlFor={id}
            className="text-[length:var(--font-small-size)] font-medium text-text-secondary select-none"
          >
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          ref={ref}
          className={cn(
            'w-full bg-bg-secondary border text-text-primary placeholder:text-text-disabled text-sm px-space-4 py-space-3 outline-none transition-all duration-150 rounded-[length:var(--radius-md)]',
            error
              ? 'border-state-error focus:border-state-error focus:ring-1 focus:ring-state-error/20'
              : 'border-border-muted focus:border-border-focus focus:ring-4 focus:ring-accent-primary/10',
            className,
          )}
          {...props}
        />
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
