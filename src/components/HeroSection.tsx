import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Box, 
  Typography, 
  Button, 
  Container,
  IconButton,
  Stack,
  Tooltip,
  Skeleton
} from '@mui/material';
import { Telegram, TrendingUp, Analytics } from '@mui/icons-material';
import monkeyImage from '../assets/93506c14-c89d-4a6b-bf72-fa5ab41c40e9.jpeg';
import xIcon from '../assets/twitterx--v2-removebg-preview.png';
import pillIcon from '../assets/pill-removebg-preview.png';
import dexIcon from '../assets/dex.png';
import { useImageLoader } from '../utils/imagePreloader';

const HeroSection: React.FC = () => {
  const imageState = useImageLoader(monkeyImage);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (imageState.isLoaded) {
      setShowImage(true);
    }
  }, [imageState.isLoaded]);

  const scrollToBottom = () => {
    const joinSection = document.getElementById('join');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <Box
        id="hero"
        sx={{
          position: 'relative',
          minHeight: '100vh',
          backgroundImage: `url(${monkeyImage})`,
          backgroundSize: 'cover',
          backgroundPosition: { xs: '75% center', md: 'center' },
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
          opacity: showImage ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out',
        }}
      >
        {imageState.isLoading && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0,
              backgroundColor: '#355952',
              background: 'linear-gradient(135deg, #355952 0%, #3988A4 50%, #355952 100%)',
              opacity: showImage ? 0 : 1,
              transition: 'opacity 0.8s ease-in-out',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                width: '60px',
                height: '60px',
                border: '3px solid rgba(234, 182, 62, 0.3)',
                borderTop: '3px solid #EAB63E',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                '@keyframes spin': {
                  '0%': { transform: 'rotate(0deg)' },
                  '100%': { transform: 'rotate(360deg)' },
                },
              }}
            />
          </Box>
        )}
        
        {imageState.hasError && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0,
              backgroundColor: '#355952',
              background: 'linear-gradient(135deg, #355952 0%, #3988A4 100%)',
            }}
          />
        )}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              color: '#3988A4',
              py: { xs: 6, md: 8 },
              maxWidth: { xs: '100%', md: '600px' },
              px: { xs: 2, md: 0 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: { xs: 'space-between', md: 'flex-start' },
              minHeight: { xs: 'calc(100vh - 80px)', md: 'auto' },
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
                  mb: { xs: 3, md: 4 },
                  mt: { xs: 4, md: 0 },
                  textShadow: `
                    0 0 10px rgba(234, 182, 62, 0.8),
                    0 0 20px rgba(234, 182, 62, 0.6),
                    0 0 30px rgba(234, 182, 62, 0.4),
                    0 0 40px rgba(234, 182, 62, 0.2),
                    2px 2px 4px rgba(0,0,0,0.5)
                  `,
                  fontSize: { xs: '3.5rem', md: '4.5rem' },
                  color: '#355952 !important',
                  fontFamily: '"Libertinus Serif", serif !important',
                  filter: 'drop-shadow(0 0 8px rgba(234, 182, 62, 0.5))',
                  animation: 'glow 2s ease-in-out infinite alternate',
                  '@keyframes glow': {
                    '0%': {
                      textShadow: `
                        0 0 10px rgba(234, 182, 62, 0.8),
                        0 0 20px rgba(234, 182, 62, 0.6),
                        0 0 30px rgba(234, 182, 62, 0.4),
                        0 0 40px rgba(234, 182, 62, 0.2),
                        2px 2px 4px rgba(0,0,0,0.5)
                      `,
                    },
                    '100%': {
                      textShadow: `
                        0 0 15px rgba(234, 182, 62, 1),
                        0 0 25px rgba(234, 182, 62, 0.8),
                        0 0 35px rgba(234, 182, 62, 0.6),
                        0 0 45px rgba(234, 182, 62, 0.4),
                        2px 2px 4px rgba(0,0,0,0.5)
                      `,
                    },
                  },
                }}
              >
                Welcome to the Jungle.
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
                  mt: { xs: 0, md: 0 },
                  mb: { xs: 9, md: 4 },
                  color: '#EAB63E !important',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  fontSize: { xs: '1.4em', md: '2.2rem' },
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
                  mt: { xs: 8, md: 0 },
                  mb: { xs: 4, md: 6 },
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                  color: '#355952 !important',
                  display: { xs: 'block', md: 'inline' },
                }}
              >
                <Box component="span" sx={{ 
                  display: { xs: 'block', md: 'inline' },
                  WebkitTextStroke: '0.3px rgba(250, 246, 231, 0.3)',
                  textStroke: '0.3px rgba(250, 246, 231, 0.3)',
                }}>
                  Built for the long run.
                </Box>
                <Box component="span" sx={{ 
                  display: { xs: 'block', md: 'inline' },
                  WebkitTextStroke: '0.3px rgba(250, 246, 231, 0.3)',
                  textStroke: '0.3px rgba(250, 246, 231, 0.3)',
                }}>
                  Powered by purpose.
                </Box>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              style={{ marginTop: '2rem' }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={scrollToBottom}
                sx={{
                  backgroundColor: '#EAB63E',
                  color: '#E37769',
                  fontWeight: '900',
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.2, md: 1.5 },
                  fontSize: { xs: '1rem', md: '1.2rem' },
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
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{ mt: { xs: 8, md: 10 } }}
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
                        href="https://t.me/GSnubMonkeyChat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-button social-button--telegram"
                      >
                        <Telegram className="social-button__icon" />
                        <span className="social-button__banana">🍌</span>
                      </IconButton>
                    </Tooltip>
                  </motion.div>
                  
                  {/* <motion.div
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
                  </motion.div> */}
                  
                  {/* <motion.div
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
                  </motion.div> */}
              </Stack>
            </motion.div>
          </Box>
       
      </Container>
    </Box>
  );
};

export default HeroSection;
