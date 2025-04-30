import React, { useState } from 'react'
import styles from "../../styles/section3/Section3.module.css"
import dataexperience from '../../arraydata/section3Array/Section3'
const Section3 = () => {
    
  return (
   <div id='section3' className={`animate__animated  animate__backInLeft hidden ${styles.container}`}>
    <div className={styles.section3}>
        <div className={styles.heading}>
            <h3>Crafting Visual Excellence With</h3>
            <h1>My Expertise </h1>
        </div>
      
        <div className={styles.card}>
        {dataexperience.map((e,index)=>{
          return(
            <div className={styles.cards}>
           <div className="img">
            <img src={e.image} alt="" />
            <h2>{e.title}</h2>
           </div>
          
           </div>
          )
        })}
        </div>
       </div>
   
   </div>
  )
}

export default Section3