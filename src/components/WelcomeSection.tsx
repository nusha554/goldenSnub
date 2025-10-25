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
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
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
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Unleash Your Inner Ape.
          </motion.h1>
          
          <motion.p 
            className="welcome__subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            The coin that laughs at gravity — and aims straight for the freakin' moon.
          </motion.p>
          
          <motion.p 
            className="welcome__text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            We're not just another meme coin — we're a <strong>movement of degenerates, dreamers, and diamond hands</strong> who believe fun <em>is</em> the future of finance.
          </motion.p>
          
          <motion.p 
            className="welcome__text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            The countdown's ticking. The rocket's loaded. The jungle's getting louder.
          </motion.p>
          
          <motion.p 
            className="welcome__text welcome__text--highlight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Are you in or still watching from Earth? 🌍🔥
          </motion.p>
        </div>
      </div>
    </ScrollSection>
  );
};

export default WelcomeSection;
