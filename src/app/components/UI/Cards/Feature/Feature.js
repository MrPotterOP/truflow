import styles from './styles.module.css';

function Feature({
    title,
    description,
}) {
    return ( 
        <div className={`${styles.feature}  gradBorderLt`}>
            <div className={styles.featureContent}>
                <h6 className={styles.featureTitle}>{title}</h6>
                <p className={styles.featureDescription}>{description}</p>
            </div>
        </div>
     );
}

export default Feature;