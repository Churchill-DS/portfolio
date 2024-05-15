import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"


export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="Me in 3D" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon"/>
            <div className={styles.aboutItemText}>
                <h3>Front-end developer</h3>
                <p>I am a front-end developer with proficiency in building responsive and well optimized websites</p>
            </div>
            </li>
            <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="server icon"/>
            <div className={styles.aboutItemText}>
                <h3>Back-end developer</h3>
                <p>I have experience spanning a year and a half in developing fast and optimized back-end systems and API's</p>
            </div>
            </li>
            <li className={styles.aboutItem}><img src={getImageUrl("about/uiIcon.png")} alt="UI icon"/>
            <div className={styles.aboutItemText}>
                <h3>UI Design</h3>
                <p>I also craft visually captivating user interfaces that seemlessly blend aesthetics with functionality.</p>
            </div>
            </li>
        </ul>
        </div>
    </section>
  )
}
