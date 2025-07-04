'use client';

import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

function Navbar() {

    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    }

    return ( 
        <nav className={styles.navbar}>
            <div className={styles.navBox}>

                <div className={styles.navLogo}>
                    <div className={styles.menuBtn} onClick={toggleMenu}>
                        <Image className={styles.menuIcon} src="/assets/hamMenu.png" alt="RadGrad" width={40} height={40} />
                    </div>
                    <Link href="/"><Image className={styles.logoImg} src="/assets/logo.png" alt="Truflo" width={170} height={100} /></Link>
                </div>

                <div className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>

                    {/* <div className={styles.menuBtn} onClick={toggleMenu}>
                        <Image src="/assets/menu.png" alt="Menu" width={20} height={20} />
                    </div> */}

                    <div className={styles.linksBox}>
                        <div className={styles.links}>
                            <Link href="/#process">Products</Link>
                            <Link href="/#services">Offerings</Link>
                            <Link href="/#features">Features</Link>
                            <Link href="/#integrations">Connectors</Link>
                            <Link href="/#milestone">Outcomes</Link>
                        </div>

                        <div className={styles.ctaBox}>
                            <Link href="https://www.amplicommacp.com/" target='_blank' rel="noopener noreferrer" className={styles.txtBtn}>Login</Link>
                            <Link href="#leadForm" className={styles.roundBtn}>Contact Us</Link>
                        </div>
                        <div className={styles.xBox} onClick={toggleMenu}>
                            <Image src="/assets/x.png" alt="X" width={20} height={20} />
                        </div>
                    </div>
                </div>

                <div className={`${styles.mobMenu} ${isActive ? styles.active : ''}`}>
                        <div className={styles.mobMenuLogo}>
                            <Link href="/"><Image className={styles.logoImg} src="/assets/logo.png" alt="Truflo" width={170} height={100} /></Link>
                            <div className={styles.xBtn} onClick={toggleMenu}>
                                <Image src="/assets/x.png" alt="X" width={20} height={20} />
                            </div>
                        </div>
                        <div className={styles.mobLinksBox} onClick={toggleMenu}>
                            <div className={styles.mobLinks}>
                                <Link href="/#process">Products</Link>
                                <Link href="/#services">Offerings</Link>
                                <Link href="/#features">Features</Link>
                                <Link href="/#integrations">Connectors</Link>
                                <Link href="/#milestone">Outcomes</Link>
                            </div>
                            <div className={styles.mobCtaBox}>
                                <Link href="https://www.amplicommacp.com/" target='_blank' rel="noopener noreferrer" className={styles.txtBtn}>Login</Link>
                                <Link href="#leadForm" className={styles.roundBtn}>Contact Us</Link>
                            </div>
                        </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;