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
      <div className="section-content" {...props}>
        {children}
      </div>
    </section>
  );
};

export default ScrollSection;
