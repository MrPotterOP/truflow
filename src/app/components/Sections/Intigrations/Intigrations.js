'use client';
import styles from './styles.module.css';
import Image from 'next/image';
import { useState } from 'react';

function Integrations() {
    const integrations = [
        "Enterprises", 
        "B2B / B2C Systems", 
        "Order Management", 
        "Warehousing & Logistics", 
        "B2B / B2C Commerce", 
        "B2C/B2B Marketplaces & Apps", 
        "Quick Commerce", 
        "Marketing", 
        "Search & Social"
    ];

    const [active, setActive] = useState(integrations[0]);

    // Calculate the scroll position based on active index
    const getScrollPosition = () => {
        const activeIndex = integrations.indexOf(active);
        const totalSections = integrations.length;
        const scrollPercentage = (activeIndex / (totalSections - 1)) * 89;
        return scrollPercentage;
    };

    return (
        <section id="integrations" className={styles.integrations}>
            <div className={styles.integrationsBox}>
                <div className={styles.integrationsContent}>
                    <h5 className={styles.integrationsTitle}>
                        TruFlo Connectors
                    </h5>
                    
                    <p className={styles.integrationsDescription}>
                        Seamlessly integrate TruFlo with all your data sources — including D2C platforms, Marketplaces, Logistics, and Enterprise apps. Unify data across your entire Commerce ecosystem and gain powerful insights from multiple datasets.
                    </p>
                </div>
                
                <div className={styles.intNav}>
                    {
                        integrations.map((integration, index) => {
                            return (
                                <div 
                                    key={index} 
                                    className={`${styles.intNavItem} ${active === integration ? styles.active : ''}`} 
                                    onClick={() => setActive(integration)}
                                >
                                    <p>{integration}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
                        
            <div className={styles.initDynamicBox}>
                <div className={styles.initImg}>
                    <div className={styles.imageContainer}>
                        <Image 
                            src="/assets/int.png" 
                            alt="int" 
                            width={2100} 
                            height={500}
                            style={{
                                transform: `translateX(-${getScrollPosition()}%)`,
                                transition: 'transform 0.5s ease-in-out'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Integrations;