import styles from './HowItWorksSection.module.css';

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We start with a free call to deeply understand your business. Together, we'll pinpoint the exact automation opportunities that will deliver the highest return on investment."
  },
  {
    number: "02",
    title: "Custom Build & Integration",
    description: "This is where we do the heavy lifting. Our team designs, builds, and rigorously tests your custom AI solution, ensuring it integrates seamlessly with your existing workflow."
  },
  {
    number: "03",
    title: "Launch & Partnership",
    description: "Our job isn't done at launch. We provide ongoing support and performance monitoring to ensure your new systems are delivering measurable results, month after month."
  }
];
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