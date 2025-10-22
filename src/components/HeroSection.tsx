import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import monkeyImage from '../assets/93506c14-c89d-4a6b-bf72-fa5ab41c40e9.jpeg';

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section className="hero-section">
      <div className="particles-background">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      <motion.div 
        className="hero-content"
        style={{ y, opacity }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src={monkeyImage} 
            alt="Golden Snub Monkey" 
            className="hero-monkey-image"
          />
          <motion.div 
            className="moon-reflection"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
        </motion.div>
        
        
        <motion.h1 
          className="gsm-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Golden Snub Monkey
        </motion.h1>
        
        <motion.p 
          className="gsm-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          The Golden Revolution Begins
        </motion.p>
        
        <motion.p 
          className="gsm-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Limited Supply, Infinite Potential
        </motion.p>
        
        <CountdownTimer />
        
        <motion.div 
          className="cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <motion.button 
            className="primary-cta"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(229, 192, 103, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Golden Revolution
          </motion.button>
          <motion.button 
            className="secondary-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
