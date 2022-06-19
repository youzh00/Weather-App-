import { useContext } from 'react'
import {AiOutlineCalendar} from 'react-icons/ai'
import style from '../Style/NextDays.module.css'
import ForecastWeather from '../Context/ForecastWeather'
import {DaysWeatherCart} from '../Components/DaysWeatherCart'


const NextDaysWeather = () => {
    const {forecastWeatherDaily}= useContext(ForecastWeather)
    console.log(forecastWeatherDaily);
  return (
    <div className={style.NextDaysWeatherContainer}>
      <div className={style.header}>
        <AiOutlineCalendar size={35}/>
        <h2>Next days</h2>
      </div>
      <div className={style.daysWeatherContainer}>
            {forecastWeatherDaily.map((data)=>(
                 <DaysWeatherCart  
                 currentWeatherDay={data.temp.day-273.15} 
                 currentWeatherNight={data.temp.night-273.15} 
                 img={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} 
                 description={data.weather[0].description}
                 date={data.dt}
                 key={data.dt}
                 />
            ))}
      </div>
    </div>
  )
}

export default NextDaysWeather
