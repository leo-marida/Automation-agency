// src/components/ProblemSection.js
import { FaClock, FaShoppingCart, FaRegSmileBeam } from 'react-icons/fa';
import styles from './ProblemSection.module.css';

const problems = [
  {
    icon: <FaClock />,
    text: "Countless hours lost to repetitive customer emails and manual data entry."
  },
  {
    icon: <FaShoppingCart />,
    text: "Frustration from watching abandoned cart notifications pile up, knowing it's lost revenue."
  },
  {
    icon: <FaRegSmileBeam />,
    text: "The challenge of providing personalized support to every customer as your store grows."
  }
];

const ProblemSection = () => {
  return (
    <section id="problem" className={styles.problemSection}>
      <div className="container">
        <h2 className={`section-title ${styles.title}`}>Does This Sound Familiar?</h2>
        <div className={styles.problemsGrid}>
          {problems.map((problem, index) => (
            <div key={index} className={styles.problemCard}>
              <div className={styles.iconWrapper}>{problem.icon}</div>
              <p>{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;