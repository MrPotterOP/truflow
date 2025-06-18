import styles from './styles.module.css';
import Image from 'next/image';

// import ProcessIllustration from '../../UI/ProcessIllustration/ProcessIllustration';

function Process() {


    return ( 
        <section id="process" className={styles.process}>
            <div className={styles.processBox}>
                <div className={styles.info}>
                    <div className={styles.infoTitle}>
                        <h5 className={styles.title}>Consumer Experience <span>+</span> Enterprise Intelligence</h5>    
                        <h6 className={styles.subtitle}>Digital Foundation for Omnichannel Commerce</h6>
                    </div>
                    <p className={styles.description}>TruFlo solves the complexities of fragmented data ecosystems with a real-time architecture built for scale. From ingestion to orchestration, every layer is optimized for speed, intelligent enrichment, and operational impact.</p>
                </div>
            
            {/* <ProcessIllustration /> */}

            <div className={styles.illustration}>
                <Image src="/assets/illustration.png" alt="illustration" width={1200} height={1100} />
            </div>
                
            </div>
        </section>
     );
}

export default Process;