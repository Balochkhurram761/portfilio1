import React from 'react'
import styles from "../../styles/section4/Section4.module.css"
import cards from '../../arraydata/section4Array/Section4Array'
const Section4 = () => {
  return (
    <div className={styles.container}>
      <div id='section4' className={styles.section4}>
        <div className={styles.body}>
        <h3>Features</h3>
        <h1>Our Services</h1>
        </div>
        <div className={styles.cards}>
          {cards.map((e,index)=>{
            return(
           
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={e.image} alt="" />
            </div>
            <div className={styles.cardbody}>
              <h1>{e.title}</h1>
              <p>{e.description}</p>
            </div>
          </div>
             
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Section4