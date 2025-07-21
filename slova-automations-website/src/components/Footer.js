// src/components/Footer.js
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        
        {/* Column 1: Logo and Mission Statement */}
        <div className={styles.footerBrand}>
          <a href="/" aria-label="Back to top">
            <Image src="/white_on_trans.png" alt="Slova Automations Logo" width={200} height={200} />
          </a>
          <p className={styles.missionStatement}>
            Building intelligent systems to put your business growth on autopilot.
          </p>
          <p className={styles.copyright}>© 2025 Slova Automations. All Rights Reserved.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className={styles.footerLinks}>
          <h4>Navigate</h4>
          <ul>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#why-us">Why Us?</a></li>
            <li><a href="/#case-studies">Case Studies</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Use</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className={styles.footerContact}>
          <h4>Get in Touch</h4>
          <p>Ready to automate your success?</p>
          <a href="mailto:contact@slovaautomations.com" className={styles.emailLink}>
            contact@slovaautomations.com
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;