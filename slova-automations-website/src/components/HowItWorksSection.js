import styles from './HowItWorksSection.module.css';

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We start with a free, no-pressure call to understand your biggest challenges and identify the highest-impact automation opportunities."
  },
  {
    number: "02",
    title: "Build & Deploy",
    description: "Our team designs and builds your custom AI agent. We handle all the technical work and integrate it seamlessly into your store."
  },
  {
    number: "03",
    title: "Support & Optimize",
    description: "We don't just launch and leave. We provide ongoing support and monitor performance to ensure your automation is delivering maximum ROI."
  }
]

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className={styles.howItWorksSection}>
      <div className="container">
        <h2 className={`section-title ${styles.title}`}>Your Path to Effortless Automation</h2>
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineNumber}>{step.number}</div>
              <div className={styles.timelineContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection;