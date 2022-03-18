import React, { useState } from 'react'

import style from '../Style/Slider.module.css'
import { sliderData } from '../assets/SliderData/SliderData'
import {FaArrowCircleLeft} from 'react-icons/fa'
import {FaArrowCircleRight} from 'react-icons/fa'

export default function Slider() {
  const [current,setCurrent]=useState(0)
  const length=sliderData.length

  const prevImg=()=>{
    setCurrent(current===0 ? length-1 :current -1)
  }
  const nextImg=()=>{
    setCurrent(current===length-1 ? 0 : current+1)
  }



  return (
  <section className={style.slider}>
      <FaArrowCircleLeft className={style.leftArrow} onClick={prevImg} size={30}/>
      <FaArrowCircleRight className={style.rightArrow} onClick={nextImg} size={30}/>
      <div className={style.slideContainer}>
      {
        sliderData.map((slide,index)=>{
          return (
        <div  key={slide.id} className={index===current ? `${style.slide} ${style.active} `: `${style.slide}`}>
                {index===current &&<img src={slide.image} alt="" className={style.image}/> }
        </div>
          )
        })
      }
      </div>
  </section>
  )
}
