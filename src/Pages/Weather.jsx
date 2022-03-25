import{useContext, useEffect, useState} from 'react'
import  DataContext  from '../Context/dataContext/DataContext'
import { TextField } from '@material-ui/core'
import style from '../Style/Weather.module.css'
import night from '../assets/night.jpg'
import morning1 from '../assets/morning1.jpg'
import {BsMoonStarsFill} from 'react-icons/bs'
import {BsFillSunFill} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'
import {  useNavigate } from "react-router-dom";





export default function Weather() {
  const {getWeather1,getWeather2,data1,data2,isDay,location,sys,weatherData}= useContext(DataContext)
  const [city,setCity]=useState('')
  const [submited,setSubmited]=useState(false)
  
  const navigate=useNavigate()


  // //Converting TimeStimp unix to time  
  function format_time(s) {
    const dtFormat = new Intl.DateTimeFormat('en-GB', {
      timeStyle: 'medium',
      timeZone: 'UTC'
    });
    return dtFormat.format(new Date(s * 1e3));
  }
 
  const handleChange=(e)=>{
      setCity(e.target.value)
      setSubmited(false)
  }
  const handleSubmit=async (e)=>{
    e.preventDefault()
    await getWeather1(city)
    await getWeather2(city)
    setCity("")
    setSubmited(true)
  }
   

  const navigating=()=>{
    navigate('/error')
    return 0
  }
  
  //Return Values
  if(data1.success===false){
       return <div>{navigating()}</div>
  }
  
  else{ 
    return (
    <div className={style.weather}>
          <img src={isDay==="no" ? night :morning1} alt="" className={style.image}/>
          <div className={style.formContainer}>
            <form onSubmit={handleSubmit}>
              <input type="text" value={city} className={style.input} onChange={handleChange} placeholder={'city'} />
            </form>
          </div>

          <div className={isDay==="no" ? style.weatherDetailNight : style.weatherDetailMorning}>
            {submited&&
             <div className={style.location}>
                <ImLocation2 fill={isDay==="no" ? '#ffffff' : '#000000'} size={30} className={style.locationIcon}/>
                <p>{location.city}, {location.country}</p>
            </div>
            }
            <div className={style.weatherIcon}>
              <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt="" className={style.icon} />
              <p>{weatherData.temp.toFixed(0)}&#176;</p>
              <p>{weatherData.description}</p>
              <p>{location.localTime}</p>
            </div>
          </div>



    
    </div>
    
  )
}}

