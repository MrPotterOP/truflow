'use client';

import { useState } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { fadeBlur, transitionFade  } from '../../../animations';
import Arrow from '../../UI/SVG/Arrow';

function Hero() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    
    const videoSrc = "/videos/hero.mp4"; 
    const thumbnailSrc = "/assets/hero-thumb.png"; 

    const openVideo = () => {
        setIsVideoOpen(true);
    };

    const closeVideo = () => {
        setIsVideoOpen(false);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeVideo();
        }
    };

    return (
        <>
            <section id="hero" className={styles.hero}>
                <div className={styles.heroBox}>
                    <motion.div className={styles.heroContent}
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.2}}
                    >
                        <div className={styles.heroText}>
                            <h1 className={styles.heroTitle}>
                                Grow your business with <br /> <span>Omnichannel Insights</span>
                            </h1>
                            <p className={styles.heroDesc}>
                                Unlock all your data across internal systems, marketplaces, D2C and partner networks (supply chain, logistics, trade) to serve your customer in <span>Real time</span> and at <span>Enterprise scale.</span>
                            </p>
                        </div>


                            <div className={`${styles.heroBtns} highlight`}>
                                <motion.p
                                    variants={fadeBlur}
                                    transition={transitionFade}
                                >Subscribe to our platform for seamless monitoring, performance optimisation and data driven decision making.</motion.p>

                                <motion.div className={styles.btnBox}
                                    variants={fadeBlur}
                                    transition={transitionFade}
                                >
                                    <Link href="#leadForm" className={styles.primeBtn}>Talk to us <span>
                                        <Arrow />

                                        </span><div>
                                            {/* <Image src="/assets/arrow.png" alt="Arrow" width={20} height={20} /> */}
                                        </div></Link>
                                    <Link href="#services" className={styles.greyBtn}>Explore our offerings</Link>
                                </motion.div>
                            </div>

                    </motion.div>

                    <div className={styles.heroVid}>
                        <div className={`${styles.vidBox}`} onClick={openVideo} style={{'--border-radius': '12px'}}>
                            <div className={`${styles.videoThumbnail} gradBorderLt`}>
                                <Image
                                    src={thumbnailSrc}
                                    width={800}
                                    height={450}
                                    alt="Video thumbnail"
                                    className={styles.thumbnailImage}
                                />
                                <div className={styles.playButton}>
                                     <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="34" cy="34" r="33" stroke="#e7660b" stroke-width="2" fill="white"/>
                                        <polygon points="28,22 28,46 48,34" fill="#e7660b"/>
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.heroBgElem}>
                    <Image
                        src="/assets/heroBgElem.png"
                        width={1000}
                        height={1000}
                        alt="illustration art bg"
                    />
                </div>
            </section>


            {isVideoOpen && (
                <div className={styles.videoOverlay} onClick={handleOverlayClick}>
                    <div className={styles.videoContainer}>
                        <button className={styles.closeButton} onClick={closeVideo}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <video
                            width="100%"
                            height="100%"
                            controls
                            autoPlay
                            preload="metadata"
                            src={videoSrc}
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </>
    );
}

export default Hero;