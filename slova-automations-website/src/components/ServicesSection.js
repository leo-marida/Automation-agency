// src/components/ServicesSection.js
import { FaShoppingCart, FaHome, FaCogs } from 'react-icons/fa';
import styles from './ServicesSection.module.css';

const services = [
    {
      icon: <FaShoppingCart />,
      title: "E-commerce Stores",
      description: "From Shopify to custom-built stores, we specialize in driving sales and efficiency for online merchants.",
      subservices: [
          "AI-Powered Abandoned Cart Recovery", 
          "24/7 Intelligent Customer Support Agent", 
          "Personalized Product Recommendations",
          "Automated Inventory Forecasting"
      ]
    },
    {
      icon: <FaHome />,
      title: "Real Estate Professionals",
      description: "Automate lead qualification, appointment scheduling, and client follow-up to give you more time to close deals.",
      subservices: [
          "Automated Lead Qualification & Nurturing",
          "Intelligent Appointment Scheduling",
          "Automated Market Report Generation",
          "Client Follow-up Sequences"
      ]
    },
    {
      icon: <FaCogs />,
      title: "SaaS Companies",
      description: "Enhance user onboarding, automate support tickets, and analyze user feedback with custom AI assistants.",
      subservices: [
          "Automated User Onboarding Flows",
          "AI-Powered Support Ticket Triage",
          "User Feedback Sentiment Analysis",
          "Proactive Churn Risk Alerts"
      ]
    }
];

// The rest of the component remains the same
const ServicesSection = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <h2 className="section-title">Specialized Solutions for Ambitious Brands</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.subservices.length > 0 && 
                <ul className={styles.subserviceList}>
                  {service.subservices.map((sub, i) => <li key={i}>{sub}</li>)}
                </ul>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection;