'use client';
import Link from 'next/link';
import styles from './styles.module.css';

import { motion } from 'framer-motion';
import { slideUp, transitionFade  } from '../../../animations';


function Promo() {
    return (
      <motion.div className={styles.promoBox}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ staggerChildren: 0.2}}
      >
          <motion.div className={styles.promoContent}
            variants={slideUp}
            transition={transitionFade}
          >

              <h4 className={styles.promoTitle}>
                Revenue Blind Spots Are Costing You Growth
              </h4>
              <p className={styles.promoDesc}>
                Today&apos;s brands and enterprises operate in silos — data is fragmented, reporting is delayed, and decision-making is guesswork. Whether you&apos;re D2C, omnichannel, or enterprise, one truth remains:
              </p>

              <motion.div className={styles.promoTaglines}
                variants={slideUp}
                transition={transitionFade}

              >
                  <p className={styles.tagline}>
                    You can&apos;t grow what you can&apos;t measure.
                  </p>

                  <p className={styles.tagline}>
                    TruFlo fixes that!
                  </p>
              </motion.div>

              <Link href="#leadForm" className={styles.btnPrime}>
                  Talk to us
              </Link>
          </motion.div>
      </motion.div>
    );
  }

export default Promo;