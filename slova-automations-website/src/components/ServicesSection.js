'use client'; 

import { useState } from 'react';
import { FaShoppingCart, FaHome, FaCogs, FaUtensils, FaCut, FaClinicMedical, FaPalette } from 'react-icons/fa';
import styles from './ServicesSection.module.css';

const servicesData = {
  ecommerce: {
    icon: <FaShoppingCart />, title: "E-commerce Stores", primary: true,
    items: [
      { title: "24/7 AI Customer Support Chatbot", description: "Answers 'Where is my order?' & FAQs instantly, day or night, reducing your support workload." },
      { title: "AI-Powered Abandoned Cart Recovery", description: "Sends hyper-personalized, persuasive emails or WhatsApp messages to win back lost sales." },
      { title: "Smart Upsell & Cross-sell Engine", description: "Increases your average order value by offering customers the perfect complementary product at checkout." },
      { title: "Automated Order & Shipping Updates", description: "Builds customer trust by proactively providing tracking information and delivery status updates." },
      { title: "Low-Stock & Inventory Alerts", description: "Prevents lost sales by notifying you before popular items sell out." },
      { title: "AI Product Description Writer", description: "Fill your entire product catalog with compelling, SEO-friendly descriptions in a fraction of the time." },
      { title: "Customer Feedback & Sentiment Analysis", description: "Automatically collect and analyze reviews to understand what your customers truly love and what needs improving." }
    ]
  },
  realestate: {
    icon: <FaHome />, title: "Real Estate Agencies", primary: true,
    items: [
      { title: "AI Lead Qualification Bot", description: "Works 24/7 on your website to separate serious buyers and sellers from casual browsers, so you only focus on hot leads." },
      { title: "Instant Appointment Booking", description: "Allows qualified leads to book viewings directly into your calendar, complete with automated reminders to reduce no-shows." },
      { title: "Automated Prospect Nurturing", description: "Keeps you top-of-mind by sending intelligent, helpful follow-up emails and market updates for weeks." },
      { title: "AI Property Matching Bot", description: "Acts as a virtual agent, suggesting the perfect listings from your portfolio that fit a buyer's exact needs and budget." },
      { title: "Automated Client Reminders", description: "Ensures clients never miss a deadline for documents or viewings." }
    ]
  },
  saas: {
    icon: <FaCogs />, title: "SaaS Companies", primary: true,
    items: [
      { title: "24/7 Automated User Onboarding Bot", description: "Guides new users through the critical first steps of your software, dramatically increasing activation and retention rates." },
      { title: "AI-Powered Knowledge Base Search", description: "Lets users get instant answers from your help documentation via a smart chat interface, reducing support tickets." },
      { title: "Automated Trial-to-Paid Sequences", description: "Converts more trial users into paying customers by sending timely, value-driven educational emails." },
      { title: "Subscription Renewal & Expiry Alerts", description: "Reduces churn by automatically notifying users of upcoming renewals or credit card issues." }
    ]
  },
  restaurants: {
    icon: <FaUtensils />, title: "Restaurants & Cafes", primary: false,
    items: [
      { title: "Social Media Ordering Bot (IG/Messenger)", description: "Lets customers order directly from their DMs." },
      { title: "WhatsApp Reservation Bot", description: "Your 24/7 digital host that fills tables and sends reminders." },
      { title: "Automated Feedback & Review Collector", description: "Sends a review link after a visit to boost your online ratings." }
    ]
  },
  localservices: {
    icon: <FaCut />, title: "Local Services (Gyms, Salons)", primary: false,
    items: [
      { title: "24/7 Booking Bot (WhatsApp/Messenger)", description: "Fills your schedule by letting clients book appointments anytime." },
      { title: "Automated Service & Renewal Reminders", description: "Reduces no-shows and brings back clients for their next appointment." },
      { title: "Digital Loyalty Card Bot", description: "Manages loyalty points and discounts via chat to increase repeat business." }
    ]
  },
  healthcare: {
    icon: <FaClinicMedical />, title: "Healthcare Clinics", primary: false,
    items: [
      { title: "HIPAA-Compliant Appointment Bot", description: "Securely books appointments and sends confirmations 24/7." },
      { title: "Missed Appointment Follow-up", description: "Reduces lost revenue by automatically contacting no-shows to re-book." },
      { title: "Patient FAQ Bot", description: "Answers common questions about hours, insurance, and procedures instantly." }
    ]
  },
  agencies: {
    icon: <FaPalette />, title: "Agencies & Freelancers", primary: false,
    items: [
      { title: "Automated Client Onboarding System", description: "Sends contracts, invoices, and welcome info the moment a deal is closed." },
      { title: "AI Proposal & Scope of Work Generator", description: "Creates a first draft of a professional proposal in minutes." },
      { title: "Automated Lead Scraping & Outreach", description: "Finds potential clients on platforms like LinkedIn and sends personalized messages." }
    ]
  }
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('ecommerce');
  const [showAllServices, setShowAllServices] = useState(false);
  const [showAllNiches, setShowAllNiches] = useState(false);

  const activeService = servicesData[activeTab];

  const servicesToShow = showAllServices ? activeService.items : activeService.items.slice(0, 4);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowAllServices(false);
  };
  
  const allNiches = Object.keys(servicesData);
  const primaryNiches = allNiches.filter(key => servicesData[key].primary);
  const secondaryNiches = allNiches.filter(key => !servicesData[key].primary);
  const nichesToShow = showAllNiches ? allNiches : primaryNiches;

  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <h2 className="section-title">Specialized Solutions for Ambitious Brands</h2>
        
        <div className={styles.tabs}>
          {nichesToShow.map(key => {
            const niche = servicesData[key];
            const isSpecialty = key === 'ecommerce';
            return (
              <button 
                key={key}
                className={`${styles.tab} ${activeTab === key ? styles.active : ''}`}
                onClick={() => handleTabClick(key)}
              >
                {niche.icon} {niche.title} {isSpecialty ? '(Specialty)' : ''}
              </button>
            );
          })}
          
          {secondaryNiches.length > 0 && (
            <button onClick={() => setShowAllNiches(!showAllNiches)} className={styles.toggleButton} >
              {showAllNiches ? 'Show Less' : `+ ${secondaryNiches.length} More Niches`}
            </button>
          )}
        </div>

        <div className={styles.tabContent}>
          <div className={styles.serviceList}>
            {servicesToShow.map((item, index) => (
              <div key={index} className={styles.serviceItem}>
                <div className={styles.serviceItemHeader}>
                  <div className={styles.checkmark}>✓</div>
                  <h4>{item.title}</h4>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          
          {activeService && activeService.items.length > 4 && (
            <div className={styles.toggleContainer}>
              <button onClick={() => setShowAllServices(!showAllServices)} className={styles.toggleButton}>
                {showAllServices ? 'Show Less' : `Show All ${activeService.items.length} Services`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;