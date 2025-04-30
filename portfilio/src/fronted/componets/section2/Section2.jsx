import React from 'react'
import styles from "../../styles/section2/Section2.module.css"
import "animate.css"
const Section2 = () => {
  return (
    <div className={styles.container}>
      <div id='section2' className={` animate__animated  animate__backInLeft ${styles.section2}`}>
        <div className={styles.img}>
          <img src="/assets/Section2/khurram.jpeg" alt="" />
        </div>
        <div className={styles.info}>
          <h1>Who is <span> Khurram Ali <br /> khan</span></h1>
          <p>Every great project begins with a spark of curiosity and a refusal to settle for the ordinary. khurram ali khan is the embodiment of that spirit—someone who doesn’t just code, but reimagines what’s possible. From a young passion for technology to leading innovative digital solutions, khurram journey is defined by a relentless pursuit of knowledge and a drive to make an impact.</p>
          <p>With an instinct for turning challenges into opportunities, he’s not just building applications—he’s shaping the future of digital experiences. As the founder of AFNANCODER, Khurram blends expertise in full-stack development with a visionary approach to business, where every project is an exploration of what can be achieved when creativity and technology unite.</p>
          <a href="/cv/cv.pdf" download > <button>Download CV</button></a>
        </div>
      </div>
    </div>
  )
}

export default Section2