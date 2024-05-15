
import React from 'react';
import skills from '../../data/skills.json';
import {getImageUrl} from '../../utils';
import history from "../../data/history.json";
import styles from  "./Experience.module.css";

export const Experience = () => {
  
  
  return (
    <section className={styles.container}id='experience'>
       <h2 className={styles.title}>Skills and  Experience</h2>
      <div className={styles.content}>
        
        <div className={styles.skills}>{
          skills.map((skill,id) =>{

            const duration = Math.random() * (5 - 2) + 2; 
                const delay = Math.random() * 3; 
            
            return <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}><img className={styles.experienceImage} src={getImageUrl(skill.imageSrc)} alt={skill.title}
               style={{
                animationDuration: `${duration}s`,
                animationDelay: `-${delay}s`
            }}
              /></div>
              <p>{skill.title}</p>
            </div>
          })
          }</div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return <li key={id} className={styles.historyItem}>
              <img  src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation}`}/>
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate}  to  ${historyItem.endDate}`}</p>
                <ul>{historyItem.experiences.map((experience,id) =>{
                  return <li key={id}>{experience}</li>
                }
              )}</ul>
              </div>
            </li>
          })}
        </ul>
      </div>

    </section>
  )
}
