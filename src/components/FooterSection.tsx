import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const FooterSection: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 'auto',
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h6"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: '#EAB63E !important',
              fontFamily: '"Libertinus Serif", serif !important',
            }}
          >
            🐒 Golden Snub Monkey © 2025
          </Typography>
          
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.8rem', md: '0.9rem' },
              color: '#355952 !important',
              mb: 1,
            }}
          >
Born in the jungle with vision, courage, and golden energy. Not following a map — creating a new path. The jungle's next stop: the moon. 🚀        
  </Typography>
          
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.75rem', md: '0.8rem' },
              color: '#355952 !important',
              fontWeight: 500,
            }}
          >
            ©2025 $GSnub. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterSection;
