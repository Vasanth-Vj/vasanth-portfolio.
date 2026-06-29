import React from 'react';

export const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-space-4 focus:py-space-2 focus:bg-accent-primary focus:text-text-primary focus:outline-none focus:ring-4 focus:ring-accent-primary/20 rounded-[length:var(--radius-md)] font-semibold text-sm transition-all"
    >
      Skip to content
    </a>
  );
};

export default SkipToContent;
