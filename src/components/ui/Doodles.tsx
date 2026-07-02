import React from 'react';
import { motion } from 'framer-motion';

interface DoodleProps {
  className?: string;
  color?: string;
  delay?: number;
}

export const UnderlineDoodle: React.FC<DoodleProps> = ({
  className = '',
  color = 'currentColor',
  delay = 0.5,
}) => {
  return (
    <svg
      viewBox="0 0 300 20"
      fill="none"
      preserveAspectRatio="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M5 12C50 15 100 13 150 11C200 9 250 8 295 10"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      />
      <motion.path
        d="M15 16C80 18 160 15 240 13C260 12.5 280 12 288 12.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, delay: delay + 0.2, ease: 'easeOut' }}
      />
    </svg>
  );
};

export const ArrowDoodle: React.FC<DoodleProps & { rotation?: number }> = ({
  className = '',
  color = 'currentColor',
  delay = 0.6,
  rotation = 0,
}) => {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Curved body of the arrow */}
      <motion.path
        d="M10 15C30 8 60 12 75 35C85 50 80 65 65 72"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay, ease: 'easeInOut' }}
      />
      {/* Arrow head tip 1 */}
      <motion.path
        d="M52 64C56 67 61 70 65 72"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.7, ease: 'easeOut' }}
      />
      {/* Arrow head tip 2 */}
      <motion.path
        d="M68 53C67.5 59 66.5 66 65 72"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.7, ease: 'easeOut' }}
      />
    </svg>
  );
};

export const StarDoodle: React.FC<DoodleProps> = ({
  className = '',
  color = 'currentColor',
  delay = 0.7,
}) => {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M20 3L24.5 14H36L27 21L30.5 32L20 25L9.5 32L13 21L4 14H15.5L20 3Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay, ease: 'easeInOut' }}
      />
    </svg>
  );
};

export const CircleDoodle: React.FC<DoodleProps> = ({
  className = '',
  color = 'currentColor',
  delay = 0.5,
}) => {
  return (
    <svg
      viewBox="0 0 120 50"
      fill="none"
      preserveAspectRatio="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M110 20C110 32 80 43 50 43C20 43 7 35 7 24C7 13 24 5 57 5C90 5 113 11 106 23C103 28 92 34 78 37"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.1, delay, ease: 'easeInOut' }}
      />
    </svg>
  );
};

export const SparkleDoodle: React.FC<DoodleProps> = ({
  className = '',
  color = 'currentColor',
  delay = 0.8,
}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M12 2C12 2 12.5 8.5 14 10C15.5 11.5 22 12 22 12C22 12 15.5 12.5 14 14C12.5 15.5 12 22 12 22C12 22 11.5 15.5 10 14C8.5 12.5 2 12 2 12C2 12 8.5 11.5 10 10C11.5 8.5 12 2 12 2Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      />
    </svg>
  );
};

export const CurlDoodle: React.FC<DoodleProps> = ({
  className = '',
  color = 'currentColor',
  delay = 0.5,
}) => {
  return (
    <svg viewBox="0 0 60 50" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M5 25C15 10 35 8 45 18C52 25 50 35 40 40C30 45 18 35 25 22C30 12 45 10 55 15"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, delay, ease: 'easeInOut' }}
      />
    </svg>
  );
};
