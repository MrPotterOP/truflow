'use client';

import { MotionValue, motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import styles from './styles.module.css';

const Odometer = ({ 
  from = 0, 
  to = 0, 
  duration = 2, 
  className = '',
  viewport = { once: true, margin: "0px 0px -100px 0px" }
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, viewport);
  const [currentValue, setCurrentValue] = useState(from);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Dynamically determine number of digits based on the larger value
  const getDigitCount = (num) => {
    return Math.max(String(Math.abs(num)).length, 1);
  };
  
  const maxDigits = Math.max(
    getDigitCount(from),
    getDigitCount(to),
    1 // Minimum 1 digit
  );

  useEffect(() => {
    // Only animate when in view and haven't animated yet (if once: true)
    if (!isInView) return;
    if (viewport.once && hasAnimated) return;
    
    // Reset current value to 'from' when starting animation
    setCurrentValue(from);
    
    // Animate from 'from' to 'to' over the specified duration
    const startTime = Date.now();
    const difference = to - from;
    
    // Only animate if there's actually a difference
    if (difference === 0) {
      setCurrentValue(to);
      setHasAnimated(true);
      return;
    }
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Use easeInOut for smoother odometer feel
      const easeInOut = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      const newValue = Math.round(from + (difference * easeInOut));
      
      setCurrentValue(newValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setHasAnimated(true);
      }
    };
    
    animate();
  }, [isInView, from, to, duration, hasAnimated, viewport.once]);

  // Pad the number with leading zeros based on maxDigits
  const paddedValue = Math.abs(currentValue).toString().padStart(maxDigits, '0');
  const isNegative = currentValue < 0;

  return (
    <span ref={ref} className={`${styles.odometer} ${className}`}>
      {isNegative && <span>-</span>}
      {paddedValue.split('').map((_, index) => {
        const place = Math.pow(10, maxDigits - index - 1);
        return (
          <OdometerDigit 
            key={`digit-${index}`}
            place={place} 
            value={Math.abs(currentValue)}
            index={index}
          />
        );
      })}
    </span>
  );
};

const OdometerDigit = ({ place, value, index }) => {
  const valueRoundedToPlace = Math.floor(value / place);
  const animatedValue = useSpring(valueRoundedToPlace, {
    stiffness: 60,
    damping: 25,
    mass: 0.8
  });

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div className={styles.digitContainer}>
      <div className={styles.digit}>
        {[...Array(10).keys()].map((number) => (
          <OdometerNumber 
            key={`${index}-${number}`}
            mv={animatedValue} 
            number={number} 
          />
        ))}
      </div>
    </div>
  );
};

const OdometerNumber = ({ mv, number }) => {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10;
    let offset = (10 + placeValue - number) % 10;
    
    // Calculate the vertical offset (negative for upward roll)
    let yOffset = -offset * 100; // Negative for upward movement
    
    // Create seamless loop - when going from 9 to 0
    if (offset > 5) {
      yOffset += 1000; // Add back to create seamless transition
    }
    
    return `${yOffset}%`;
  });

  return (
    <motion.div
      style={{ y }}
      className={styles.number}
    >
      {number}
    </motion.div>
  );
};

export default Odometer;