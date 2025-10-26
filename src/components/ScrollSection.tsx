import React from 'react';
import { motion } from 'framer-motion';
import { ScrollSectionProps } from '../types';

const ScrollSection: React.FC<ScrollSectionProps> = ({ 
  children, 
  className, 
  id,
  ...props 
}) => {
  return (
    <section className={className} id={id}>
      <div className="section-content" {...props}>
        {children}
      </div>
    </section>
  );
};

export default ScrollSection;
