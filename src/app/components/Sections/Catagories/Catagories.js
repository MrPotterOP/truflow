import styles from './styles.module.css';
import Image from 'next/image';

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
            icon: "/assets/cat1.png",
        },
        {
            title: "System Integrators & Consultants",
            description: "D2C, FMCG, Electronics, Fashion, Personal Care",
            icon: "/assets/cat1.png",
        },
        {
            title: "ISVs & Platforms",
            description: "Embed intelligence in Shopify, Magento, Unicommerce, etc.",
            icon: "/assets/cat1.png",
        },
        {
            title: "Marketing & Media Agencies",
            description: "Track blended ROAS, TACoS, and multi-platform efficiency in one place",
            icon: "/assets/cat1.png",
        }
    ];

    return ( 
        <section className={styles.catagories} id='catagories'>
            <h3 className={styles.catTitle}>Built for the Most <span> Ambitious Teams</span> in Commerce</h3>

            <div className={styles.catBox}>
                {
                    catagories.map((catagory, index) => {
                        return (
                            <Catagory key={index} {...catagory} />
                        )
                    })
                }
            </div>
        </section>
     );
}

export default Catagories;