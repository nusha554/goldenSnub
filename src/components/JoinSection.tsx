import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from './ScrollSection';

const JoinSection: React.FC = () => {
  return (
    <ScrollSection className="join-section">
      <h2>🤝 Join the Monkey Army</h2>
      <p>This isn't just a project — it's a <strong>jungle uprising</strong>.</p>
      <p>When one ape wins, <strong>we all win</strong>.</p>
      <p>Join the family. Spread the memes. Hold the line.</p>
      <p>Because we're not leaving this planet until we see the moon reflect in our sunglasses. 😎🌕</p>
      
      <div className="social-links">
        <motion.a 
          href="https://t.me/GSnubMonkey"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          👉 Join Telegram
        </motion.a>
        <motion.a 
          href="https://x.com/GSnub45104"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          👉 Follow on X
        </motion.a>
      </div>
    </ScrollSection>
  );
};

export default JoinSection;
