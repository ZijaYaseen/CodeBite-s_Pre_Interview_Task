// utils/animationVariants.ts
import { Variants} from 'framer-motion';

// fade-in-up variant 
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


