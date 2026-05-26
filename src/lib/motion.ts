/**
 * Motion Presets & Animation Configurations
 * Reusable Framer Motion animation configurations for Viruj Health
 */

export const motionConfig = {
  // Transitions
  transitions: {
    fast: { duration: 0.15, ease: 'easeInOut' },
    base: { duration: 0.2, ease: 'easeInOut' },
    slow: { duration: 0.3, ease: 'easeInOut' },
    smooth: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] },
  },

  // Page Transitions
  pageTransition: {
    type: 'tween',
    duration: 0.3,
    ease: 'easeInOut',
  },

  // Entrance Animations
  entranceVariants: {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slideInRight: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 100 },
    },
    slideInLeft: {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
    },
    slideInTop: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -50 },
    },
    slideInBottom: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 },
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
    },
  },

  // Stagger Animations
  containerVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },

  itemVariants: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  },

  // Hover Effects
  hoverScale: {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  },

  hoverLift: {
    whileHover: { y: -4 },
    whileTap: { y: 0 },
    transition: { duration: 0.2 },
  },

  // Loading Animation
  loadingPulse: {
    animate: {
      opacity: [1, 0.7, 1],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },

  // Scroll Animations
  scrollReveal: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
    viewport: { once: true, margin: '-100px' },
  },
};

export const easings = {
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
  smooth: [0.43, 0.13, 0.23, 0.96],
  bouncy: [0.68, -0.55, 0.265, 1.55],
  gentle: [0.25, 0.46, 0.45, 0.94],
};
