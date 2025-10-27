import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Container, IconButton, Stack, Tooltip, Skeleton } from '@mui/material';
import { Telegram, ArrowForward, TrendingUp, Analytics } from '@mui/icons-material';
import ScrollSection from './ScrollSection';
import useScrollAnimation from '../hooks/useScrollAnimation';
import jungleBackground from '../assets/61d6d7e4-cc4e-4981-a344-0f50c04e51d6.jpeg';
import xIcon from '../assets/twitterx--v2-removebg-preview.png';
import pillIcon from '../assets/pill-removebg-preview.png';
import dexIcon from '../assets/dex.png';
import { useImageLoader } from '../utils/imagePreloader';

const JoinSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const imageState = useImageLoader(jungleBackground);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (imageState.isLoaded) {
      setShowImage(true);
    }
  }, [imageState.isLoaded]);

  return (
    <Box
      id="join"
      ref={ref}
      className="join"
      sx={{
        backgroundImage: `url(${jungleBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: { xs: '58% center', md: 'center' },
        backgroundRepeat: 'no-repeat',
        position: 'relative',
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
      <Container maxWidth="lg" className="join__container">
        <Box className="join__content">
          <motion.div
            className="motion-title-wrapper"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94],
              willChange: 'transform, opacity'
            }}
            style={{ willChange: 'transform, opacity' }}
          >
            <Typography
              variant="h2"
              component="h1"
              className="join__title"
            >
              The strength of the pack is the monkey,<br />
              and the strength of the monkey is the pack.
            </Typography>
          </motion.div>
          
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.1, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            style={{ willChange: 'transform, opacity' }}
          >
            <Typography
              variant="h6"
              component="p"
              className="join__subtitle"
            >
              This isn't just a project — it's a <strong>jungle uprising</strong>.
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.15, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            style={{ willChange: 'transform, opacity' }}
          >
            <Typography
              variant="h6"
              component="p"
              className="join__description"
            >
              When one ape makes noise, <strong>the whole jungle starts to groove.</strong>.
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.2, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            style={{ willChange: 'transform, opacity' }}
          >
            <Typography
              variant="h6"
              component="p"
              className="join__description"
              sx={{ marginBottom: { xs: '2rem', md: '1rem' } }}
            >
              Join the family. Spread the memes. Keep the jungle loud.
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.25, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            style={{ willChange: 'transform, opacity' }}
          >
            <Typography
              variant="h5"
              component="p"
              className="join__description"
            >
              Because we're not leaving this planet until we see the moon reflect in our sunglasses.🌕
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.3, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            style={{ willChange: 'transform, opacity' }}
          >
            <Stack 
              direction="row" 
              spacing={1.5} 
              justifyContent="center" 
              sx={{ mt: 4 }}
              flexWrap="wrap"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.35, 
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                style={{ willChange: 'transform, opacity' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                    size="medium"
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
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.4, 
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                style={{ willChange: 'transform, opacity' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                    size="medium"
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
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.45, 
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                style={{ willChange: 'transform, opacity' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                    size="medium"
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
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.5, 
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                style={{ willChange: 'transform, opacity' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                    size="medium"
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

export default JoinSection;
