import React, { use, useEffect, useState } from 'react'
import styles from '../../styles/section1/Section1.module.css'
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Section1 = () => {
  const text=["Profesional Coder", "Developer"]
  const [currentstate,setcurrentstate]=useState("")
  const [endValue,setendValue]=useState(1)
  const [isForward, setisForward]=useState(true)
  const [index,setindex]=useState(0)
  useEffect(()=>{
    const  intervalId=setInterval(() => {
      setcurrentstate(text[index].substring(0,endValue));
      if(isForward){
        setendValue((prev)=>prev+1);
      }
      else{
        setendValue((prev)=>prev-1)
      }
      if(endValue>=text[index].length){
        setisForward(false)
      }
      if(endValue<1){
        setisForward(true)
        setindex((prev)=>(prev+1)%text.length)
      }
    }, 100);
    return ()=>clearInterval(intervalId)
  },[endValue,isForward,index,text])
  return (
   <>    <div className={styles.container}>
   <div  className={styles.section1}>
    
    <div className={styles.data}>
    <div className={styles.info}>
    <h3>welcome to my world</h3>
    <h1>Hi, I'm <span> Khurram</span> <br /> <span> a  {currentstate}</span> </h1>
    </div>
    <div className={styles.socialLink}>
        <h3>Find with Me</h3>
        <div className={styles.links}>
            <a href="https://www.facebook.com/share/1Ae6YkQbi2/"><FaFacebook /></a>
            <a href="https://github.com/Balochkhurram761"><FaGithub /> </a>
            <a href=""><FaLinkedin /></a>
        </div>
    </div>

    </div>
    <div className={styles.imageSection}>
        <img src="/assets/Section1/info3.PNG" alt="" />
    </div>
   </div>
   
   </div>
  <hr className={styles.line} />
   </>

  )
}

export default Section1