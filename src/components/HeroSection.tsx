import React from 'react';
import { motion } from 'framer-motion';
import { 
  Box, 
  Typography, 
  Button, 
  Container,
  IconButton,
  Stack,
  Tooltip
} from '@mui/material';
import { Telegram, TrendingUp, Analytics } from '@mui/icons-material';
import monkeyImage from '../assets/93506c14-c89d-4a6b-bf72-fa5ab41c40e9.jpeg';
import xIcon from '../assets/twitterx--v2-removebg-preview.png';
import pillIcon from '../assets/pill-removebg-preview.png';
import dexIcon from '../assets/dex.png';

const HeroSection: React.FC = () => {
  const scrollToBottom = () => {
    const joinSection = document.getElementById('join');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          backgroundImage: `url(${monkeyImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1,
          },
        }}
      >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            sx={{
              textAlign: 'left',
              color: '#3988A4',
              py: 8,
              maxWidth: '600px',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  textShadow: `
                    0 0 10px rgba(234, 182, 62, 0.6),
                    0 0 20px rgba(234, 182, 62, 0.5),
                    0 0 30px rgba(234, 182, 62, 0.4),
                    2px 2px 4px rgba(0,0,0,0.5)
                  `,
                  fontSize: { xs: '2rem', md: '3.5rem' },
                  color: '#355952 !important',
                  fontFamily: '"Libertinus Serif", serif !important',
                  filter: 'drop-shadow(0 0 4px rgba(234, 182, 62, 0.3))',
                }}
              >
                Where creativity knows no bounds.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  color: '#EAB63E !important',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  fontSize: { xs: '1.5rem', md: '2.5rem' },
                  fontFamily: '"Libertinus Serif", serif !important',
                }}
              >
                The Golden Revolution Begins
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Typography
                variant="h5"
                component="p"
                sx={{
                  mb: 4,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  color: '#355952 !important',
                }}
              >
                Limited Supply, Infinite Potential
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={scrollToBottom}
                sx={{
                  backgroundColor: '#EAB63E',
                  color: '#E37769',
                  fontWeight: '900',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.2rem',
                  borderRadius: '25px',
                  textTransform: 'none',
                  fontFamily: '"Libertinus Serif", serif !important',
                  boxShadow: '0 4px 15px rgba(234, 182, 62, 0.4)',
                  '&:hover': {
                    backgroundColor: '#E37769',
                    color: '#EAB63E',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(227, 119, 105, 0.6)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Join the Banana's Order
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <Stack 
                direction="row" 
                spacing={1.5} 
                justifyContent="flex-start" 
                sx={{ mt: 4 }}
                flexWrap="wrap"
              >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
                  >
                    <Tooltip 
                      title="X" 
                      placement="bottom"
                      arrow
                      enterDelay={300}
                      leaveDelay={200}
                      componentsProps={{
                        tooltip: {
                          sx: {
                            backgroundColor: '#FAF6E7',
                            color: '#355952',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            '& .MuiTooltip-arrow': {
                              color: '#FAF6E7',
                            },
                          },
                        },
                      }}
                    >
                      <IconButton
                        size="large"
                        component="a"
                        href="https://x.com/GSnubMonkey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-button social-button--x"
                      >
                        <img src={xIcon} alt="X" className="social-button__icon" />
                        <span className="social-button__banana">🍌</span>
                      </IconButton>
                    </Tooltip>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                  >
                    <Tooltip 
                      title="Telegram" 
                      placement="bottom"
                      arrow
                      enterDelay={300}
                      leaveDelay={200}
                      componentsProps={{
                        tooltip: {
                          sx: {
                            backgroundColor: '#FAF6E7',
                            color: '#355952',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            '& .MuiTooltip-arrow': {
                              color: '#FAF6E7',
                            },
                          },
                        },
                      }}
                    >
                      <IconButton
                        size="large"
                        component="a"
                        href="https://t.me/GSnubMonkey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-button social-button--telegram"
                      >
                        <Telegram className="social-button__icon" />
                        <span className="social-button__banana">🍌</span>
                      </IconButton>
                    </Tooltip>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
                  >
                    <Tooltip 
                      title="Pump.fun" 
                      placement="bottom"
                      arrow
                      enterDelay={300}
                      leaveDelay={200}
                      componentsProps={{
                        tooltip: {
                          sx: {
                            backgroundColor: '#FAF6E7',
                            color: '#355952',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            '& .MuiTooltip-arrow': {
                              color: '#FAF6E7',
                            },
                          },
                        },
                      }}
                    >
                      <IconButton
                        size="large"
                        component="a"
                        href="https://pump.fun/?offset=96"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-button social-button--pump"
                      >
                        <img src={pillIcon} alt="Pump.fun" className="social-button__icon" />
                        <span className="social-button__banana">🍌</span>
                      </IconButton>
                    </Tooltip>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.6, ease: "easeOut" }}
                  >
                    <Tooltip 
                      title="DexScreener" 
                      placement="bottom"
                      arrow
                      enterDelay={300}
                      leaveDelay={200}
                      componentsProps={{
                        tooltip: {
                          sx: {
                            backgroundColor: '#FAF6E7',
                            color: '#355952',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            '& .MuiTooltip-arrow': {
                              color: '#FAF6E7',
                            },
                          },
                        },
                      }}
                    >
                      <IconButton
                        size="large"
                        component="a"
                        href="https://dexscreener.com/solana/soon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-button social-button--dex"
                      >
                        <img src={dexIcon} alt="DexScreener" className="social-button__icon" />
                        <span className="social-button__banana">🍌</span>
                      </IconButton>
                    </Tooltip>
                  </motion.div>
              </Stack>
            </motion.div>
          </Box>
       
      </Container>
    </Box>
  );
};

export default HeroSection;
