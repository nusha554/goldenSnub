import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from './ScrollSection';
import image1 from '../assets/844befa9-dce9-44b1-bae5-9b5cfed25873.jpeg';
import image2 from '../assets/5d2ec656-ea02-4230-8759-9b19b7cfe487.jpeg';
import image3 from '../assets/1456a6e2-b93c-437d-8449-f6baa2240a6a.jpeg';

const StorySection: React.FC = () => {
  const cards = [
    {
      title: "🪙 Real Community, Real Transparency",
      text: "Every transaction is public, every wallet is trackable.\nNo secret wallets, no hidden rugs — just pure on-chain honesty.\nG-Snub Monkey is built by the community, for the community.",
      bgColor: "#355952",
      image: image1
    },
    {
      title: "🔒 Locked Liquidity, Open Intentions", 
      text: "We've locked liquidity and verified our contract — no vanishing acts here.\nOur mission isn't a quick pump; it's a movement for the long run.\nBecause trust is the rarest coin of all. 💎",
      bgColor: "#EAB63E",
      image: image2
    },
    {
      title: "🧠 Meme With Meaning",
      text: "We're not here to scam — we're here to build something fun and real.\nBehind the memes are developers, artists, and holders who actually care.\nG-Snub Monkey stands for humor, honesty, and the moon. 🌕",
      bgColor: "#E37769",
      image: image3
    }
  ];

  return (
    <ScrollSection className="story" id="story">
      <div className="story__container">
        <div className="story__content">
          <motion.h1 
            className="story__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            ✨ Why G-Snub Monkey Is Different
          </motion.h1>
          
          <motion.p 
            className="story__subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            The jungle is wild — but we're not the scammers hiding in the trees.<br/>
            Here's why you can trust our golden tribe
          </motion.p>

          <div className="story__cards">
            {cards.map((card, index) => (
              <motion.div 
                key={index} 
                className="story__card" 
                style={{ backgroundColor: card.bgColor }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="story__card-image">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="story__card-img"
                  />
                </div>
                
                <h3 className="story__card-title">
                  {card.title}
                </h3>
                
                <p className="story__card-text">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default StorySection;
