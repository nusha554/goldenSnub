import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from './ScrollSection';
import unleashImage from '../assets/96c4472c-72f0-405c-91c9-190b34592e2c.jpeg';

const WelcomeSection: React.FC = () => {
  return (
    <ScrollSection className="welcome" id="welcome">
      <div className="welcome__container">
        <div className="welcome__content">
          <motion.div 
            className="welcome__image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, amount: 0.1 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <img 
              src={unleashImage} 
              alt="Golden Snub Monkey with Bitcoin"
              className="welcome__image"
            />
          </motion.div>
          
          <motion.h1 
            className="welcome__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, amount: 0.1 }}
            style={{ willChange: 'transform, opacity' }}
          >
            Unleash Your Inner Ape.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, amount: 0.1 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <p className="welcome__subtitle">
              The Golden Snub Monkey isn't just a coin — it's a long-term movement built on honesty, transparency, and trust. 🌕
            </p>
            
            <p className="welcome__text">
              We believe the future of finance belongs to communities that create, share, and grow together — not to empty promises.
            </p>
            
            <p className="welcome__text">
              Our jungle runs on truth, creativity, and connection. Every holder matters, every voice counts, and every banana builds the future. 🍌
            </p>
            
            <p className="welcome__text">
              This is more than a moment — it's evolution.
            </p>
            
            <p className="welcome__text welcome__text--highlight">
              The jungle's awake. The mission's golden.
              <br />
              <span style={{ display: 'block', textAlign: 'center' }}>Are you climbing with us? 🐒💛</span>
            </p>
          </motion.div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default WelcomeSection;
