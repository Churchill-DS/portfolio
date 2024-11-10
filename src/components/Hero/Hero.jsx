import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {

  const headshotRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const topBlurRef = useRef(null);
  const bottomBlurRef = useRef(null);

  useEffect(() => {
    // Animate headshot image
    gsap.fromTo(
      headshotRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }
    );

    // Typing animation for title text
    const titleText = "Hi there, I'm Emmanuel"; // Static text for the title
    const titleSpan = titleRef.current;
    titleSpan.innerHTML = ''; // Clear existing content

    const letters = titleText.split('').map((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      titleSpan.appendChild(span);
      return span;
    });

    gsap.fromTo(
      letters,
      { opacity: 0, x: 10 }, // Letters start invisible and slightly offset
      {
        opacity: 1,
        x: 0,
        stagger: 0.1, // Delay between each letter's animation
        duration: 0.3, // Speed of each letter appearing
        ease: "power1.out",
        delay: 0.5 // Delay before typing starts
      }
    );

    // Animate description text
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 2, ease: "power2.out" }
    );

    // Animate blur effects
    gsap.fromTo(
      topBlurRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 2.2, ease: "power2.out" }
    );

    gsap.fromTo(
      bottomBlurRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 2.2, ease: "power2.out" }
    );
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          ref={headshotRef}
          className={styles.headshot}
          src={getImageUrl("hero/me.png")}
          alt="Emmanuel Okinyi"
        />
      </div>
      <div className={styles.content}>
        <h1 ref={titleRef} className={styles.title}>
          {/* The text will be animated by GSAP */}
        </h1>
        <h2 ref={descriptionRef} className={styles.description}>
          I'm a full-stack developer with 2 years of experience using JavaScript and Python as my primary programming languages.
          I am passionate about tech, ready to dive into new projects with amazing software solutions.
          Feel free to reach out to learn more.
        </h2>
        <a className={styles.contactBtn} href="mailto:emmanuelokinyi799@gmail.com">Contact me</a>
      </div>
      <div ref={topBlurRef} className={styles.topBlur}></div>
      <div ref={bottomBlurRef} className={styles.bottomBlur}></div>
    </section>
  );
};
