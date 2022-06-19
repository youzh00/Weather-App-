import React from 'react'
import style from '../Style/DaysWeatherCart.module.css'
import {BsFillSunFill,BsMoonStarsFill} from 'react-icons/bs'

export const DaysWeatherCart = ({currentWeatherDay,currentWeatherNight,img,description,date,key}) => {
  const currentTime = new Date(date*1000)
  const day=currentTime.toLocaleString("en-US", {weekday: "long"})

  return (
    
     <div className={style.DaysWeatherCart} >
      <p> {day.substring(0,3)}   </p>
      <div className={style.imgContainer}>
        <img src={img} alt="" className={style.img}/>
        <p>{description}</p>
      </div>
      <div className={style.weatherContainer}>
        <div className={style.weatherContainerDay}>
          <BsFillSunFill size={20}/>
          {currentWeatherDay.toFixed(2)}&#176;
        </div> 
        <p> / </p> 
        <div className={style.weatherContainerDay}>
          <BsMoonStarsFill size={20}/>
          {currentWeatherNight.toFixed(2)}&#176;
        </div>
        </div>
     </div>   
    
    
  )
}
