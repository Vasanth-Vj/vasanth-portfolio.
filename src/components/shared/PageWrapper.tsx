import React from 'react';
import { motion } from 'framer-motion';
import { springPresets } from '../../animations/springPresets';

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={springPresets.scrollReveal}
      className="w-full flex-grow flex flex-col"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
