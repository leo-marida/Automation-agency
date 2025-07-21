// src/components/Footer.js
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoInfo}>
          <Image src="/slova-logo.jpg" alt="Slova Automations Logo" width={100} height={100} />
          <p>© 2025 Slova Automations. All Rights Reserved.</p>
          <p className={styles.emailLink}>
            <a href="mailto:contact@slovaautomations.com">
              contact@slovaautomations.com
            </a>
          </p>
        </div>
        {/* <div className={styles.socialLinks}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;