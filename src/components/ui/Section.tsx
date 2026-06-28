import React from 'react';
import { cn } from '../../lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  divider?: boolean; // Adds a top border divider
  clean?: boolean; // Removes default padding constraints
}

export const Section: React.FC<SectionProps> = ({
  children,
  divider = false,
  clean = false,
  className,
  ...props
}) => {
  return (
    <section
      className={cn(
        divider && 'border-t border-border-muted',
        !clean && 'py-space-16 md:py-space-24',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
