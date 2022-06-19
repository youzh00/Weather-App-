import React from 'react'
import style from '../Style/WthrHourly.module.css'

const WeatherHourly = ({currentWeather,img,time}) => {
  return (
    <>
      <div className={style.weatherHourlyCart}>
        <p>{currentWeather.toFixed(2)}&#176;</p>
        <img src={img} alt="weather" className={style.img} />
        <p>{time}</p>
      </div>
    </>
  )
}

export default WeatherHourly
