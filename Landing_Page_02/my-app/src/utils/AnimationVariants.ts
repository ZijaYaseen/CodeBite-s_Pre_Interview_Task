// utils/animationVariants.ts
import { Variants, MotionProps } from 'framer-motion';

// fade-in-up variant 
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// transition
export const defaultTransition: MotionProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { amount: 0.2, once: false },
  transition: { duration: 0.6, ease: 'easeOut' },
};

// Hover effect settings
export const hoverEffect: MotionProps = {
  whileHover: { scale: 1.05, y: -5 },
};