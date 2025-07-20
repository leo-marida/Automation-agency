// src/components/AboutSection.js
import Image from 'next/image';
import styles from './AboutSection.module.css';

const AboutSection = () => {
    return (
        <section id="about" className={styles.aboutSection}>
            <div className={`container ${styles.container}`}>
                <div className={styles.imageContainer}>
                    {/* Add your professional headshot to the public folder and name it 'headshot.jpg' */}
                    <Image src="/profilePic.jpg" alt="Leonard Marida" width={300} height={300} className={styles.headshot} />
                </div>
                <div className={styles.textContainer}>
                    <h2 className={`section-title ${styles.title}`}>Founded by a Builder, for Builders.</h2>
                    <p>
                        Hi, I'm Leonard Marida. As a Software Engineer, I've spent years immersed in the logic and power of code. I founded Slova Automations with one goal: to apply that deep technical expertise to solve real-world business problems. I don't just connect apps; I build robust, intelligent systems designed for efficiency and growth.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;