import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  const sections = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'welcome', label: 'About', href: '#welcome' },
    { id: 'story', label: 'Story', href: '#story' },
    { id: 'tokenomics', label: 'Tokenomics', href: '#tokenomics' },
    { id: 'join', label: 'Join', href: '#join' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
    setIsOpen(false);
  };

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const newIsMobile = window.innerWidth <= 768;
      setIsMobile(prevIsMobile => {
        if (prevIsMobile !== newIsMobile) {
          return newIsMobile;
        }
        return prevIsMobile;
      });
    };
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.navigation')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'welcome', 'story', 'tokenomics', 'join'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="navigation"
    >
      <div className="navigation__container">
        <motion.div 
          className="navigation__logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Golden Snub Monkey
        </motion.div>

        <div className="navigation__links navigation__links--desktop">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              className={`navigation__link ${activeSection === section.id ? 'navigation__link--active' : ''}`}
              onClick={() => scrollToSection(section.id)}
              whileHover={!isMobile ? { scale: 1.05, y: -2 } : {}}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {section.label}
            </motion.button>
          ))}
        </div>

        <motion.button
          className="navigation__mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={!isMobile ? { scale: 1.05 } : {}}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && isMobile && (
          <motion.div
            key="mobile-menu"
            className="navigation__mobile-menu"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.4, 0, 0.2, 1],
              height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.3, ease: "easeOut" },
              y: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                className={`navigation__mobile-menu-link ${activeSection === section.id ? 'navigation__mobile-menu-link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  scrollToSection(section.id);
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={!isMobile ? { x: 10 } : {}}
                whileTap={{ scale: 0.95 }}
              >
                {section.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
