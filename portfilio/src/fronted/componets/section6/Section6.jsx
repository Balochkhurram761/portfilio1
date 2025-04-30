import React, { useState } from 'react'
import styles from "../../styles/section6/Section6.module.css"
import { RxValue } from 'react-icons/rx'
import "animate.css";

import axios from 'axios'
const Section6 = () => {
    const [error,seterror]=useState("")
    const [Message,setMessage]=useState("")
    const [form,setform]=useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        message:""
    })
    const handler=(e)=>{
        const {name,value}=e.target
        setform({
            ...form,
            [name]:value 
        })
    }
    const valid=()=>{
        const newErrors = {};

        if(!form.firstname) newErrors.firstname= "Enter your frist name"
    
        if(!form.lastname) newErrors.lastname= "Enter your frist name"
    
        if(!form.email){ 
            newErrors.email= "Enter your frist name"
        }
        else{

       
    
       const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/;
       if (!emailPattern.test(form.email)) newErrors.email= "Only @gmail.com or @yahoo.com emails allowed";
        }
    

        if(!form.phone) { 
            newErrors.phone= "Enter your phone number"
        }
        else{

        
        const phonePattern = /^\+92\d{10}$/;
        if (!phonePattern.test(form.phone)) newErrors.phone= "Enter a valid Pakistani phone number starting with +92 followed by 10 digits";
         }
        if(!form.message)  newErrors.message= "Enter your message"
        
      
        return newErrors;
    }

    const sumbitbutton=async(e)=>{
        e.preventDefault();
        const validationErrors = valid();
        if (Object.keys(validationErrors).length > 0) {
        seterror(validationErrors);
          return;
        }
        seterror({}); 
        try{
         
        
       const response = await axios.post("http://localhost:5000/api/auth/send", form);
       if (response.data.message === "Email sent successfully") {
        setMessage("Email is sent successfully");
      } else {
        setMessage("Server Error");
      }
        }
        catch(error){
            setMessage("Server Error")
        }
    }
  return (
  <div className={styles.container}>
    <div id='section6'  className={`animate__animated animate__backInDown  ${styles.section6}`}>
        <h1>Let's Contact!</h1>
        <div className={styles.form}>
            <form action="" onSubmit={sumbitbutton}>
                <div className={styles.inputs}>
                <div className={styles.input}>
                    <label htmlFor="">First Name</label>
                    <input type="text"  name="firstname" value={form.firstname} onChange={handler} id="" />
                    {error && <p style={{color:"red"}} >{error.firstname}</p>}
                </div>
                <div className={styles.input}>
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lastname" value={form.lastname} onChange={handler} id="" />
                    {error && <p style={{color:"red"}} >{error.lastname}</p>}
                </div>
                </div>
                <div className={styles.inputs}>
                <div className={styles.input}>
                    <label htmlFor="">Your Email</label>
                    <input type="email" name="email" value={form.email} onChange={handler} id="" />
                    {error && <p style={{color:"red"}} >{error.email}</p>}
                </div>
                <div className={styles.input}>
                    <label htmlFor="">Contact Number</label>
                    <input type="text" name="phone" value={form.phone} onChange={handler} id="" />
                    {error && <p style={{color:"red"}} >{error.phone}</p>}

                </div>
                </div>
                <div className={styles.input}>
                    <label htmlFor="">Comment or Message</label>
                    <textarea name='message' value={form.message} onChange={handler} ></textarea>
                    {error && <p style={{color:"red"}} >{error.message}</p>}


                </div>
{Message && (<p style={{ color: Message === "Email is sent successfully" ? 'green' : 'red' }}>{Message}</p>)}

                <div className={styles.btn}>
                    <button>Submit</button>
                </div>
            </form>
        </div>

    </div>
  </div>
  )
}

export default Section6