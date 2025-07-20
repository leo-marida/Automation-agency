// src/components/SolutionSection.js
import Image from 'next/image';
import styles from './SolutionSection.module.css';

const SolutionSection = () => {
  return (
    <section id="solution" className={styles.solutionSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.textContainer}>
          <h2 className={`section-title ${styles.title}`}>This is Where We Come In.</h2>
          <p className={styles.paragraph}>
            Slova Automations doesn't just build bots; we build intelligent, reliable systems that become your most valuable employees. By integrating powerful AI directly into your E-commerce workflow, we free you up to focus on what you do best: building your brand.
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