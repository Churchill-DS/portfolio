import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      `.${styles.headshot}`,
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: `.${styles.container}`,
          start: "top 80%",
          end: "top 30%",
          scrub: true
        }
      }
    );

    gsap.fromTo(
      `.${styles.title}`,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.2,
        scrollTrigger: {
          trigger: `.${styles.container}`,
          start: "top 80%",
          end: "top 30%",
          scrub: true
        }
      }
    );
    gsap.fromTo(
      `.${styles.description}`,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.4,
        scrollTrigger: {
          trigger: `.${styles.container}`,
          start: "top 80%",
          end: "top 30%",
          scrub: true
        }
      }
    );

  
    gsap.fromTo(
      `.${styles.topBlur}`,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: `.${styles.container}`,
          start: "top 80%",
          end: "top 30%",
          scrub: true
        }
      }
    );

    gsap.fromTo(
      `.${styles.bottomBlur}`,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: `.${styles.container}`,
          start: "top 80%",
          end: "top 30%",
          scrub: true
        }
      }
    );
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.headshot}
          src={getImageUrl("hero/me.png")}
          alt="Emmanuel Okinyi"
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Emmanuel Okinyi</h1>
        <h2 className={styles.description}>
          I'm a full-stack developer with 2 years of experience using JavaScript, and Python as my primary programming languages.
          I am passionate about tech, ready to dive into new projects with amazing software solutions.
          Feel free to reach out to learn more.
        </h2>
        <a className={styles.contactBtn} href="mailto:emmanuelokinyi799@gmail.com">Contact me</a>
      </div>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
