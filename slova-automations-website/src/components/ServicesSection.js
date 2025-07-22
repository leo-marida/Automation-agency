// src/components/ServicesSection.js
'use client'; 

import { useState } from 'react';
import { FaShoppingCart, FaHome, FaCogs } from 'react-icons/fa';
import styles from './ServicesSection.module.css';

// --- THE DEFINITIVE, CURATED SERVICE DATABASE ---
const servicesData = {
  ecommerce: {
    icon: <FaShoppingCart />,
    title: "E-commerce Stores",
    items: [
      { title: "24/7 AI Customer Support Chatbot", description: "Answers 'Where is my order?' & FAQs instantly, day or night, reducing your support workload." },
      { title: "AI-Powered Abandoned Cart Recovery", description: "Sends hyper-personalized, persuasive emails or WhatsApp messages to win back lost sales." },
      { title: "Smart Upsell & Cross-sell Engine", description: "Increases your average order value by offering customers the perfect complementary product at checkout." },
      { title: "Automated Order & Shipping Updates", description: "Builds customer trust by proactively providing tracking information and delivery status updates." }
    ]
  },
  realestate: {
    icon: <FaHome />,
    title: "Real Estate Agencies",
    items: [
      { title: "AI Lead Qualification Bot", description: "Works 24/7 on your website to separate serious buyers and sellers from casual browsers, so you only focus on hot leads." },
      { title: "Instant Appointment Booking", description: "Allows qualified leads to book viewings directly into your calendar, complete with automated reminders to reduce no-shows." },
      { title: "Automated Prospect Nurturing", description: "Keeps you top-of-mind by sending intelligent, helpful follow-up emails and market updates for weeks." },
      { title: "AI Property Matching Bot", description: "Acts as a virtual agent, suggesting the perfect listings from your portfolio that fit a buyer's exact needs and budget." }
    ]
  },
  saas: {
    icon: <FaCogs />,
    title: "SaaS Companies",
    items: [
      { title: "24/7 Automated User Onboarding Bot", description: "Guides new users through the critical first steps of your software, dramatically increasing activation and retention rates." },
      { title: "AI-Powered Knowledge Base Search", description: "Lets users get instant answers from your help documentation via a smart chat interface, reducing support tickets." },
      { title: "Automated Trial-to-Paid Sequences", description: "Converts more trial users into paying customers by sending timely, value-driven educational emails." },
      { title: "Subscription Renewal & Expiry Alerts", description: "Reduces churn by automatically notifying users of upcoming renewals or credit card issues." }
    ]
  }
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('ecommerce');
  const activeService = servicesData[activeTab];

  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <h2 className="section-title">Specialized Solutions for Ambitious Brands</h2>
        
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

        <div className={styles.tabContent}>
          <div className={styles.serviceList}>
            {activeService.items.map((item, index) => (
              <div key={index} className={styles.serviceItem}>
                <div className={styles.serviceItemHeader}>
                <div className={styles.checkmark}>✓</div>
                  <h4>{item.title}</h4>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection;