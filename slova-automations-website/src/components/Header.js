// src/components/Header.js
'use client'; // This is now a client component because it uses state

import { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <a href="#">
            <Image src="/slova-logo2.png" alt="Slova Automations Logo" width={200} /* Increased base width */
              height={200} className={styles.logoImage} />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className={styles.navDesktop}>
          <a href="#services">Services</a>
          <a href="#case-studies">Case Studies</a> 
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
          <a href="#contact" className={styles.contactButton}>Contact</a>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Open menu">
          <FaBars />
        </button>
      </header>

      {/* Mobile Navigation Menu (Overlay) */}
      {isMenuOpen && (
        <div className={styles.navMobile}>
          <button className={styles.closeButton} onClick={toggleMenu} aria-label="Close menu">
            <FaTimes />
          </button>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#showcase" onClick={toggleMenu}>Case Studies</a>
          <a href="#how-it-works" onClick={toggleMenu}>How It Works</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </>
  );
};

export default Header;