import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from './ScrollSection';
import { TokenomicsItem } from '../types';

const TokenomicsSection: React.FC = () => {
  const tokenomicsData: TokenomicsItem[] = [
    {
      icon: "🪂",
      percentage: "20%",
      description: "Airdrops & Community (we reward the true believers)"
    },
    {
      icon: "💦",
      percentage: "10%",
      description: "Liquidity Pool (because smooth trades = happy apes)"
    },
    {
      icon: "🔒",
      percentage: "5%",
      description: "Founder Lock (we're in this long-term, baby)"
    },
    {
      icon: "🚀",
      percentage: "5%",
      description: "Marketing & Hype (memes don't make themselves)"
    }
  ];

  return (
    <ScrollSection className="tokenomics-section">
      <h2>💰 Tokenomics That Slap</h2>
      <p>Total Supply: <strong>1,000,000,000 $MONKY</strong></p>
      <p>Here's how the jungle splits the loot:</p>
      
      <div className="tokenomics-grid">
        {tokenomicsData.map((item, index) => (
          <motion.div
            key={index}
            className="tokenomics-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="tokenomics-icon">{item.icon}</span>
            <span className="tokenomics-percentage">{item.percentage}</span>
            <span className="tokenomics-description">{item.description}</span>
          </motion.div>
        ))}
      </div>
      
      <p>Zero fluff. Zero rug. 100% monkey business. 🐒💸</p>
    </ScrollSection>
  );
};

export default TokenomicsSection;
