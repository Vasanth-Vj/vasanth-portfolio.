import React from 'react';
import { cn } from '../../lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, required, className, id, rows = 4, ...props }, ref) => {
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
        <textarea
          id={id}
          ref={ref}
          rows={rows}
          required={required}
          className={cn(
            'w-full bg-bg-secondary border text-text-primary placeholder:text-text-disabled text-sm px-space-4 py-space-3 outline-none resize-y transition-all duration-150 rounded-[length:var(--radius-md)]',
            error
              ? 'border-state-error focus:border-state-error focus:ring-1 focus:ring-state-error/20'
              : 'border-border-muted focus:border-border-focus focus:ring-4 focus:ring-accent-primary/10',
            className,
          )}
          {...props}
        />
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

Textarea.displayName = 'Textarea';
export default Textarea;
