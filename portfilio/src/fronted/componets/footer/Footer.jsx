import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styles from "../../styles/footer/Footer.module.css"
const Footer = () => {
  return (
    <div id='foooter' className={styles.footer}>
           <div className={styles.info}>
             <h1>info</h1>
           
               <p>I am <span> Khurram Ali Khan </span>, a Full Stack Developer.</p>
              <p>I am available for freelance work. Connect with me via and call in to my account.</p>
           </div>
           <div className={styles.contact}>
               <h1>Contact Detail</h1>
               <div className={styles.phone}>
                   <p>phone:</p>
                   <p>+923054372019</p>
               </div>
               <div className={styles.phone}>
                   <p>Email:</p>            
                   <p>Khurramjaffery12@gmail.com</p>
                   </div>
           </div>
           <div className={styles.links}>
             <h1>Socail Link</h1>
             <div className={styles.link}>
              <a href="https://www.facebook.com/share/1Ae6YkQbi2/" target='_blank'><FaFacebook /></a>
               <a href="https://github.com/Balochkhurram761" target='_blank' ><FaGithub /> </a>
               <a href=""><FaLinkedin /></a>
               </div>
           </div>
       </div>
  )
}

export default Footer