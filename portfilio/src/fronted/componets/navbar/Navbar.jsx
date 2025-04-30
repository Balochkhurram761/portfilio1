import React, { useState } from 'react'
import styles from '../../styles/navbar/Navbar.module.css'
import { CiMenuBurger } from "react-icons/ci";
import MobileNavbar from '../mobileNavbar/MobileNavbar';

const Navbar = () => {
const [Menu,setMenu]=useState(false);
const hanldeMenu=()=>{
  setMenu(!Menu)
}
  return (
    <div className={styles.nav}>
         <div className={styles.logo}>
             <img src="/assets/logo/logo1.png" alt="" />
         </div>
         <div className={styles.navlinks}>
            <ul>
                <li><a href="#section2">about</a></li>
                <li><a href="#section3">skills</a></li>
                <li><a href="#section4">servies</a></li>
                <li><a href="#section5">portfilio</a></li>
                <li><a href="#section6">contact</a></li>
                <li><a className={styles.hireme} href="https://wa.me/03054372019" target='_blank' >hire me</a></li>
            </ul>
            <div className={styles.menu} onClick={hanldeMenu}  >
             <CiMenuBurger /> 
            </div>
            {Menu && (
            <div className="mobilenavbar">
              <MobileNavbar menubar={Menu}  onclose={()=>setMenu(false)} />
            </div>
            )}
         </div>
    </div>
  )
}

export default Navbar