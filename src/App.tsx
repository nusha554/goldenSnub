import React from 'react';
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
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
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
