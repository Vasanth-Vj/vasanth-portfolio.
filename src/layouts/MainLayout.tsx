import React from 'react';
import { SkipToContent } from '../components/shared/SkipToContent';
import { ScrollProgress } from '../components/shared/ScrollProgress';
import { Header } from '../components/shared/Header';
import { Footer } from '../components/shared/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary overflow-x-hidden selection:bg-accent-primary selection:text-bg-primary">
      {/* Accessibility Link */}
      <SkipToContent />

      {/* Reading Progress Indicator */}
      <ScrollProgress />

      {/* Main Navigation Header */}
      <Header />

      {/* Core Page Contents */}
      <main id="main-content" className="flex-grow flex flex-col pt-[80px] outline-none">
        {children}
      </main>

      {/* Shared Footer block */}
      <Footer />
    </div>
  );
};

export default MainLayout;
