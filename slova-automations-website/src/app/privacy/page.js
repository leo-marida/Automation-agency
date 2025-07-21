// src/app/privacy/page.js
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './privacy.module.css';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Privacy Policy for Slova Automations</h1>
          <p className={styles.lastUpdated}>Last Updated: July 2025</p>

          <h2>1. Introduction</h2>
          <p>Welcome to Slova Automations. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, slovaautomations.com. Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>

          <h2>2. Data We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
          <ul>
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name and email address, that you voluntarily give to us when you book a call through our third-party scheduling service, Calendly.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site. This is collected through services like Google Analytics.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
          <ul>
            <li>Respond to your requests for a discovery call and schedule meetings.</li>
            <li>Analyze website usage and trends to improve our website and your experience.</li>
            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
          </ul>

          <h2>4. Third-Party Services</h2>
          <p>We use third-party services for core functionalities of our website. Please review their privacy policies to understand how they handle your data.</p>
          <ul>
            <li><strong>Calendly:</strong> We use Calendly for scheduling discovery calls. When you book a call, you are providing your information directly to Calendly, which is governed by their privacy policy.</li>
            <li><strong>Google Analytics:</strong> We use Google Analytics to understand our website traffic and user behavior. This service tracks and reports website traffic.</li>
          </ul>

          <h2>5. Security of Your Information</h2>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

          <h2>6. Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <p><strong>Slova Automations</strong><br/>
          <a href="mailto:contact@slovaautomations.com">contact@slovaautomations.com</a></p>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;