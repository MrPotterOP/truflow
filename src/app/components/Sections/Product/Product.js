'use client';
import styles from './styles.module.css';
import Image from 'next/image';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { fadeBlur, transitionFade } from '../../../animations';

function Product() {

    const products = [
        {
            title: "See performance across every channel and SKU",
            img: "/assets/prod1.png",
        },
        {
            title: "Understand the why behind every spike, dip, or inefficiency",
            img: "/assets/prod2.png",
        },
        {
            title: "Take action — through insights or our managed execution service",
            img: "/assets/prod3.png",
        }
    ]

    const [product, setProduct] = useState(products[0]);


    // Handlers
    const handleClick = (product) => {
        setProduct(product);
    }
    



    return ( 
        <div id="product" className={styles.product}>
            <div className={styles.productBox}>
                <div className={styles.productTitle}>
                    <h3>Your <span>Single Source of Truth</span> for Revenue Growth Acceleration</h3>
                    <p>TruFlo unifies your data across commerce, ads, inventory, and operations. It helps you:</p>
                </div>

                <div className={styles.productContentBox}>
                    <div className={`${styles.productContent}`}>
                        {
                            products.map((prod, index) => {
                                return (
                                    <div className={`${styles.prodFeature} ${(products[index].title == product.title) ? styles.active : ""}`} key={index} onClick={() => handleClick(products[index])}>
                                        <p>{prod.title}</p>
                                        <Image src={product.img} alt="product" width={500} height={300} />
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className={styles.prodDisplay}>
                        <div className={styles.prodDisplayStatic}>
                            <Image src="/assets/prod.png" alt="product" width={800} height={600} />
                        </div>

                        <div className={styles.prodDisplayDynamic}>
                            <AnimatePresence>
                                <motion.div className={styles.prodDisplayDynamicBox} key={product.img} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
                                    <Image src={product.img} alt="product" width={600} height={800} priority />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                <div className={`${styles.prodTagline} highlight`}>
                    <motion.p
                        initial="hidden"
                        transition={transitionFade}
                        variants={fadeBlur}
                        whileInView="visible"
                        viewport={{ once: true, margin: "0px 0px -20px 0px" }}

                    >We&apos;re not just a dashboard. We&apos;re your revenue co-pilot.</motion.p>
                </div>

            </div>
            

            {/* <div className={`${styles.prodTagline} highlight`}>
                    <p>We&apos;re not just a dashboard. We&apos;re your revenue co-pilot.</p>
            </div> */}

        </div>
     );
}

export default Product;