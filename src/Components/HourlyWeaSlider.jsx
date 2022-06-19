import React, { useState } from 'react'

import style from '../Style/HourlySlider.module.css'
import {hourlyData} from '../Components/RawData'
import {FaArrowCircleLeft} from 'react-icons/fa'
import {FaArrowCircleRight} from 'react-icons/fa'
import WeatherHourly from './WeatherHourly'

export default function HourlyWeaSlider() {
  const [current,setCurrent]=useState(0)
  const length=hourlyData.length

  const prevHour=()=>{
    setCurrent(current===0 ? length-1 :current -1)
  }
  const nextHour=()=>{
    setCurrent(current===length-1 ? 0 : current+1)
  }



  return (
  <section className={style.slider}>
      <FaArrowCircleLeft className={style.leftArrow} onClick={prevHour} size={20}/>
      <FaArrowCircleRight className={style.rightArrow} onClick={nextHour} size={20}/>
      <div className={style.slideContainer}>
            {hourlyData.map((data)=>(
                <WeatherHourly currentWeather={data.temp-273.15} img={`https://openweathermap.org/img/wn/${data.icon}@4x.png`} time='22:00' />
            ))}
      </div>
  </section>
  )
}
