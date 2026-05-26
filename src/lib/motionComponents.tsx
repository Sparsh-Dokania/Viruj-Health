import React from 'react';
import { motion, MotionProps, Variants } from 'motion/react';

// Page Fade Transition
interface FadePageProps extends MotionProps {
  children: React.ReactNode;
}

export const FadePage: React.FC<FadePageProps> = ({ children, ...props }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
    {...props}
  >
    {children}
  </motion.div>
);

// Stagger Container
interface StaggerContainerProps extends MotionProps {
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  stagger = 0.1,
  delay = 0,
  ...props
}) => {
  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Stagger Item
interface StaggerItemProps extends MotionProps {
  children: React.ReactNode;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({ children, ...props }) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <motion.div variants={variants} {...props}>
      {children}
    </motion.div>
  );
};

// Scroll Reveal
interface ScrollRevealProps extends MotionProps {
  children: React.ReactNode;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  threshold = 0.3,
  ...props
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true, margin: `-${(1 - threshold) * 100}px` }}
    {...props}
  >
    {children}
  </motion.div>
);

// Hover Card
interface HoverCardProps extends MotionProps {
  children: React.ReactNode;
}

export const HoverCard: React.FC<HoverCardProps> = ({ children, ...props }) => (
  <motion.div
    whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)' }}
    whileTap={{ y: 0 }}
    transition={{ duration: 0.2 }}
    {...props}
  >
    {children}
  </motion.div>
);

// Fade In with Scale
interface FadeScaleProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
}

export const FadeScale: React.FC<FadeScaleProps> = ({
  children,
  delay = 0,
  ...props
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, ease: 'easeOut', delay }}
    {...props}
  >
    {children}
  </motion.div>
);

// Slide In from Left
interface SlideInProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
}

export const SlideInLeft: React.FC<SlideInProps> = ({
  children,
  delay = 0,
  ...props
}) => (
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, ease: 'easeOut', delay }}
    {...props}
  >
    {children}
  </motion.div>
);

// Slide In from Right
export const SlideInRight: React.FC<SlideInProps> = ({
  children,
  delay = 0,
  ...props
}) => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, ease: 'easeOut', delay }}
    {...props}
  >
    {children}
  </motion.div>
);
