import React from 'react'
import styles from "../../styles/section5/Section5.module.css"
import portfolio from '../../arraydata/section5Array/Section5Array'
const Section5 = () => {
  return (
   <div className={styles.container}>
    <div id='section5' className={styles.section5}>
        <div className={styles.body}>
            <h3>Visit my portfolio and keep your feedback</h3>
            <h1>My Portfolio</h1>
        </div>
        <div className={styles.cards}>
            {portfolio.map((e,index)=>{
                return(
           
            <div className={styles.card}>
                <a href={e.link} target='_blank'>
                <div className={styles.img}>
                    <img src={e.image} alt="" />
                </div>
                <div className={styles.cardbody}>
                    <h1>{e.title}</h1>
                </div>
                </a>
            </div>
           
              )
            })}
        </div>

    </div>
   </div>
)
}

export default Section5