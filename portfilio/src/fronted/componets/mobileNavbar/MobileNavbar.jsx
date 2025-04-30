import React from "react";
import styles from "../../styles/mobileNavbar/MobileNavbar.module.css";
import "animate.css";

const MobileNavbar = ({ menubar, onclose }) => {
  return (
    <div
      className={`${styles.navmobile} ${menubar ? `animate__animated animate__backInDown ${styles.active}` : "animate__animated  animate__backOutUp"
        }`}
    >
      <ul>
        <li><a href="#section2" onClick={onclose}>About</a></li>
        <li><a href="#section3" onClick={onclose}>Skills</a></li>
        <li><a href="#section4" onClick={onclose}>Services</a></li>
        <li><a href="#section5" onClick={onclose}>Portfolio</a></li>
        <li><a href="#section6" onClick={onclose}>Contact</a></li>
        <li>
          <a className={styles.hireme} onClick={onclose} href="https://wa.me/03054372019" target='_blank'>
            Hire Me
          </a>
        </li>
        <button onClick={onclose}>Close Menu</button>
      </ul>
    </div>
  );
};

export default MobileNavbar;
