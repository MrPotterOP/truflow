import Link from 'next/link';
import styles from './styles.module.css';

const Chat = ({ 
  href = '#leadForm', 
  align = 'right',
  bottom = '30px',
  side = '20px',
  size = 'medium',
  variant = 'primary',
  ariaLabel = 'Contact us',
  className = '',
  children
}) => {
  const alignmentClass = align === 'left' ? styles.alignLeft : styles.alignRight;
  const sizeClass = styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`];
  const variantClass = styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`];

  const customStyle = {
    bottom,
    [align]: side
  };

  return (
    <Link 
      href={href}
      className={`${styles.chatButton} ${alignmentClass} ${sizeClass} ${variantClass} ${className}`}
      style={customStyle}
      aria-label={ariaLabel}
      role="button"
    >
      {children || (
        // <svg 
        //   className={styles.chatIcon} 
        //   viewBox="0 0 24 24" 
        //   fill="none" 
        //   stroke="currentColor" 
        //   strokeWidth="2"
        //   strokeLinecap="round" 
        //   strokeLinejoin="round"
        //   aria-hidden="true"
        // >
        //   <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        // </svg>

        <svg className={styles.chatIcon} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.8049 27.3755C22.1099 27.3755 28.0319 21.4535 28.0319 14.1484C28.0319 6.84335 22.1099 0.921387 14.8049 0.921387C7.49985 0.921387 1.57784 6.84335 1.57784 14.1484C1.57784 16.2643 2.07465 18.2642 2.95795 20.0378C3.19286 20.5091 3.2709 21.0477 3.13493 21.5564L2.34712 24.5007C1.38992 26.6062 -2.31262 27.8564 4.45261 26.6062L7.39695 25.8184C7.90566 25.6824 8.44426 25.7605 8.91567 25.9954C10.6892 26.8787 12.6891 27.3755 14.8049 27.3755Z" fill="white"/>
        </svg>
      )}
    </Link>
  );
};

export default Chat;