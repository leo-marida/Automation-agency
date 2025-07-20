// src/components/AnimatedSection.js
'use client'; // This directive is essential for Framer Motion to work

import { motion } from 'framer-motion';

const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      // Initial state: invisible and slightly down
      initial={{ opacity: 0, y: 50 }}
      
      // Animation state: fully visible and at its original position
      whileInView={{ opacity: 1, y: 0 }}
      
      // Configuration for the animation trigger
      viewport={{ once: true, amount: 0.2 }} // Triggers once when 20% of the element is in view
      
      // Transition settings for a smooth effect
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;