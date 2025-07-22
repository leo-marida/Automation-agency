// src/components/ProblemSection.js
import { FaShoppingCart, FaHeadset, FaChartLine } from 'react-icons/fa';
import styles from './ProblemSection.module.css';

// --- UPGRADED, MORE PERSUASIVE CONTENT ---
const problems = [
  {
    icon: <FaShoppingCart />,
    title: "You're Losing Sales in Plain Sight",
    text: "Every abandoned cart is a customer who wanted to buy. Without an intelligent recovery system, you're letting guaranteed revenue slip through your fingers every single day."
  },
  {
    icon: <FaHeadset />,
    title: "Your Team is Drowning in Repetitive Work",
    text: "Your best people are wasting valuable time answering the same basic questions. This drains resources and prevents them from focusing on high-value customer interactions."
  },
  {
    icon: <FaChartLine />,
    title: "Your Growth Has Hit a Wall",
    text: "You're leaving money on the table by not offering the personalized, Amazon-level experience that turns one-time buyers into loyal, repeat customers."
  }
];

const ProblemSection = () => {
  return (
    <section id="problem" className={styles.problemSection}>
      <div className="container">
        {/* A slightly refined headline */}
        <h2 className={`section-title ${styles.title}`}>Are These Silent Killers Stalling Your Growth?</h2>
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