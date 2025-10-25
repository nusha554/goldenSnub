import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Container, IconButton, Stack, Tooltip } from '@mui/material';
import { Telegram, ArrowForward, TrendingUp, Analytics } from '@mui/icons-material';
import ScrollSection from './ScrollSection';
import useScrollAnimation from '../hooks/useScrollAnimation';
import jungleBackground from '../assets/61d6d7e4-cc4e-4981-a344-0f50c04e51d6.jpeg';
import xIcon from '../assets/twitterx--v2-removebg-preview.png';
import pillIcon from '../assets/pill-removebg-preview.png';
import dexIcon from '../assets/dex.png';

const JoinSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url(${jungleBackground})`,
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
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '60px',
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath d='M0,100 L50,80 L100,90 L150,70 L200,85 L250,75 L300,80 L350,65 L400,75 L450,60 L500,70 L550,55 L600,65 L650,50 L700,60 L750,45 L800,55 L850,40 L900,50 L950,35 L1000,45 L1000,100 Z' fill='%23FAF6E7'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          zIndex: 3,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ py: 8, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 'bold',
                mb: 4,
                fontSize: { xs: '2.5rem', md: '4rem' },
                color: 'white !important',
                textShadow: '0 0 20px #EAB63E, 0 0 40px #EAB63E, 0 0 60px #EAB63E, 3px 3px 6px rgba(0,0,0,0.8)',
                fontFamily: '"Libertinus Serif", serif !important',
                mt: 4,
                textAlign: 'center',
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              🐒 Join the Revolution 🚀
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Typography
              variant="h6"
              component="p"
              sx={{
                mb: 3,
                mt: 4,
                fontSize: { xs: '1rem', md: '1.2rem' },
                color: 'white !important',
                textShadow: '0 0 10px #EAB63E, 0 0 20px #EAB63E, 0 0 30px #EAB63E, 2px 2px 4px rgba(0,0,0,0.7)',
              }}
            >
              This isn't just a project — it's a <strong>jungle uprising</strong>.
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Typography
              variant="h6"
              component="p"
              sx={{
                mb: 3,
                fontSize: { xs: '1rem', md: '1.2rem' },
                color: 'white !important',
                textShadow: '0 0 10px #EAB63E, 0 0 20px #EAB63E, 0 0 30px #EAB63E, 2px 2px 4px rgba(0,0,0,0.7)',
              }}
            >
              When one ape wins, <strong>we all win</strong>.
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Typography
              variant="h6"
              component="p"
              sx={{
                mb: 3,
                fontSize: { xs: '1rem', md: '1.2rem' },
                color: 'white !important',
                textShadow: '0 0 10px #EAB63E, 0 0 20px #EAB63E, 0 0 30px #EAB63E, 2px 2px 4px rgba(0,0,0,0.7)',
              }}
            >
              Join the family. Spread the memes. Hold the line.
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="h6"
              component="p"
              sx={{
                mb: 6,
                fontSize: { xs: '1rem', md: '1.2rem' },
                color: 'white !important',
                textShadow: '0 0 10px #EAB63E, 0 0 20px #EAB63E, 0 0 30px #EAB63E, 2px 2px 4px rgba(0,0,0,0.7)',
              }}
            >
              Because we're not leaving this planet until we see the moon reflect in our sunglasses. 😎🌕
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
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
                transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
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
                    size="large"
                    component="a"
                    href="https://x.com/GSnubMonkey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button social-button--x social-button--large"
                  >
                    <img src={xIcon} alt="X" className="social-button__icon" />
                    <span className="social-button__banana">🍌</span>
                  </IconButton>
                </Tooltip>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
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
                    size="large"
                    component="a"
                    href="https://t.me/GSnubMonkey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button social-button--telegram social-button--large"
                  >
                    <Telegram className="social-button__icon" />
                    <span className="social-button__banana">🍌</span>
                  </IconButton>
                </Tooltip>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 1.6, ease: "easeOut" }}
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
                    size="large"
                    component="a"
                    href="https://pump.fun/?offset=96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button social-button--pump social-button--large"
                  >
                    <img src={pillIcon} alt="Pump.fun" className="social-button__icon" />
                    <span className="social-button__banana">🍌</span>
                  </IconButton>
                </Tooltip>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 1.8, ease: "easeOut" }}
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
                    size="large"
                    component="a"
                    href="https://dexscreener.com/solana/soon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button social-button--dex social-button--large"
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

export default JoinSection;
