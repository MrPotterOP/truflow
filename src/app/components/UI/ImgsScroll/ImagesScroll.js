'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

const ImagesScroll = ({
  imgs = [],
  height = '58px',
  speed = 30,
  direction = 'left',
  gap = '20px',
  pauseOnHover = true,
  className = '',
  imgClassName = '',
  containerClassName = '',
  alt = 'Scrolling image'
}) => {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  
  // Replaced timeout with a more reliable image load counter.
  const [loadedImageCount, setLoadedImageCount] = useState(0);

  const duplicatedImages = [...imgs, ...imgs];

  useEffect(() => {
    const calculateAndAnimate = () => {
      if (trackRef.current && containerRef.current) {
        const track = trackRef.current;
        const container = containerRef.current;

        track.style.animation = 'none';
        
        const trackWidth = track.scrollWidth;
        const containerWidth = container.clientWidth;
        
        if (trackWidth < containerWidth * 2) {
          track.style.minWidth = `${containerWidth * 2}px`;
        }
        
        void track.offsetHeight; // Force reflow before re-enabling animation

        requestAnimationFrame(() => {
          track.style.animation = '';
          if (!isReady) {
            setIsReady(true);
          }
        });
      }
    };

    // This effect now waits until the first set of images reports as loaded.
    // This prevents width miscalculation on browsers like Safari.
    if (loadedImageCount >= imgs.length) {
      calculateAndAnimate();
      
      window.addEventListener('resize', calculateAndAnimate);
      return () => {
        window.removeEventListener('resize', calculateAndAnimate);
      };
    }
  }, [loadedImageCount, imgs.length, isReady]);

  const handleImageLoad = () => {
    setLoadedImageCount(prev => prev + 1);
  };

  const scrollStyles = {
    '--scroll-speed': `${speed}s`,
    '--gap': gap
  };

  return (
    <div
      ref={containerRef}
      className={`${styles.scrollContainer} ${containerClassName}`}
      style={scrollStyles}
    >
      <div
        ref={trackRef}
        className={`${styles.scrollTrack} ${
          direction === 'left' ? styles.scrollLeft : styles.scrollRight
        } ${pauseOnHover ? styles.pauseOnHover : ''} ${className}`}
        style={{
          opacity: isReady ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className={`${styles.scrollItem} ${imgClassName}`}
            style={{ height }}
          >
            <Image
              src={src}
              alt={`${alt} ${index + 1}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: 'auto',
                height: '100%',
                objectFit: 'contain'
              }}
              priority={index < imgs.length}
              loading={index < imgs.length ? 'eager' : 'lazy'}
              onLoad={handleImageLoad}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesScroll;