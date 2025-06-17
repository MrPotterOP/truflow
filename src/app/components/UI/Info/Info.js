import styles from './styles.module.css';

const InfoSection = ({ section }) => {
  if (!section) {
    return null;
  }

  return (
    <div className={styles.section}>
      {section.title && <h2 className={styles.sectionTitle}>{section.title}</h2>}
      {section.blocks && section.blocks.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return <p key={index} className={styles.paragraph}>{block.text}</p>;
          
          case 'orderedList':
            return (
              <ol key={index} className={styles.orderedList}>
                {block.items.map((item, itemIndex) => {
                  if (typeof item === 'string') {
                    return <li key={itemIndex}>{item}</li>;
                  } else if (typeof item === 'object' && item.text) {
                    // This handles items with sub-bullet points
                    return (
                      <li key={itemIndex}>
                        {item.text}
                        {item.subItems && item.subItems.length > 0 && (
                          <ul className={styles.bulletList}>
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>{subItem}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  }
                  return null; // Should not happen with valid data
                })}
              </ol>
            );
          
          // You could add a 'bulletList' type for top-level bullet lists if needed
          // case 'bulletList':
          //   return (
          //     <ul key={index} className={styles.bulletList}>
          //       {block.items.map((item, itemIndex) => (
          //         <li key={itemIndex}>{item}</li>
          //       ))}
          //     </ul>
          //   );

          default:
            console.warn(`Unknown block type: ${block.type}`);
            return null;
        }
      })}
    </div>
  );
};

export default InfoSection;