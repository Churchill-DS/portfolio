import React from 'react';
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

export const Experience = () => (
  <section className={styles.container} id='experience'>
    <h2 className={styles.title}>Experience</h2>
    <ul className={styles.history}>
      {history.map((historyItem, id) => (
        <li key={id} className={styles.historyItem}>
          <img src={getImageUrl(historyItem.imageSrc)} alt={historyItem.organisation} />
          <div className={styles.historyItemDetails}>
            <h3>{`${historyItem.role}`}</h3>
            <h2>{`${historyItem.organisation}`}</h2>
            <p>{`${historyItem.startDate} to ${historyItem.endDate}`}</p>
            <ul>
              {historyItem.experiences.map((experience, expId) => (
                <li key={expId}>{experience}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  </section>
);
