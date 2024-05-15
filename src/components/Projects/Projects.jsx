import React from 'react'
import projects from '../../data/projects.json'
import { getImageUrl } from '../../utils'
import styles from "./Projects.module.css"

export const Projects = () => {
  return (
    <section className={styles.container} id='projects'>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {projects.map((project, id) => {
                return (
                <div className={styles.cardcontainer} key={id}>
                    <img src={getImageUrl(project.imageSrc)} alt={`Image of ${project.title}`} className={styles.image}/>
                    <h3 className={styles.cardtitle}>{project.title}</h3>
                    <p className={styles.description}>{project.description}</p>
                    <ul className={styles.skills}>
                        {project.skills.map((skill, id) => {
                            return(<li className={styles.skill} key={id}>{skill}</li>)})}
                    </ul>
                    <div className={styles.links}>
                        <a href={project.demo} className={styles.link}><span>Demo</span></a>
                        <a href={project.source} className={styles.link}><span>Source</span></a>
                    </div>
                </div>);
            })}
        </div>
    </section>
  )
}

