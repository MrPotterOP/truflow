import { motion, useTransform } from 'framer-motion';
import styles from './styles.module.css';

const Digit = ({ v, k, digitHeight }) => {
  const y = useTransform(v, value => -(value / Math.pow(10, k)) * digitHeight);

  return (
    <div className={styles.digitContainer}>
      <motion.div
        className={styles.digitStrip}
        style={{ y }}
      >
        {Array.from({ length: 200 }, (_, i) => (
          <div key={i} className={styles.digit}>
            {i % 10}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Digit;