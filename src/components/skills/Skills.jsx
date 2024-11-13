// Skills.jsx
import React from 'react';
import skills from '../../data/skills.json';
import { getImageUrl } from '../../utils';
import styles from "./skills.module.css";

const SkillCategory = ({ title, skills }) => (
  <div className={styles.skillCategory}>
    <h3 className={styles.categoryTitle}>{title}</h3>
    <div className={styles.skills}>
      {skills.map((skill, id) => {
        const duration = Math.random() * (5 - 2) + 2; 
        const delay = Math.random() * 3;
        return (
          <div key={id} className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img
                className={styles.experienceImage}
                src={getImageUrl(skill.imageSrc)}
                alt={skill.title}
                style={{
                  animationDuration: `${duration}s`,
                  animationDelay: `-${delay}s`,
                }}
              />
            </div>
            <p>{skill.title}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export const Skills = () => (
  <section className={styles.container} id='skills'>
    <h2 className={styles.title}>Skills</h2>
    <div className={styles.content}>
      <SkillCategory title="Programming Languages" skills={skills.languages} />
      <SkillCategory title="Frameworks" skills={skills.frameworks} />
      <SkillCategory title="Version Control" skills={skills.versionControl} />
      <SkillCategory title="Database Management" skills={skills.databaseManagement} />
      <SkillCategory title="Design Tools" skills={skills.designTools} />
    </div>
  </section>
);
