import React, { useEffect } from 'react';
import {
  HeroSection,
  WelcomeSection,
  StorySection,
  TokenomicsSection,
  JoinSection,
  FooterSection
} from './components';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import { preloadImages, preloadCriticalImages } from './utils/imagePreloader';
import './styles/main.scss';

import monkeyImage from './assets/93506c14-c89d-4a6b-bf72-fa5ab41c40e9.jpeg';
import jungleBackground from './assets/61d6d7e4-cc4e-4981-a344-0f50c04e51d6.jpeg';
import welcomeBg1 from './assets/1456a6e2-b93c-437d-8449-f6baa2240a6a.jpeg';
import welcomeBg2 from './assets/5d2ec656-ea02-4230-8759-9b19b7cfe487.jpeg';
import storyBg1 from './assets/629a76c0-842c-456a-8863-fa858e62363f.jpeg';
import storyBg2 from './assets/844befa9-dce9-44b1-bae5-9b5cfed25873.jpeg';
import tokenomicsBg1 from './assets/96c4472c-72f0-405c-91c9-190b34592e2c.jpeg';
import tokenomicsBg2 from './assets/c35dc535-6bfb-4044-a28f-5329a62c4f46.jpeg';
import tokenomicsBg3 from './assets/cd8f6ced-ea25-4c84-9ec2-244850b8bfc5.jpeg';
import tokenomicsBg4 from './assets/ed4c87ef-9e37-4e57-a913-0b36903c6a1b.jpeg';

const App: React.FC = () => {
  useEffect(() => {
    const criticalImages = [monkeyImage, jungleBackground];
    const allImages = [
      monkeyImage, 
      jungleBackground,
      welcomeBg1, 
      welcomeBg2,
      storyBg1, 
      storyBg2,
      tokenomicsBg1, 
      tokenomicsBg2, 
      tokenomicsBg3, 
      tokenomicsBg4
    ];
    
    preloadCriticalImages(criticalImages);
    
    preloadImages(allImages);
  }, []);

  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="welcome">
        <WelcomeSection />
      </section>
      <section id="story">
        <StorySection />
      </section>
      <section id="tokenomics">
        <TokenomicsSection />
      </section>
      <section id="join">
        <JoinSection />
      </section>
      <FooterSection />
      <ScrollToTop />
    </div>
  );
};

export default App;
