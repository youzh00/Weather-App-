import { useContext, useState } from 'react'

import style from '../Style/HourlySlider.module.css'
import {hourlyData} from '../Components/RawData'
import WeatherHourly from './WeatherHourly'
import ForecastWeather from '../Context/ForecastWeather'

export default function HourlyWeaSlider() {
  const {forecastWeatherHourly}= useContext(ForecastWeather)

  return (
  <section className={style.slider}>
      <div className={style.slideContainer}>
            {forecastWeatherHourly.map((data)=>(
                <WeatherHourly  currentWeather={data.temp-273.15} 
                img={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} 
                date={data.dt}
                />
            ))}
      </div>
  </section>
  )
}
