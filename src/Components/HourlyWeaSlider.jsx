import { useContext } from 'react'
import DataContext from '../Context/DataContext'


import style from '../Style/HourlySlider.module.css'
import WeatherHourly from './WeatherHourly'
import ForecastWeather from '../Context/ForecastWeather'

export default function HourlyWeaSlider() {
  const {forecastWeatherHourly}= useContext(ForecastWeather)
  const { isDay } = useContext(DataContext)
  console.log(isDay);

  return (
  <section className={isDay==='no'?style.sliderNight : style.slider}>
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
