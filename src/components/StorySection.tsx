import React from 'react';
import ScrollSection from './ScrollSection';

const StorySection: React.FC = () => {
  return (
    <ScrollSection className="story-section">
      <h2>🌕 The Story</h2>
      <p>One monkey looked at the moon and said:</p>
      <blockquote>"Why not us?"</blockquote>
      <p>And boom — <strong>MonkeyMoon</strong> was born.</p>
      <p>Fueled by chaos, memes, and pure community energy, we're turning internet jokes into generational wealth.</p>
      <p>No suits, no gatekeepers — just vibes, bananas, and blockchain. 🍌✨</p>
    </ScrollSection>
  );
};

export default StorySection;
