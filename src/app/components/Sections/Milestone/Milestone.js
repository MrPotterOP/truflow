'use client';
import React from 'react';
import styles from './styles.module.css';

import ImagesScroll from '../../UI/ImgsScroll/ImagesScroll';

import { motion } from 'framer-motion';
import { fadeBlur, transitionFade } from '../../../animations';

const Milestone = () => {
  const milestones = [
    {
      id: 3,
      value: '18x',
      label: 'GMV',
      description: 'For a leading cookware brand'
    },
    {
      id: 4,
      value: '4x',
      label: 'ROAS',
      description: 'For a legacy FMCG brand'
    },

    {
      id: 5,
      value: '40% → 95%',
      label: '',
      description: 'Inventory fill rate optimization'
    },
    {
      id: 6,
      value: '4',
      label: 'Marketplaces',
      description: 'Activated with revenue growth in 90 days'
    },
    {
      id: 2,
      value: '₹1000 Cr+',
      label: '',
      description: 'GMV managed by TruFlo'
    },
    {
      id: 1,
      value: '79%',
      label: 'Avg.',
      description: 'CAGR achieved for Brands'
    }
    
  ];

  const brands = [
    "/assets/logo.png",
    "/assets/logo.png",
    "/assets/logo.png",
    "/assets/logo.png",
    "/assets/logo.png",
    "/assets/logo.png",
    "/assets/logo.png",
    "/assets/logo.png"
  ];

  return (
    <section className={styles.milestone}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Proven Outcomes for Leading Brands</h2>
        </header>

        <motion.div className={styles.metrics}
          initial="hidden"
          whileInView="visible"
          transition={{
            staggerChildren: 0.2
          }}
          viewport={{ once: true }}
        >
          {milestones.map((milestone) => (
            <motion.div key={milestone.id} className={styles.metric}
              variants={fadeBlur}
              transition={transitionFade}
            >
              <div className={styles.metricValue}>
                <span className={styles.value}>{milestone.value}</span>
                {milestone.label && (
                  <span className={styles.label}>{milestone.label}</span>
                )}
              </div>
              <p className={styles.description}>{milestone.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className={styles.brands}>
            <ImagesScroll
              imgs={brands}
              height="68px"
              speed={18}
              direction="left"
              gap="60px"
              pauseOnHover={true}
              className={styles.brandBox}
              imgClassName={styles.logoPlaceholder}
            />
        </div>
      </div>
    </section>
  );
};

export default Milestone;