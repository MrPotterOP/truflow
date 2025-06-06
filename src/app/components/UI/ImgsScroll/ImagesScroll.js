'use client';

import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

const ImagesScroll = ({
  imgs = [],
  height = '58px',
  speed = 30, // seconds for one complete cycle
  direction = 'left', // 'left' or 'right'
  gap = '20px',
  pauseOnHover = true,
  className = '',
  imgClassName = '',
  containerClassName = '',
  alt = 'Scrolling image'
}) => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...imgs, ...imgs];

  const scrollStyles = {
    '--scroll-speed': `${speed}s`,
    '--gap': gap,
    '--direction': direction === 'left' ? styles.scrollLeft : styles.scrollRight
  };

  return (
    <div 
      className={`${styles.scrollContainer} ${containerClassName}`}
      style={scrollStyles}
    >
      <div className={`${styles.scrollTrack} ${pauseOnHover ? styles.pauseOnHover : ''} ${className}`}>
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
              priority={index < 4} // Prioritize first few images
              loading={index < 4 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesScroll;