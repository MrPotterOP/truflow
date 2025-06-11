'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import Feature from '../../UI/Cards/Feature/Feature';

function Features() {
    const features = [
        {
            title: "Cross-platform integration",
            description: "Connect Amazon, Shopify, Meta, and more platforms in one unified view",
        },
        {
            title: "Unified metrics",
            description: "Track GMV, ROAS, AOV, TACoS across all your channels",
        },
        {
            title: "RCA engine",
            description: "See why metrics are changing with automated root cause analysis",
        },
        {
            title: "Smart alerts",
            description: "Get notified via WhatsApp/Slack when metrics change significantly",
        },
        {
            title: "Visual dashboards",
            description: "Customized views for teams and CXOs with the metrics that matter",
        },
        {
            title: "Action-tracking",
            description: "Closed-loop feedback to measure the impact of your actions",
        }
    ];

    // Container variant for staggered animation
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
            }
        }
    };

    // Individual feature card animation
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
    };

    return (
        <section id="features" className={styles.features}>
            <h3 className={styles.title}>
                <span>Real-Time Intelligence.</span> Root Cause Analysis. Revenue Action.
            </h3>

            <motion.div
                className={styles.featuresBox}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className={`${styles.featureCard} .gradBorder`}
                    >
                        <Feature {...feature} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Features;
