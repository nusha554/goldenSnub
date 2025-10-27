import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from './ScrollSection';
import image1 from '../assets/844befa9-dce9-44b1-bae5-9b5cfed25873.jpeg';
import image2 from '../assets/5d2ec656-ea02-4230-8759-9b19b7cfe487.jpeg';
import image3 from '../assets/1456a6e2-b93c-437d-8449-f6baa2240a6a.jpeg';

const StorySection: React.FC = () => {
  const cards = [
    {
      title: "Built on Truth, Grown with Purpose.",
      text: "The Golden Snub Monkey began with a simple belief — honesty lasts longer than hype.\nOur foundation is transparency, trust, and the drive to create something that truly endures. 🌕",
      bgColor: "#355952",
      image: image1
    },
    {
      title: "Where Creativity Meets Courage.", 
      text: "We're not here to follow — we're here to imagine, build, and evolve.\nEvery idea in the jungle starts as a spark, and together we turn it into something extraordinary. 💛🌿",
      bgColor: "#EAB63E",
      image: image2
    },
    {
      title: "A Tribe That Moves as One.",
      text: "This isn’t a crowd chasing trends — it’s a tribe building something real.\nFree thinkers, dreamers, and builders connected by energy, integrity, and long-term vision. 🐒✨",
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
            transition={{ 
              duration: 0.5, 
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, amount: 0.1 }}
            style={{ willChange: 'transform, opacity' }}
          >
            From the Jungle, We Rise.
          </motion.h1>
          
          <motion.p 
            className="story__subtitle"
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
            Explore the values, creativity, and purpose that define our journey
          </motion.p>

          <div className="story__cards">
            {cards.map((card, index) => (
              <motion.div 
                key={index} 
                className="story__card" 
                style={{ backgroundColor: card.bgColor, willChange: 'transform, opacity' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
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
