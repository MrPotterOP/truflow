import styles from './styles.module.css';

import Link from 'next/link';
import Image from 'next/image';

function Footer() {



    const socials = [
        {
            name: 'Instagram',
            href: '#',
            icon: '/assets/logos/instagram.png'
        },
        {
            name: 'Youtube',
            href: '#',
            icon: '/assets/logos/yt.png'
        },
        {
            name: 'Linkedin',
            href: '#',
            icon: '/assets/logos/linkedin.png'
        },
        {
            name: 'Facebook',
            href: '#',
            icon: '/assets/logos/fb.png'
        },
        {
            name: 'Twitter',
            href: '#',
            icon: '/assets/logos/x.png'
        }
        
    ]

    const offices = [

        {
            name: 'Pune :',
            address: 'The NextGen Avenue, Wing B, 12th Floor. Bahiratwadi, Shivaji Nagar, Senapati Bapat Road, Pune, Maharashtra - 411016',
        },
        {
            name: 'Bengaluru :',
            address: '14th Floor, Skav 909, Lavelle road, Bengaluru, Karnataka - 560001',
        }
    ]


    return ( 
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLogos}>
                    <Image className={styles.footerLogo} src="/assets/logo.png" alt="Truflo" width={400} height={100} />

                    <div className={styles.socials}>
                        {socials.map((social, index) => (
                            <Link className={styles.socialIcon} key={index} href={social.href} target="_blank" rel="noreferrer">
                                <Image src={social.icon} alt={social.name} width={34} height={34} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className={styles.footerInfo}>
                    <div className={styles.footerInfoTitle}>
                        <h6>Our Offices</h6>
                    </div>

                    <div className={styles.footerInfoContent}>
                        {
                            offices.map((office, index) => (
                                <div key={index} className={styles.footerInfoContentItem}>
                                    <p className={styles.infoTitle}>{office.name}</p>
                                    <p className={styles.infoAddress}>{office.address}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>Copyright © 2025 Truflo Intelligence | </p>
                <p>All rights reserved || </p>

                <Link href="#">
                    Privacy Policy | 
                </Link>
                <Link href="#">
                    Disclaimer
                </Link>
            </div>
        </footer>
     );
}

export default Footer;