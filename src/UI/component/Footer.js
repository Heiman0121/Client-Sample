import React from 'react'
import styles from "./Footer.module.css"
import SocialBar from "./SocialBar"

const Footer = () => {
  return (
    <div className={styles.container}>

      <ul className={styles.menu}>
      <li>
      About us
      </li>
      <li>
      Contact
      </li>
      <li>
      Privacy Policy
      </li>
      <li>
      Newsletters
      </li>
     <li>
     <SocialBar/>
     </li> 
      </ul>
      
  

<p className={styles.title}> © 2022 All rights reserved. Designed & Developed by MineFinder</p>
    </div>
  )
}

export default Footer;
