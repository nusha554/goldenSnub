import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const FooterSection: React.FC = () => {
  return (
    <Box component="footer" className="footer-section">
      <Container maxWidth="lg" className="footer-section__container">
        <Box className="footer-section__content">
          <Typography
            variant="h6"
            component="h2"
            className="footer-section__title"
          >
            🐒 Golden Snub Monkey © 2025
          </Typography>
          
          <Typography
            variant="body2"
            className="footer-section__contact"
          >
            🍌 Monkey business inquiries: snubgolden@gmail.com
          </Typography>
          
          <Typography
            variant="body2"
            className="footer-section__copyright"
          >
            © 2025 $GSnub — All rights reserved.
          </Typography>
          
          <Typography
            variant="body2"
            className="footer-section__disclaimer"
            sx={{ marginTop: '1rem !important' }}
          >
            The Golden Snub Monkey is a creative, meme-powered community. Nothing here is financial advice or a promise of profits — just monkeys having fun building cool things together. Always do your own research before going bananas with crypto. 🐒🍌
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterSection;
