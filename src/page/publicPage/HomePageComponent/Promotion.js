import React from 'react'
import styles from "./Promotion.module.css"

const Promotion = () => {
  return (
    <div className={styles.main}>
    <div className={styles.container}>
    <div className={styles.title}>Have a Mining Event to promote?
        <br/>
    Maximise your online visibility
    
    <div className={styles.title_2}>
    <a href="https://">
    <img src="./icon1-2.webp" alt=""/>
    </a>
    Our skill, your growth
    Increase website traffic and enhance your event's presence on social media sites.
    </div>
    <button className={styles.button}>Learn more</button>
    </div>
    </div>
    <div className={styles.container}><img src="./fox_pic2.webp" alt="" className={styles.img}/></div>
    </div>
  )
}

export default Promotion