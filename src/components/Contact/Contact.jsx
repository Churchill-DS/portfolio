import React from 'react'
import {getImageUrl} from '../../utils';
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <>
   <footer  className={styles.container} id='contacts'>
    <div className={styles.text}>
    <h2>Contact</h2>
    <p>Feel free to reach me out at</p>
    </div>
    
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
            <a href="mailto:emmanuelokinyi799@gmail.com">emmanuelokinyi799@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/>
            <a href='https://github.com/emmanuelokinyi'>github.com/emmanuelokinyi</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/instagram.png")} alt="Instagram icon"/>
            <a href='https://www.instagram.com/manu.el._?igsh=MTRrdDdtdHUxeG93OA=='>instagram.com/manu.el._</a>
        </li>
    </ul>
   </footer>
   <div className={styles.backcontainer}>
   <a className={styles.back} href="#back"><span>Back</span></a>
   </div>
   </>
  )
}
