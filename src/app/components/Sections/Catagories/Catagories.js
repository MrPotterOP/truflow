'use client';

import { motion } from 'framer-motion';
import styles from './styles.module.css';
import Catagory from '../../UI/Cards/Catagory/Catagory';

function Catagories() {
    const catagories = [
        {
            title: "Consumer Brands",
            description: "D2C, FMCG, Electronics, Fashion, Personal Care",
            icon: "/assets/cat1.png",
        },
        {
            title: "Enterprises",
            description: "Multi-brand, multi-BU orgs with complex ERPs and internal data silos",
            icon: "/assets/cat2.png",
        },
        {
            title: "System Integrators & Consultants",
            description: "Deliver digital Go-To-Market & analytics for your clients using TruFlo as a platform",
            icon: "/assets/cat3.png",
        },
        {
            title: "Independent Software Vendors",
            description: "Embed intelligence in Shopify, Magento, Unicommerce, etc.",
            icon: "/assets/cat4.png",
        },
        {
            title: "Marketing & Media Agencies",
            description: "Track blended ROAS, TACoS, and multi-platform efficiency in one place",
            icon: "/assets/cat5.png",
        }
    ];

    // Variants for parent container
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
            }
        }
    };

    // Variants for child cards
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1,  y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
    };

    return ( 
        <section className={styles.catagories} id='catagories'>
            <h3 className={styles.catTitle}>
                Built for the Most <span> Ambitious Teams</span> in Commerce
            </h3>

            <motion.div
                className={styles.catBox}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {catagories.map((catagory, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className={styles.catCard}
                    >
                        <Catagory {...catagory} />
                    </motion.div>
                ))}
            </motion.div>

        </section>
    );
}

export default Catagories;
