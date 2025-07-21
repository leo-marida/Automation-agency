// src/app/page.js
'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import WhyUsSection from '@/components/WhyUsSection'; 
import ScrollToTopButton from '@/components/ScrollToTopButton'; 
import styles from './page.module.css';

// --- KEY CHANGE IS HERE ---
// We now pass the Header component into the Hero component
const Hero = ({ children }) => {
  return (
    <section className={styles.hero}>
      {children} {/* This will render the Header */}
      <div className="container">
        <motion.h1 
          className={styles.mainHeadline}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Stop Losing Sales. Start Automating.
        </motion.h1>
        <motion.p 
          className={styles.subHeadline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We build custom AI agents for E-commerce stores that recover abandoned carts, provide 24/7 customer support, and put your growth on autopilot.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="https://calendly.com/slova-automations/15min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button"
          >
            Book My Free Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Main page component
export default function Home() {
  return (
    <main>
      <Hero>
        <Header />
      </Hero>
      <AnimatedSection><ProblemSection /></AnimatedSection>
      <AnimatedSection><SolutionSection /></AnimatedSection>
      <AnimatedSection><HowItWorksSection /></AnimatedSection>
      <AnimatedSection><WhyUsSection /></AnimatedSection>
      <AnimatedSection><ShowcaseSection /></AnimatedSection> 
      <AnimatedSection><ServicesSection /></AnimatedSection>
      <AnimatedSection><AboutSection /></AnimatedSection>
      <FinalCTASection />
      <Footer />
      <ScrollToTopButton /> 
    </main>
  );
}