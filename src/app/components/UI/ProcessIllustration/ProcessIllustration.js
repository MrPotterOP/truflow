import styles from './styles.module.css';
import Image from 'next/image';

function ProcessIllustration() {


    const dataSources = [
        {
            title: 'Enterprise',
            icons: ['ent1', 'ent2', 'ent3', 'ent4']
        },
        {
            title: 'B2B / B2C Systems',
            icons: ['ent1', 'ent2', 'ent3', 'ent4']
        },
        {
            title: 'B2B / B2C Commerce',
            icons: ['ent1', 'ent2', 'ent3', 'ent4']
        },
        {
            title: 'Order Management',
            icons: ['ent1', 'ent2', 'ent3', 'ent4']
        },
        {
            title: 'Warehousing & Logistics',
            icons: ['ent1', 'ent2', 'ent3', 'ent4']
        },
        {
            title: 'B2C/B2B Marketplaces & Apps',
            icons: ['ent1', 'ent2', 'ent3', 'ent4']
        },
        {
            title: 'Quick Commerce',
            icons: ['ent1', 'ent2', 'ent3', 'ent4']
        },
        {
            title: 'Marketing',
            icons: ['ent1', 'ent2', 'ent3', 'ent4']
        },
        {
            title: 'Search & Social',
            icons: ['ent1', 'ent2', 'ent3', 'ent4']
        }
    ]

    const intelligenceAreas = ["Sales Intelligence", "Product Intelligence", "Marketing Intelligence", "Operational Intelligence", "Order & Inventory Intelligence", "Competitive Intelligence", "Financial Intelligence"];

    const platformTags = ["Commerce insights", "Diagnostics", "Quick commerce analytics", "Data-as-a-Service (DaaS)"];


    // Single use component
    const DataSourceCard = ({ title, icons }) => {
        return (
            <div className={styles.dataSourceCard}>
                <h5>{title}</h5>
                <div className={styles.iconsContainer}>
                    {icons.map((icon, index) => (
                        <div key={index} className={styles.icon}>
                            <Image src={`/assets/icons/${icon}.png`} alt={icon} width={40} height={40} />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const PlatformBox = ({ tags }) =>{
        return (
            <div className={styles.platformBox}>
                <h4>TruFlo Intelligence Platform</h4>
                <div className={styles.tags}>
                    {tags.map((tag, index) => (
                        <div key={index} className={styles.tag}>
                            <p>{tag}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    const PlatformTiles = () => {
        return (
            <div className={styles.platformTiles}>
                <div className={styles.tiles}>
                    {
                        ["tile1", "tile2", "tile3"].map((tile, index) =>{
                            return (
                                <div key={index} className={styles.tile}>
                                    <Image src={`/assets/${tile}.png`} alt={tile} width={200} height={200} />
                                </div>
                            )
                        })
                    }
                </div>

                <div className={styles.bigTile}>
                    <Image src={`/assets/bigTile.png`} alt="bigTile" width={700} height={200} />
                </div>
                
            </div>
        )
    }


    const IntelBox = ({items}) =>{
        return (
            <div className={styles.intelBox}>
                <h5>TruFlo Intelligence </h5>

                <div className={styles.intelItems}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.intelItem}>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }






    return ( 
        <div className={styles.processIllustration}>
            <div className={styles.dataSources}>
                <p className={styles.dataSourcesTitle}>Hybrid Data Sources</p>
                <div className={styles.dataSourcesBox}>
                    {dataSources.map((dataSource, index) => (
                        <DataSourceCard key={index} title={dataSource.title} icons={dataSource.icons} />
                    ))}
                </div>
            </div>

            <div className={styles.platform}>
                <PlatformBox tags={platformTags} />
                <PlatformTiles />
            </div>

            <IntelBox items={intelligenceAreas} />
        </div>
     );
}

export default ProcessIllustration;