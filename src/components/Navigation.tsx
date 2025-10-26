import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  // Static mobile detection - never changes during component lifecycle
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const sections = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'welcome', label: 'About', href: '#welcome' },
    { id: 'story', label: 'Story', href: '#story' },
    { id: 'tokenomics', label: 'Tokenomics', href: '#tokenomics' },
    { id: 'join', label: 'Join', href: '#join' },
  ];

  const scrollToSection = useCallback((sectionId: string) => {
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
            transition={{ duration: 0.08, ease: "easeOut" }}
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.05, ease: "easeOut" }}
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            transition={{ duration: 0.08, ease: "easeOut" }}
          />
        </motion.button>
      </div>

      {isMobile && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              className="navigation__mobile-menu"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ 
                duration: 0.3, 
                ease: "easeOut"
              }}
              style={{ transformOrigin: "top" }}
            >
            {sections.map((section) => (
              <motion.button
                key={section.id}
                className={`navigation__mobile-menu-link ${activeSection === section.id ? 'navigation__mobile-menu-link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  scrollToSection(section.id);
                }}
                whileTap={{ scale: 0.95 }}
              >
                {section.label}
              </motion.button>
            ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.nav>
  );
};

export default Navigation;
