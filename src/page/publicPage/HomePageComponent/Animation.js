import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

import styles from "./Animation.module.css"

import { EffectFade,Autoplay } from "swiper"

const Animation = () => {
  return (
    <div className={styles.main}>
        <div className={styles.slider_container}>
        <Swiper
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[EffectFade, Autoplay]}
        className={styles.top}
      >
        <SwiperSlide> <img className={styles.img} src="./p1.png" alt=""/></SwiperSlide>
        <SwiperSlide> <img className={styles.img} src="./p2.png" alt=""/></SwiperSlide>
        </Swiper>
       <div className={styles.p_container}>
        <p className={styles.p1}>We Collate Global Mining Events Onto One<br/> Website</p>
        <p className={styles.p2}>Now you only need to look in one place to know<br/> what mining events are coming up.</p>
        <button className={styles.p3}>Join our email list for monthly event updates</button>
        
        </div>
        </div>
    </div>
  )
}

export default Animation