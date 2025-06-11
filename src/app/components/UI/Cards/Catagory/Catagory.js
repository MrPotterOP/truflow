import styles from './styles.module.css';
import Image from 'next/image';

function Catagory({
    title,
    description,
    icon,
    className,
}) {
    return ( 
        <div className={`${styles.catagory} ${className} `}>
            <div className={styles.iconBox}>
                <div className={styles.icon}>
                    <Image src={icon} alt="icon" width={40} height={40} />
                </div>
            </div>

            <div className={styles.catagoryInfo}>
                <h5 className={styles.catagoryTitle}>{title}</h5>
                <p className={styles.catagoryDescription}>{description}</p>
            </div>
        </div>
     );
}

export default Catagory;