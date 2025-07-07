'use client';
import React from 'react';
import styles from './styles.module.css';

import ImagesScroll from '../../UI/ImgsScroll/ImagesScroll';

import { motion } from 'framer-motion';

import Odometer from '../../UI/Odometer/Odometer';

import Arrow from '../../UI/SVG/Arrow';

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
      value: '9',
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
    "/assets/logos/image 12.png",
    "/assets/logos/image 13.png",
    "/assets/logos/image 14.png",
    "/assets/logos/image 15.png",
    "/assets/logos/image 16.png",
    "/assets/logos/image 17.png",
    "/assets/logos/image 18.png",
    "/assets/logos/image 19.png",
    "/assets/logos/image 20.png",
    "/assets/logos/image 21.png",
    "/assets/logos/image 22.png",
    "/assets/logos/image 23.png",
  ];

  
  return (
    <section id="milestone" className={styles.milestone}>
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

          <div className={styles.metric}>
            <div className={styles.metricValue}>
              <span className={styles.value}>
                <Odometer to={79} from={0} />
                </span><span className={styles.value}>%</span><span className={styles.label}>Avg.</span>
            </div>
              <p className={styles.description}>CAGR achieved <br />for Brands</p>
          </div>

          <div className={styles.metric}>
            <div className={styles.metricValue}>
              <span className={styles.value}>₹</span><span className={styles.value}>
                <Odometer to={1000} from={0} />
                </span><span className={styles.label}>Cr+</span>
            </div>
              <p className={styles.description}>GMV managed </p>
          </div>

          <div className={styles.metric}>
            <div className={styles.metricValue}>
                <Odometer to={18} from={0} className={styles.value}/>
              
                <span className={styles.value}>x</span><span className={styles.label}>GMV</span>
            </div>
              <p className={styles.description}>For a leading <br />cookware brand</p>
          </div>

          <div className={styles.metric}>
            <div className={styles.metricValue}>

                <Odometer to={4} from={0} className={styles.value} />
                <span className={styles.value}>x</span><span className={styles.label}>ROAS</span>
            </div>
              <p className={styles.description}>For a legacy <br />FMCG brand</p>
          </div>

          <div className={styles.metric}>
            <div className={styles.metricValue}>
              <span className={styles.value}>
                <Odometer to={40} from={10} />
                </span><span className={`${styles.label} ${styles.cent} ${styles.arrowFlex}`}>% <div className={styles.arrow}>
                    <Arrow />
                  </div></span><span className={styles.value}>    
                  <Odometer to={95} from={0} /> 
                  </span><span className={`${styles.label} ${styles.cent} `}>%</span>
            </div>
              <p className={styles.description}>Inventory fill rate <br />optimization</p>
          </div>

          <div className={styles.metric}>
            <div className={styles.metricValue}>
              <span className={styles.value}>
                <Odometer to={9} from={0} />
                </span><span className={styles.label}>Marketplaces</span>
            </div>
              <p className={styles.description}>Activated with revenue <br />growth in 90 days</p>
          </div>
        </motion.div>

        <div className={styles.brands}>
            <ImagesScroll
              imgs={brands}
              height="68px"
              speed={20}
              direction="left"
              gap="40px"
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