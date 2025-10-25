import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from './ScrollSection';
import { TokenomicsItem } from '../types';
import parachuteImage from '../assets/629a76c0-842c-456a-8863-fa858e62363f.jpeg';
import liquidityImage from '../assets/c35dc535-6bfb-4044-a28f-5329a62c4f46.jpeg';
import founderLockImage from '../assets/ed4c87ef-9e37-4e57-a913-0b36903c6a1b.jpeg';
import marketingImage from '../assets/cd8f6ced-ea25-4c84-9ec2-244850b8bfc5.jpeg';

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
    <ScrollSection className="tokenomics" id="tokenomics">
      <motion.div 
        className="tokenomics__lock-icon tokenomics__lock-icon--overlay"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.1,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        viewport={{ once: true, amount: 0.1 }}
        style={{ willChange: 'transform, opacity' }}
      >
        🔒
      </motion.div>
      
      <div className="tokenomics__container">
        <div className="tokenomics__content tokenomics__content--blurred">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, amount: 0.1 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <h1 className="tokenomics__title">
              💰 Tokenomics That Slap
            </h1>
            
            <p className="tokenomics__subtitle">
              Total Supply: <strong>1,000,000,000 $MONKY</strong>
            </p>
            
            <p className="tokenomics__subtitle">
              Here's how the jungle splits the loot:
            </p>
          </motion.div>
          
          <div className="tokenomics__grid">
            {tokenomicsData.map((item, index) => (
              <motion.div
                key={index}
                className="tokenomics__item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.3 + index * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{ willChange: 'transform, opacity' }}
              >
                {item.description.includes('Airdrops & Community') ? (
                  <img 
                    src={parachuteImage} 
                    alt="Parachute Monkey"
                    className="tokenomics__item-image"
                  />
                ) : item.description.includes('Liquidity Pool') ? (
                  <img 
                    src={liquidityImage} 
                    alt="Liquidity Pool"
                    className="tokenomics__item-image"
                  />
                ) : item.description.includes('Founder Lock') ? (
                  <img 
                    src={founderLockImage} 
                    alt="Founder Lock"
                    className="tokenomics__item-image"
                  />
                ) : item.description.includes('Marketing & Hype') ? (
                  <img 
                    src={marketingImage} 
                    alt="Marketing & Hype"
                    className="tokenomics__item-image"
                  />
                ) : (
                  <span className="tokenomics__item-icon">{item.icon}</span>
                )}
                <span className="tokenomics__item-percentage">{item.percentage}</span>
                <span className="tokenomics__item-description">{item.description}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            className="tokenomics__footer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, amount: 0.1 }}
            style={{ willChange: 'transform, opacity' }}
          >
            Zero fluff. Zero rug. 100% monkey business. 🐒💸
          </motion.p>
        </div>
      </div>
    </ScrollSection>
  );
};

export default TokenomicsSection;
