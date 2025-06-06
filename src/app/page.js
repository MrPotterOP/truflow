import Navbar from "./components/Sections/Navbar/Navbar";
import Hero from "./components/Sections/Hero/Hero";
import Milestone from "./components/Sections/Milestone/Milestone";
import Process from "./components/Sections/Process/Process";
import Services from "./components/Sections/Services/Services";
import Product from "./components/Sections/Product/Product";
import Catagories from "./components/Sections/Catagories/Catagories";
import Features from "./components/Sections/Features/Features";
import Integrations from "./components/Sections/Intigrations/Intigrations";
import LeadForm from "./components/Sections/LeadForm/LeadForm";
import Footer from "./components/Sections/Footer/Footer";

import Link from "next/link";
import Image from "next/image";

import styles from './page.module.css';

import ImagesScroll from "./components/UI/ImgsScroll/ImagesScroll";



export default function Home() {


  // Single use component
  const IntigrationsImgs = () => {
    return (
        <div className={styles.integrationsImgsBox}>
            <p>Intigrates with: </p>

            <ImagesScroll
                imgs={['/assets/logo.png', '/assets/grad.png', '/assets/heroBgElem.png', '/assets/logo.png', '/assets/logo.png', '/assets/logo.png', '/assets/logo.png', '/assets/logo.png']}
                height="22px"
                speed={18}
                direction="left"
                gap="60px"
                pauseOnHover={true}
                className={styles.integrationsImgs}
            />
        </div>
    );
  };

  const Promo = () => {
    return (
      <div className={styles.promoBox}>
          <div className={styles.promoContent}>
              <h4 className={styles.promoTitle}>
                Revenue Blind Spots Are Costing You Growth
              </h4>
              <p className={styles.promoDesc}>
                Today&apos;s brands and enterprises operate in silos — data is fragmented, reporting is delayed, and decision-making is guesswork. Whether you&apos;re D2C, omnichannel, or enterprise, one truth remains:
              </p>

              <div className={styles.promoTaglines}>
                  <p className={styles.tagline}>
                    You can&apos;t grow what you can&apos;t measure.
                  </p>

                  <p className={styles.tagline}>
                    TruFlo fixes that!
                  </p>
              </div>

              <Link href="#" className={styles.btnPrime}>
                  Talk to us
              </Link>
          </div>
      </div>
    );
  }

  const ISO = () => {
    return (
        <div className={styles.isoBox}>
            <div className={styles.isoContent}>
              <div className={styles.isoLogo}>
                  <Image src="/assets/iso.png" alt="ISO" width={300} height={300} />
              </div>

              <p className={styles.isoDesc}>
                Your data stays protected with enterprise-grade security
              </p>
            </div>
        </div>
    )
  }

  return (
    <main>
      <Navbar />
      <Hero />
      <IntigrationsImgs />
      <Milestone />
      <Promo />
      <Process />
      <Services />
      <Product />
      <Catagories />
      <Features />
      <Integrations />
      <ISO />
      <LeadForm />
      <Footer />
    </main>
  );
}
