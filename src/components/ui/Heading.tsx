import React from 'react';
import { cn } from '../../lib/utils';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div';
  mono?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  as,
  mono = false,
  children,
  className,
  ...props
}) => {
  const Component = as || (`h${level}` as const);

  const getStyleClass = (lvl: number) => {
    switch (lvl) {
      case 1:
        return 'text-[length:var(--font-h1-size)] leading-[var(--font-h1-lh)] tracking-tight font-bold text-text-primary';
      case 2:
        return 'text-[length:var(--font-h2-size)] leading-[var(--font-h2-lh)] tracking-tight font-semibold text-text-primary';
      case 3:
        return 'text-[length:var(--font-h3-size)] leading-[var(--font-h3-lh)] tracking-tight font-medium text-text-primary';
      case 4:
      default:
        return 'text-base font-semibold text-text-primary';
    }
  };

  return (
    <Component
      className={cn(
        getStyleClass(level),
        mono &&
          'font-mono text-[length:var(--font-mono-size)] leading-[var(--font-mono-lh)] uppercase tracking-wider',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Heading;
