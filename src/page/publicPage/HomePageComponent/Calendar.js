import React from 'react'
import styles from "./Calendar.module.css"

const Calendar = () => {
  return (
    <div className={styles.main}>
      <p className={styles.title}>Global Mining Event Calendar</p>
      <div className={styles.card_container}>
          <div className={styles.card}>
          <p className={styles.ptitle}>Australian <br/>Mining Events</p>
          </div>
          <div className={styles.card}>
          <p className={styles.ptitle}>Canadian <br/>Mining Events</p>
          </div>
          <div className={styles.card}>
          <p className={styles.ptitle}>European <br/>Mining Events</p>
          </div>
          <div className={styles.card}>
         <p className={styles.ptitle}> United States <br/> Mining Events</p>
          </div>






        </div>


    </div>
  )
}

export default Calendar