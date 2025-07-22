// src/components/ServicesSection.js
'use client';
import { useState } from 'react';
// --- ADD THIS LINE TO FIX THE BUG ---
import { FaShoppingCart, FaHome, FaCogs } from 'react-icons/fa'; 
import styles from './ServicesSection.module.css';

const servicesData = {
  ecommerce: {
    icon: <FaShoppingCart />,
    title: "E-commerce Stores",
    pillars: [
      {
        pillarTitle: "Intelligent Sales & Recovery",
        pillarDescription: "We build systems that actively recover lost revenue and increase the value of every single customer.",
        items: [
          { title: "AI-Powered Abandoned Cart Recovery", description: "Turn hesitant shoppers into buyers. We send hyper-personalized emails that win back lost sales automatically." },
          { title: "Smart Upsell & Cross-sell Engine", description: "Increase your average order value by offering customers the perfect complementary product at the perfect time." }
        ]
      },
      {
        pillarTitle: "Automated Customer Experience",
        pillarDescription: "Deliver world-class, 24/7 support that delights customers and frees up your team's time.",
        items: [
          { title: "24/7 AI Support Agent", description: "Your customers get instant answers to 'Where is my order?' and other common questions, day or night." },
          { title: "Proactive Order & Shipping Notifications", description: "Build trust and reduce support tickets by keeping customers informed about their order status every step of the way." }
        ]
      },
      {
        pillarTitle: "Data-Driven Operations",
        pillarDescription: "We turn your business data into automated actions that boost efficiency and prevent costly mistakes.",
        items: [
          { title: "Automated Inventory Forecasting", description: "Never lose a sale to a stockout again. Our systems analyze sales data to predict when to reorder." },
          { title: "Customer Feedback & Sentiment Analysis", description: "Automatically collect and analyze reviews to understand what your customers truly love and what needs improving." }
        ]
      },
      {
        pillarTitle: "Marketing & Content Automation",
        pillarDescription: "Generate high-quality marketing content at scale and put your social media presence on autopilot.",
        items: [
          { title: "AI Product Description Writer", description: "Fill your entire product catalog with compelling, SEO-friendly descriptions in a fraction of the time." },
          { title: "Automated Social Media Content", description: "Consistently engage your audience by automatically generating and scheduling relevant social media posts." }
        ]
      }
    ]
  },
  realestate: { /* ... (remains the same) ... */ },
  saas: { /* ... (remains the same) ... */ }
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('ecommerce');
  const activeService = servicesData[activeTab];

  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <h2 className="section-title">Specialized Solutions for Ambitious Brands</h2>
        <div className={styles.tabs}>{/* ... (tabs are unchanged) ... */}</div>
        
        {/* --- DYNAMIC CONTENT RENDER --- */}
        <div className={styles.tabContent}>
          {/* Check if it's the e-commerce tab to use the new pillar layout */}
          {activeTab === 'ecommerce' ? (
            <div className={styles.pillarLayout}>
              {activeService.pillars.map((pillar, index) => (
                <div key={index} className={styles.pillarCard}>
                  <h3>{pillar.pillarTitle}</h3>
                  <p className={styles.pillarDescription}>{pillar.pillarDescription}</p>
                  <div className={styles.serviceList}>
                    {pillar.items.map((item, i) => (
                      <div key={i} className={styles.serviceItem}>
                        <div className={styles.checkmark}>✓</div>
                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // The original list layout for Real Estate and SaaS
            <div className={styles.serviceListOriginal}>
              {activeService.items.map((item, index) => (
                <div key={index} className={styles.serviceItem}>
                  <div className={styles.checkmark}>✓</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection;