// src/components/ServicesSection.js
'use client'; // This component now uses state

import { useState } from 'react';
import { FaShoppingCart, FaHome, FaCogs } from 'react-icons/fa';
import styles from './ServicesSection.module.css';

// --- OUR NEW, DETAILED SERVICE DATABASE ---
const servicesData = {
  ecommerce: {
    icon: <FaShoppingCart />,
    title: "E-commerce Stores",
    items: [
      { title: "24/7 AI Customer Support Chatbot", description: "Answers 'Where is my order?' & FAQs instantly." },
      { title: "Abandoned Cart Recovery (Email & WhatsApp)", description: "Sends personalized messages to win back lost sales." },
      { title: "AI Smart Product Recommendations", description: "Increases average order value by showing customers what to buy next." },
      { title: "Low-Stock & Inventory Alerts", description: "Prevents lost sales by notifying you before popular items sell out." }
    ]
  },
  realestate: {
    icon: <FaHome />,
    title: "Real Estate Agencies",
    items: [
      { title: "AI Lead Qualification Bot", description: "Works 24/7 to separate serious buyers from casual browsers." },
      { title: "Instant Appointment Booking", description: "Lets hot leads book a viewing immediately, with automated reminders." },
      { title: "Automated Prospect Nurturing", description: "Keeps you top-of-mind by sending helpful follow-ups for weeks." },
      { title: "AI Property Matching Bot", description: "Acts as a virtual agent, suggesting listings that fit a buyer's exact needs." }
    ]
  },
  saas: {
    icon: <FaCogs />,
    title: "SaaS Companies",
    items: [
      { title: "24/7 Automated User Onboarding Bot", description: "Guides new users through setup to increase activation rates." },
      { title: "AI-Powered Knowledge Base Search", description: "Lets users find answers from your help docs via a smart chat interface." },
      { title: "Automated Trial-to-Paid Sequences", description: "Converts more trial users by sending timely, value-driven emails." },
      { title: "Subscription Renewal/Expiry Alerts", description: "Reduces churn by automatically notifying users of upcoming renewals." }
    ]
  }
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('ecommerce'); // Default to our specialty
  const activeService = servicesData[activeTab];

  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <h2 className="section-title">Specialized Solutions for Ambitious Brands</h2>
        
        {/* --- The Tab Navigation --- */}
        <div className={styles.tabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'ecommerce' ? styles.active : ''}`}
            onClick={() => setActiveTab('ecommerce')}
          >
            <FaShoppingCart /> E-commerce (Specialty)
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'realestate' ? styles.active : ''}`}
            onClick={() => setActiveTab('realestate')}
          >
            <FaHome /> Real Estate
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'saas' ? styles.active : ''}`}
            onClick={() => setActiveTab('saas')}
          >
            <FaCogs /> SaaS
          </button>
        </div>

        {/* --- The Dynamic Content --- */}
        <div className={styles.tabContent}>
          <div className={styles.serviceList}>
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
        </div>
      </div>
    </section>
  )
}

export default ServicesSection;