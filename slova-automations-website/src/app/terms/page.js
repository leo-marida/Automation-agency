// src/app/terms/page.js
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// We can reuse the same styles from the privacy page for consistency
import styles from '../privacy/privacy.module.css';

const TermsOfUsePage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Terms of Use</h1>
          <p className={styles.lastUpdated}>Last Updated: July 2025</p>

          <h2>1. Agreement to Terms</h2>
          <p>By accessing our website, slovaautomations.com, you agree to be bound by these Terms of Use. If you disagree with any part of the terms, then you may not access the website.</p>

          <h2>2. Intellectual Property Rights</h2>
          <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>

          <h2>3. Prohibited Activities</h2>
          <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>

          <h2>4. Third-Party Websites</h2>
          <p>The Site may contain links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, or other content belonging to or originating from third parties ("Third-Party Content"). Such Third-Party Websites are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Site.</p>

          <h2>5. Disclaimer</h2>
          <p>The site is provided on an as-is and as-available basis. You agree that your use of the site and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the site and your use thereof.</p>

          <h2>6. Limitation of Liability</h2>
          <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the site.</p>

          <h2>7. Contact Us</h2>
          <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
          <p><strong>Slova Automations</strong><br/>
          <a href="mailto:contact@slovaautomations.com">contact@slovaautomations.com</a></p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfUsePage;