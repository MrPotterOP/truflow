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
    ]

    return ( 
        <section id="features" className={styles.features}>
            <h3 className={styles.title}>
                <span>Real-Time Intelligence.</span> Root Cause Analysis. Revenue Action.
            </h3>

            <div className={styles.featuresBox}>
                {
                    features.map((feature, index) => {
                        return (
                            <Feature key={index} {...feature} />
                        )
                    })
                }
            </div>

        </section>
     );
}

export default Features;