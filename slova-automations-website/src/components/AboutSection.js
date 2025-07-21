// src/components/AboutSection.js
'use client'; 

import { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from './AboutSection.module.css';

const teamMembers = [
  {
    name: "Leonard Marida",
    title: "Founder & Lead Automation Engineer",
    image: "/profilePic.jpg",
    description: "As a Software Engineer, I've spent years immersed in the logic and power of code. I founded Slova Automations with one goal: to apply that deep technical expertise to solve real-world business problems. I don't just connect apps; I build robust, intelligent systems designed for efficiency and growth."
  },
  // {
  //   name: "Jane Doe",
  //   title: "Client Strategy & Onboarding Specialist",
  //   image: "/jane-doe.jpg",
  //   description: "With a background in client relations, Jane ensures every project is perfectly aligned with our clients' goals from day one. She is the bridge between your business needs and our technical solutions."
  // }
];

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? teamMembers.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLast = currentIndex === teamMembers.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentMember = teamMembers[currentIndex];
  const hasMultipleMembers = teamMembers.length > 1;

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <h2 className={`section-title ${styles.title}`}>
          {hasMultipleMembers ? "Meet Our Team of Builders" : "Founded by a Builder, for Builders"}
        </h2>
        
        {/* The main container for the card and arrows */}
        <div className={styles.carouselContainer}>
          {/* Card now has a dynamic class for the hover effect */}
          <div className={`${styles.teamCard} ${hasMultipleMembers ? styles.interactive : ''}`}>
            <div className={styles.imageContainer}>
              <Image src={currentMember.image} alt={currentMember.name} width={250} height={250} className={styles.headshot} />
            </div>
            <div className={styles.textContainer}>
              <h3>{currentMember.name}</h3>
              <h4>{currentMember.title}</h4>
              <p>{currentMember.description}</p>
            </div>
          </div>

          {/* Arrows are now outside the card and only render if needed */}
          {hasMultipleMembers && (
            <>
              <button onClick={goToPrevious} className={`${styles.arrow} ${styles.leftArrow}`} aria-label="Previous team member">
                <FaArrowLeft />
              </button>
              <button onClick={goToNext} className={`${styles.arrow} ${styles.rightArrow}`} aria-label="Next team member">
                <FaArrowRight />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;