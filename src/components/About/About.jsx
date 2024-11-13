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
              <h3>Front-end developer</h3>
              <p>I am a front-end developer with proficiency in building responsive and well-optimized websites.</p>
            </div>
          </li>
          <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="server icon"/>
            <div className={styles.aboutItemText}>
              <h3>Back-end developer</h3>
              <p>I have experience spanning a year and a half in developing fast and optimized back-end systems and APIs.</p>
            </div>
          </li>
          <li className={styles.aboutItem}><img src={getImageUrl("about/uiIcon.png")} alt="UI icon"/>
            <div className={styles.aboutItemText}>
              <h3>UI Design</h3>
              <p>I craft visually captivating user interfaces that seamlessly blend aesthetics with functionality.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
