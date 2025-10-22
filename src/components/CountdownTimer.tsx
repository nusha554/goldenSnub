import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CountdownTimerProps, TimeLeft } from '../types';

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  launchDate = new Date('2025-10-25T00:00:00Z') 
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="countdown-container">
      <motion.div 
        className="countdown-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>Launch Countdown</h2>
        <p>Golden Snub Monkey launches on October 25, 2025</p>
      </motion.div>
      
      <div className="countdown-grid">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            className="countdown-unit"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="countdown-number">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="countdown-label">{unit.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
