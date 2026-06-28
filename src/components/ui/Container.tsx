import React from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  clean?: boolean; // If true, removes padding restraints
}

export const Container: React.FC<ContainerProps> = ({
  children,
  clean = false,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-[1280px]',
        !clean && 'px-space-4 md:px-space-8',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
