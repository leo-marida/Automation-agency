// src/components/WhyUsSection.js
import { FaCode, FaBullseye, FaHandshake } from 'react-icons/fa';
import styles from './WhyUsSection.module.css';

const differentiators = [
  { icon: <FaCode />, title: "Technical Expertise", text: "Founded by a software engineer, we don't just connect apps. We build robust, custom logic for maximum efficiency and reliability." },
  { icon: <FaBullseye />, title: "ROI-Focused Strategy", text: "We don't build automations for fun. Every solution is designed with one goal in mind: to save you time, capture more leads, or increase your revenue." },
  { icon: <FaHandshake />, title: "A True Partner", text: "We believe in long-term relationships. We provide ongoing support and optimization to ensure your systems evolve with your business." }
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className={styles.whyUsSection}>
      <div className="container">
        <h2 className="section-title">Why Slova Automations?</h2>
        <div className={styles.grid}>
          {differentiators.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;