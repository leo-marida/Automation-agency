// src/components/ProblemSection.js
import { FaShoppingCart, FaHeadset, FaChartLine } from 'react-icons/fa'; // New, more specific icons
import styles from './ProblemSection.module.css';

// --- NEW, E-COMMERCE FOCUSED PROBLEMS ---
const problems = [
  {
    icon: <FaShoppingCart />,
    title: "High Cart Abandonment",
    text: "Watching potential sales vanish every day because generic follow-up emails aren't compelling enough to bring customers back."
  },
  {
    icon: <FaHeadset />,
    title: "Overwhelming Support Tickets",
    text: "Your team is swamped answering the same 'Where is my order?' and 'What's your return policy?' questions over and over again."
  },
  {
    icon: <FaChartLine />,
    title: "Missed Growth Opportunities",
    text: "Lacking the time and tools to offer personalized product recommendations or proactively manage inventory levels."
  }
];

const ProblemSection = () => {
  return (
    <section id="problem" className={styles.problemSection}>
      <div className="container">
        <h2 className={`section-title ${styles.title}`}>The Silent Growth Killers of E-commerce</h2>
        <div className={styles.problemsGrid}>
          {problems.map((problem, index) => (
            <div key={index} className={styles.problemCard}>
              <div className={styles.iconWrapper}>{problem.icon}</div>
              <h3>{problem.title}</h3>
              <p>{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;