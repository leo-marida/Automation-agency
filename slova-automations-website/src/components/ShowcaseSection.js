// src/components/ShowcaseSection.js
'use client'; // This component now uses state, so it must be a client component

import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from './ShowcaseSection.module.css';

// --- YOUR VIDEO DATABASE (Stays the same) ---
const videos = [
  {
    title: "Automating Personalized Email Follow-ups with OpenAI",
    description: "Watch how we connect a Shopify trigger to GPT-4 to draft unique, human-like emails for cart recovery, boosting conversion rates.",
    youtubeVideoId: "dQw4w9WgXcQ" // <-- IMPORTANT: Replace with your real YouTube video ID
  },
  {
    title: "Building a 24/7 AI Customer Support Agent",
    description: "In this walkthrough, I build an intelligent agent that can answer common customer questions instantly, freeing up human support teams.",
    youtubeVideoId: "dQw4w9WgXcQ" // <-- Replace this too!
  },
  {
    title: "Scraping Leads and Populating a CRM Automatically",
    description: "See how we can automate the tedious process of finding and organizing new leads into a structured Airtable or Notion database.",
    youtubeVideoId: "dQw4w9WgXcQ" // <-- And this one!
  }
];

const ShowcaseSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? videos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === videos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Get the current video object based on the state
  const currentVideo = videos[currentIndex];

  return (
    <section id="case-studies" className={styles.showcaseSection}>
      <div className="container">
        <h2 className="section-title">Case Studies</h2>
        <p className={styles.subtitle}>
          I believe in showing, not just telling. Here are some real-world automations I've built, demonstrating the power of these tools.
        </p>
        
        <div className={styles.carouselContainer}>
          {/* Left Arrow */}
          <button onClick={goToPrevious} className={`${styles.arrow} ${styles.leftArrow}`} aria-label="Previous video">
            <FaArrowLeft />
          </button>
          
          {/* The Main Video Card */}
          <div className={styles.videoCard}>
            <div className={styles.videoEmbed}>
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo.youtubeVideoId}?key=${currentIndex}`} // Added key to force re-render
                title={currentVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.videoContent}>
              <h3>{currentVideo.title}</h3>
            </div>
          </div>
          
          {/* Right Arrow */}
          <button onClick={goToNext} className={`${styles.arrow} ${styles.rightArrow}`} aria-label="Next video">
            <FaArrowRight />
          </button>
        </div>
        
        {/* Description below the carousel */}
        <p className={styles.videoDescription}>{currentVideo.description}</p>
      </div>
    </section>
  );
};

export default ShowcaseSection;