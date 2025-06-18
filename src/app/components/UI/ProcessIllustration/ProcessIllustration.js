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
            icons: ['b2b1', 'b2b2', 'b2b3', 'b2b4']
        },
        {
            title: 'B2B / B2C Commerce',
            icons: ['c1', 'c2', 'c3', 'c4']
        },
        {
            title: 'Order Management',
            icons: ['om1', 'om2', 'om3', 'om4']
        },
        {
            title: 'Warehousing & Logistics',
            icons: ['wl1', 'wl2', 'wl3', 'wl4']
        },
        {
            title: 'B2C/B2B Marketplaces & Apps',
            icons: ['b2c1', 'b2c2', 'b2c3', 'b2c4']
        },
        {
            title: 'Quick Commerce',
            icons: ['qc1', 'qc2', 'qc3', 'qc4']
        },
        {
            title: 'Marketing',
            icons: ['m1', 'm2', 'm3', 'm4']
        },
        {
            title: 'Search & Social',
            icons: ['s1', 's2', 's3', 's4']
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
                <div className={styles.platformArrow}>
                    <Image src="/assets/arr2.png" alt="arrow" width={580} height={240} />
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
                    <div className={styles.bigTileArrow}>
                        {
                            ["bigTileArrow1", "bigTileArrow2", "bigTileArrow3"].map((arrow, index) =>{
                                return (
                                    <div key={index} className={styles.bigTileArrowItem}>
                                        <Image src={`/assets/arr.png`} alt={arrow} width={200} height={200} />
                                    </div>
                                )
                            })
                        }
                    </div>
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
                <div className={styles.dataSourcesArrow}>
                    <Image src="/assets/arrG.png" alt="arrow" width={240} height={240} />
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