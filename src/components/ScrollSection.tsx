import React from 'react';
import { motion } from 'framer-motion';
import { ScrollSectionProps } from '../types';

const ScrollSection: React.FC<ScrollSectionProps> = ({ 
  children, 
  className, 
  ...props 
}) => {
  return (
    <section className={className}>
      <motion.div 
        className="section-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        {...props}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default ScrollSection;
