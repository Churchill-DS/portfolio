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
            <a href="mailto:danielotieno189@gmail.com"><img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/></a>
            <a href="mailto:danielotieno189@gmail.com">danielotieno189@gmail.com</a>
        </li>
        <li className={styles.link}>
            <a href="https://github.com/Churchill-DS"><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/></a>
            <a href='https://github.com/Churchill-DS'>Churchill-DS</a>
        </li>
        <li className={styles.link}>
            <a href="tel:+254798813627"><img src={getImageUrl("contact/call.png")} alt="Instagram icon"/></a>
            <a href='tel:+254798813627'>+254798813627</a>
        </li>
        <li className={styles.link}>
            <a href="https://www.linkedin.com/in/otieno-churchil-aa82b3197/"><img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn icon"/></a>
             <a href='https://www.linkedin.com/in/otieno-churchil-aa82b3197/'>Otieno Churchill</a>
        </li>
    </ul>
   </footer>
   <div className={styles.backcontainer}>
   <a className={styles.back} href="#back"><span>Back</span></a>
   </div>
   </>
  )
}
