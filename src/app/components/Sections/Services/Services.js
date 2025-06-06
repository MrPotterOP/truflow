'use client';

import { useState } from 'react';
import styles from './styles.module.css';

const Services = () => {
  const [activeService, setActiveService] = useState('outcome');
  const [showLess, setShowLess] = useState(false);

  const services = [
    {
      id: 'software',
      name: 'Software-as-a-Service',
      title: 'Software-as-a-Service (SaaS)',
      subtitle: 'Fully managed solution',
      description: 'Complete software solutions delivered over the cloud, managed and maintained by our team while you focus on your core business.',
      cards: [
        {
          title: 'Cloud Solutions',
          description: 'Scalable cloud-based software solutions designed for enterprise needs.',
          cta: 'Get in touch'
        },
        {
          title: 'Integration Services',
          description: 'Seamless integration with your existing systems and workflows.',
          cta: 'Get in touch'
        },
        {
          title: 'Support & Maintenance',
          description: '24/7 support and continuous maintenance for optimal performance.',
          cta: 'Get in touch'
        },
        {
          title: 'Security Solutions',
          description: 'Enterprise-grade security measures to protect your data and operations.',
          cta: 'Get in touch'
        }
      ]
    },
    {
      id: 'platform',
      name: 'Platform-as-a-Service',
      title: 'Platform-as-a-Service (PaaS)',
      subtitle: 'Development platform',
      description: 'Complete development and deployment platform that enables you to build, test, and deploy applications quickly.',
      cards: [
        {
          title: 'Development Tools',
          description: 'Comprehensive development environment with all necessary tools and frameworks.',
          cta: 'Get in touch'
        },
        {
          title: 'Deployment Pipeline',
          description: 'Automated deployment pipeline for faster time-to-market.',
          cta: 'Get in touch'
        },
        {
          title: 'Scaling Solutions',
          description: 'Auto-scaling infrastructure that grows with your application needs.',
          cta: 'Get in touch'
        },
        {
          title: 'API Management',
          description: 'Complete API lifecycle management and integration capabilities.',
          cta: 'Get in touch'
        }
      ]
    },
    {
      id: 'data',
      name: 'Data-as-a-Service',
      title: 'Data-as-a-Service (DaaS)',
      subtitle: 'Data solutions',
      description: 'Comprehensive data management and analytics solutions to unlock insights from your business data.',
      cards: [
        {
          title: 'Data Analytics',
          description: 'Advanced analytics and business intelligence solutions for data-driven decisions.',
          cta: 'Get in touch'
        },
        {
          title: 'Data Integration',
          description: 'Seamless integration of data from multiple sources and formats.',
          cta: 'Get in touch'
        },
        {
          title: 'Machine Learning',
          description: 'AI and ML solutions to extract predictive insights from your data.',
          cta: 'Get in touch'
        },
        {
          title: 'Data Governance',
          description: 'Complete data governance and compliance management solutions.',
          cta: 'Get in touch'
        }
      ]
    },
    {
      id: 'outcome',
      name: 'Outcome-as-a-Service',
      title: 'Outcome-as-a-Service (OaaS)',
      subtitle: 'Fully managed solution',
      description: 'We run your performance marketing, marketplaces, and GTM operations — fully managed. Let our experts handle execution while you focus on strategic decisions.',
      cards: [
        {
          title: 'Commerce & Marketing Strategy',
          description: 'Led by experienced e-commerce and growth experts, we define strategic roadmaps across D2C, marketplaces, and digital advertising. From product portfolio planning to campaign investment decisions, our team aligns every lever to your revenue and margin goals.',
          cta: 'Get in touch'
        },
        {
          title: 'Omnichannel Consulting',
          description: 'Our specialists manage cross-channel operations — onboarding, optimization, and performance tuning across marketplaces, quick commerce, D2C, and partner networks. We act as an embedded growth team, ensuring seamless coordination between supply, marketing, and platform partners.',
          cta: 'Get in touch'
        },
        {
          title: 'eCommerce Technology',
          description: 'We deploy scalable, enterprise-grade tools to support execution — from real-time inventory control to digital shelf readiness. Our experts manage integration, configuration, and ongoing optimization, so you can focus on business outcomes, not backend complexity.',
          cta: 'Get in touch'
        },
        {
          title: 'Analytics Professional Services',
          description: 'Our analysts transform fragmented data into clear, actionable insights. From understanding demand to attributing performance, we embed intelligence into every layer of your operations — helping you act faster, with confidence.',
          cta: 'Get in touch'
        }
      ]
    }
  ];

  const currentService = services.find(service => service.id === activeService);

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Flexible Offering Models That{' '}
            <span className={styles.highlight}>Fit You</span> — Not the Other Way Around
          </h2>
        </div>

        <div className={styles.serviceButtons}>
          {services.map((service) => (
            <button
              key={service.id}
              className={`${styles.serviceButton} ${
                activeService === service.id ? styles.active : ''
              }`}
              onClick={() => setActiveService(service.id)}
            >
              {service.name}
            </button>
          ))}
        </div>

        {currentService && (
          <div className={styles.serviceContent}>
            <div className={styles.serviceHeader}>
              <div className={styles.serviceInfo}>
                <h3 className={styles.serviceTitle}>{currentService.title}</h3>
                <p className={styles.serviceSubtitle}>{currentService.subtitle}</p>
                <p className={styles.serviceDescription}>{currentService.description}</p>
              </div>
              <button className={styles.talkButton}>Talk to us</button>
            </div>

            <div className={`${styles.serviceCards} ${showLess ? styles.collapsed : ''}`}>
              {currentService.cards.map((card, index) => (
                <div key={index} className={styles.serviceCard} >
                  <h4 className={styles.cardTitle}>{card.title}</h4>
                  <p className={styles.cardDescription}>{card.description}</p>
                  <button className={styles.cardCta}>
                    {card.cta}
                    <span className={styles.arrow}>→</span>
                  </button>
                </div>
              ))}
            </div>

            <button
              className={styles.showLessButton}
              onClick={() => setShowLess(!showLess)}
            >
              {showLess ? 'Show More' : 'Show Less'}
              <span className={`${styles.chevron} ${showLess ? styles.up : ''}`}>↑</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;