import React from 'react'
import styles from './SocialBar.module.css'

const SocialBar = () => {
  return (
    <div className={styles.container}>
      <a href="https://www.facebook.com/MiningEventsCalendar/">
        <img className={styles.logo} alt="" src="/facebook_icon.png"/>
      </a>
      <a href="https://twitter.com/mining_events">
        <img className={styles.logo} alt="" src="/twitter_icon.png"/>
      </a>
      <a href="https://twitter.com/mining_events">
        <img className={styles.logo} alt="" src="/inkedin_icon.png"/>
      </a>
      </div>
    
  )
}

export default SocialBar