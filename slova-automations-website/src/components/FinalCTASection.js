// src/components/FinalCTASection.js
import styles from './FinalCTASection.module.css';

const FinalCTASection = () => {
  return (
    <section id="contact" className={styles.ctaSection}>
      <div className="container">
        <h2 className={styles.title}>Ready to Build Your Unfair Advantage?</h2>
        
        {/* --- ADD THIS NEW BLOCK --- */}
        <div className={styles.benefits}>
          <div>✓ A free, 30-minute strategy session.</div>
          <div>✓ A custom-tailored automation roadmap.</div>
          <div>✓ At least one actionable idea you can implement immediately.</div>
        </div>

        <p className={styles.text}>
          Let's find out how much time you could save and how much revenue you could recover. 
          <strong>There is no obligation and no hard sell.</strong>
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