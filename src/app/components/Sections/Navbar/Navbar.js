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
                    <div className={styles.radGrad}>
                        <Image className={styles.radImg} src="/assets/grad.png" alt="RadGrad" width={1100} height={1100} />
                    </div>
                    <Link href="#"><Image className={styles.logoImg} src="/assets/logo.png" alt="Truflo" width={170} height={100} /></Link>
                </div>

                <div className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>

                    <div className={styles.menuBtn} onClick={toggleMenu}>
                        <Image src="/assets/menu.png" alt="Menu" width={20} height={20} />
                    </div>

                    <div className={styles.linksBox}>
                        <div className={styles.links}>
                            <Link href="#product">Products</Link>
                            <Link href="#services">Offerings</Link>
                            <Link href="#features">Features</Link>
                            <Link href="#integrations">Connectors</Link>
                            <Link href="#milestone">Outcomes</Link>
                        </div>

                        <div className={styles.ctaBox}>
                            <Link href="#leadForm" className={styles.txtBtn}>Login</Link>
                            <Link href="#leadForm" className={styles.roundBtn}>Contact Us</Link>
                        </div>
                        <div className={styles.xBox} onClick={toggleMenu}>
                            <Image src="/assets/x.png" alt="X" width={20} height={20} />
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;