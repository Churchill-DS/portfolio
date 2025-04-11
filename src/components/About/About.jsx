import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  useEffect(() => {
    const aboutImage = `.${styles.aboutImage}`;
    const aboutItems = `.${styles.aboutItem}`;

    gsap.fromTo(
      aboutImage,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: aboutImage,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      aboutItems,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: `#about`,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

  }, []);

  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="Me in 3D" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon"/>
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>I specialize in transforming raw data into actionable insights using tools like Excel, SQL, and Power BI to support informed decision-making.</p>
            </div>
          </li>
          <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="server icon"/>
            <div className={styles.aboutItemText}>
              <h3>Statistical & Predictive Analysis</h3>
              <p>With a solid foundation in statistics and machine learning, I interpret trends and build models that reveal hidden patterns and forecast outcomes.</p>
            </div>
          </li>
          <li className={styles.aboutItem}><img src={getImageUrl("about/uiIcon.png")} alt="UI icon"/>
            <div className={styles.aboutItemText}>
              <h3>Data Visualization</h3>
              <p>I design clear, compelling dashboards and visual reports that make complex data easy to understand for both technical and non-technical audiences..</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
