import { useContext, useState } from 'react'
import DataContext from '../Context/dataContext/DataContext'
import style from '../Style/Weather.module.css'
import night from '../assets/night.jpg'
import morning1 from '../assets/morning1.jpg'
import { ImLocation2 } from 'react-icons/im'
import { useNavigate } from "react-router-dom";
import { SiWindicss } from 'react-icons/si'
import { GiWaterDrop } from 'react-icons/gi'
import { BsFillSunriseFill } from 'react-icons/bs'
import { BsFillSunsetFill } from 'react-icons/bs'





export default function Weather() {
  const { getWeather1, getWeather2, data1, data2, isDay, location, sys, weatherData } = useContext(DataContext)
  const [city, setCity] = useState('')
  const [submited, setSubmited] = useState(false)

  const navigate = useNavigate()


  // Converting TimeStimp unix to time  
  function format_time(s) {
    const dtFormat = new Intl.DateTimeFormat('en-GB', {
      timeStyle: 'medium',
      timeZone: 'UTC'
    });
    return dtFormat.format(new Date(s * 1e3));
  }
  // handling input change
  const handleChange = (e) => {
    setCity(e.target.value)
    setSubmited(false)
  }
  // handling the submit action
  const handleSubmit = async (e) => {
    e.preventDefault()
    await getWeather1(city)
    await getWeather2(city)
    setCity("")
    setSubmited(true)
  }

  const navigating = () => {
    navigate('/error')
    return 0
  }
    return (
      <div className={style.weather}>
        <img src={isDay === "no" ? night : morning1} alt="" className={style.image} />
        <div className={style.formContainer}>
          <form onSubmit={handleSubmit}>
            <input type="text" value={city} className={style.input} onChange={handleChange} placeholder={'city'} />
          </form>
        </div>
        {submited &&
          <div className={isDay === "no" ? style.weatherDetailNight : style.weatherDetailMorning}>
            <div className={style.weatherDetailcontainer}>
              <div className={style.weatherIcon}>
                <div className={style.location}>
                  <ImLocation2 fill={isDay === "no" ? '#ffffff' : '#000000'} size={30} className={style.locationIcon} />
                  <p>{location.city}, {location.country}</p>
                </div>
                <div className={style.weatherIconTemp}>
                  <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@4x.png`} alt="" className={style.icon} />
                  <p className={style.temp}>{weatherData.temp.toFixed(0)}&#176;</p>
                </div>
                <div className={style.locationDescription}>
                  <p className={style.description}>{weatherData.description}</p>
                </div>
              </div>
            </div>


            <div className={style.details}>
              <div className={style.windSpeedContainer}>
                <div className={style.windSpeed}>
                  <SiWindicss size={30} fill={isDay === "no" ? '#ffffff' : '#000000'} />
                  <p>{weatherData.windSpeed.toFixed(0)} km/h</p>
                </div>
                <p className={style.windSpeedPara}>Wind speed</p>
              </div>
              <div className={style.humidityContainer}>
                <div className={style.humidity}>
                  <GiWaterDrop size={30} fill={isDay === "no" ? '#ffffff' : '#000000'} />
                  <p>{weatherData.humidity}%</p>
                </div>
                <p className={style.humidityPara}>Humidity</p>
              </div>
              <div className={style.sunsetContainer}>
                <div className={style.sunset}>
                  <BsFillSunsetFill size={30} fill={isDay === "no" ? '#ffffff' : '#000000'} />
                  <p>{format_time(weatherData.sunset).substring(0, 5)}</p>
                </div>
                <p className={style.sunsetPara}>Sunset</p>

              </div>
              <div className={style.sunriseContainer}>
                <div className={style.sunrise}>
                  <BsFillSunriseFill size={30} fill={isDay === "no" ? '#ffffff' : '#000000'} />
                  <p>{format_time(weatherData.sunrise).substring(0, 5)}</p>
                </div>
                <p className={style.sunrisePara}>Sunrize</p>
              </div>

            </div>
          </div>}
      </div>

    )
  }

