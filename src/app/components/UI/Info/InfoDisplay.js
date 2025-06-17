import InfoSection from './Info';
import styles from './styles.module.css'; 


const InfoDisplay = ({ data }) => { 
  if (!data || data.length === 0) {
    return <p>No information to display.</p>;
  }

  return (
    <div className={styles.infoDisplayContainer}>
      {data.map(section => (
        <InfoSection key={section.id || section.title} section={section} />
      ))}
    </div>
  );
};

export default InfoDisplay;