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

import Promo from "./components/Sections/SubSections/Promo";

import Image from "next/image";

import styles from './page.module.css';

import ImagesScroll from "./components/UI/ImgsScroll/ImagesScroll";


import { Suspense } from "react";

export default function Home() {


  // Single use component
  const IntigrationsImgs = () => {
    const imgs = [
      "/assets/logos/init/image-1.png",
      "/assets/logos/init/image-2.png",
      "/assets/logos/init/image-3.png",
      "/assets/logos/init/image-4.png",
      "/assets/logos/init/image-5.png",
      "/assets/logos/init/image-6.png",
      "/assets/logos/init/image-7.png",
      "/assets/logos/init/image-8.png",
      "/assets/logos/init/image-9.png",
      "/assets/logos/init/image-10.png",
      "/assets/logos/init/image-11.png",
      "/assets/logos/init/image-12.png",
      "/assets/logos/init/image-13.png",
      "/assets/logos/init/image-14.png",
      "/assets/logos/init/image-15.png",
      "/assets/logos/init/image-16.png",
      "/assets/logos/init/image-17.png",
      "/assets/logos/init/image-18.png",
      "/assets/logos/init/image-19.png",
      "/assets/logos/init/image-20.png",
      "/assets/logos/init/image-21.png",
      "/assets/logos/init/image-22.png",
      "/assets/logos/init/image-23.png",
      "/assets/logos/init/image-24.png",
      "/assets/logos/init/image-25.png",
      "/assets/logos/init/image-26.png",
      "/assets/logos/init/image-27.png",
      "/assets/logos/init/image-28.png",
      "/assets/logos/init/image-29.png",
      "/assets/logos/init/image-30.png",
      "/assets/logos/init/image-31.png",


      "/assets/logos/init/image-34.png",
      "/assets/logos/init/image-35.png",
      "/assets/logos/init/image-36.png",
      "/assets/logos/init/image-37.png",

      "/assets/logos/init/image-39.png",

      "/assets/logos/init/image-41.png",

      "/assets/logos/init/image-43.png",
      "/assets/logos/init/image-44.png",  
      "/assets/logos/init/image-45.png",
      "/assets/logos/init/image-46.png",
    ]

    return (
        <div className={styles.integrationsImgsBox}>
            <p>Integrates with: </p>

            <ImagesScroll
                imgs={imgs}
                height="30px"
                speed={60}
                direction="left"
                gap="38px"
                pauseOnHover={true}
                className={styles.integrationsImgs}
            />
        </div>
    );
  };


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
      <Suspense fallback={<div>Loading...</div>}>
        <LeadForm />
      </Suspense>
      <Footer />
    </main>
  );
}
