import React from 'react'
import style from '../Style/WthrHourly.module.css'

const WeatherHourly = ({currentWeather,img,date}) => {
  const time=new Date(date*1000)
  const currentDate=time.toLocaleString("en-US", {hour: "numeric"}) 
  const currentDate_2=time.toLocaleString('en-GB', { timeZone: 'UTC' }).substring(12,17)

  return (
    <>
      <div className={style.weatherHourlyCart}>
        <p>{currentWeather.toFixed(2)}&#176;</p>
        <img src={img} alt="weather" className={style.img} />
        <p>{currentDate}</p>
      </div>
    </>
  )
}

export default WeatherHourly
