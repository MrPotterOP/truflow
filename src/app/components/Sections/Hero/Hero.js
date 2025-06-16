'use client';

import { useState } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { fadeBlur, transitionFade  } from '../../../animations';

function Hero() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    
    // Replace this with your actual YouTube video ID
    const youtubeVideoId = "lheapd7bgLA"; // Example: Rick Astley - Never Gonna Give You Up
    
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
                                    <Link href="#leadForm" className={styles.primeBtn}>Talk to us <span>→</span><div>
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
                                    src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
                                    width={800}
                                    height={450}
                                    alt="Video thumbnail"
                                    className={styles.thumbnailImage}
                                />
                                <div className={styles.playButton}>
                                    <svg width="68" height="48" viewBox="0 0 68 48" fill="none">
                                        <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 .13 34 .13s-21.79 0-27.1 1.42c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05.06 24 .06 24s0 10.95 1.42 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 47.87 34 47.87s21.79 0 27.1-1.42c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 67.94 24 67.94 24s0-10.95-1.42-16.26z" fill="#f00"/>
                                        <path d="M27 34l18-10-18-10v20z" fill="#fff"/>
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
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
}

export default Hero;