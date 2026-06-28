import { Transition } from 'framer-motion';

/**
 * Premium Spring Physics configurations based on our Design System tokens.
 */
export const springPresets = {
  // Snappy spring with no bounce, used for card hovers and micro-interactions
  cardHover: {
    type: 'spring',
    mass: 1,
    tension: 350,
    friction: 25,
  } as Transition,

  // Smooth decelerating spring for menus and sliding panels
  drawerSlide: {
    type: 'spring',
    mass: 1,
    tension: 280,
    friction: 30,
  } as Transition,

  // Soft, organic spring for scroll reveals
  scrollReveal: {
    type: 'spring',
    mass: 1,
    tension: 220,
    friction: 28,
  } as Transition,

  // Micro-interactive click/tap scale spring
  tapScale: {
    type: 'spring',
    mass: 0.8,
    tension: 400,
    friction: 18,
  } as Transition,
};

/**
 * Standard transition curve definitions
 */
export const transitionPresets = {
  fast: {
    duration: 0.15,
    ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier
  },
  slow: {
    duration: 0.3,
    ease: [0.16, 1, 0.3, 1],
  },
};
