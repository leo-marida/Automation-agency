// src/components/FinalCTASection.js
import styles from './FinalCTASection.module.css';

const FinalCTASection = () => {
  return (
    <section id="contact" className={styles.ctaSection}>
      <div className="container">
        <h2 className={styles.title}>Ready to Build Your Unfair Advantage?</h2>
        <p className={styles.text}>
          Let's find out how much time you could save and how much revenue you could recover. Your personalized automation strategy is just one call away.
        </p>
        <a 
          href="https://calendly.com/slova-automations/15min" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.ctaButton}
        >
          Book My Free Strategy Call
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;