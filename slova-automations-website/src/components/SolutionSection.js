// src/components/SolutionSection.js
import Image from 'next/image';
import styles from './SolutionSection.module.css';

const SolutionSection = () => {
  return (
    <section id="solution" className={styles.solutionSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.textContainer}>
          {/* --- UPGRADED HEADLINE --- */}
          <h2 className={`section-title ${styles.title}`}>We Turn Your Biggest Headaches into Your Greatest Strengths.</h2>
          
          {/* --- UPGRADED TEXT --- */}
          <p className={styles.paragraph}>
            Slova Automations builds more than just bots—we build your new, 24/7 digital workforce. We take the repetitive, time-consuming tasks that are slowing you down and transform them into intelligent, automated systems that drive revenue, delight customers, and free you up to focus on growth.
          </p>
        </div>
        <div className={styles.visualContainer}>
          <div className={styles.logoSpinner}>
            <Image src="/slova-logo2.png" alt="Slova Automations Logo" width={500} height={500} className={styles.logoImage}/>  
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;