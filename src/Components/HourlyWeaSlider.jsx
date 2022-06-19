import React, { useState } from 'react'

import style from '../Style/HourlySlider.module.css'
import {hourlyData} from '../Components/RawData'
import WeatherHourly from './WeatherHourly'

export default function HourlyWeaSlider() {

  return (
  <section className={style.slider}>
      <div className={style.slideContainer}>
            {hourlyData.map((data)=>(
                <WeatherHourly currentWeather={data.temp-273.15} img={`https://openweathermap.org/img/wn/${data.icon}@4x.png`} time='22:00' />
            ))}
      </div>
  </section>
  )
}
