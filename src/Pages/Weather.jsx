import{useContext, useState} from 'react'
import  DataContext  from '../Context/dataContext/DataContext'
import { TextField } from '@material-ui/core'
import style from '../Style/Weather.module.css'
import night from '../assets/night1.jpg'
import morning1 from '../assets/morning1.jpg'
import {BsMoonStarsFill} from 'react-icons/bs'
import {BsFillSunFill} from 'react-icons/bs'
import {  useNavigate } from "react-router-dom";





export default function Weather() {
  const {getWeather,data,currentWeather,isDay,location}= useContext(DataContext)
  const [city,setCity]=useState('')
  const [submited,setSubmited]=useState(false)
  const navigate=useNavigate()

  
  const handleChange=(e)=>{
      setCity(e.target.value)
      setSubmited(false)
  }
  const handleSubmit=async (e)=>{
    e.preventDefault()
    await getWeather(city)
    setCity("")
    setSubmited(true)
  }
  const navigating=()=>{
    navigate('/error')
    return 0
  }
  
  if(data.success===false){
       return <div>{navigating()}</div>
  }
  
  else{ 
    return (
      <div className={style.weather}>
      <img src={isDay==="no" ? night :morning1} alt="" className={style.image}/>
      <div className={style.imageContainer}>
          <div className={style.dayMode}>
            {isDay==="no" ? <BsMoonStarsFill size={30}/> : <BsFillSunFill size={30}/>}
            <p>{isDay==="no" ? 'Night': 'Light '}</p>
          </div>
         {submited &&
         <div className={style.weatherContainer}>
           <div className={isDay==="no" ? style.iconNight : style.iconSun}>
           {isDay==="no" ? <BsMoonStarsFill size={90} fill={'#9fe4ff'}  /> 
                         : <BsFillSunFill size={120} fill={'#ffff6e'}  />}
           </div>
           <p className={style.temp}>{currentWeather.temperature}&#xb0;</p>
           <div className={style.weatherContainerCity}>
             <p className={style.city}>{location.name}</p>
             <p className={style.date}> {location.localtime}</p>
           </div>
           <div className={style.description}>
              <p className={style.descriptionState}>{currentWeather.weather_descriptions[0]}</p>
              <p>Weather</p>
           </div>  
         </div>}
      </div>

      <div className={style.formContainer}>
        <form onSubmit={handleSubmit} className={style.form}>
        <TextField id="standard-basic" label="City" variant="standard" value={city} onChange={handleChange} className={style.textField} />
      </form> 
      {
      currentWeather!==undefined &&
        <div className={style.fromContainerDiv}>
              
              <p className={style.weatherDetails} > Weather Details :</p>
              <div className={isDay==="no" ? style.nightPara: style.morningPara}>
                  <p >Cloud Cover: </p>
                  <p>{currentWeather.cloudcover}</p>
              </div>
              <div className={isDay==="no" ? style.nightPara: style.morningPara}>
                <p >Humidity: </p>
                <p>{currentWeather.humidity}%</p>
              </div>
              <div className={isDay==="no" ? style.nightPara: style.morningPara}>
              <p >Temperature: </p>
              <p>{currentWeather.temperature}&#8451;</p>
              </div>
              <div className={isDay==="no" ? style.nightPara: style.morningPara}>
                <p >Wind Speed: </p>
                <p>{currentWeather.wind_speed} Km/h</p>
              </div>
              <div className={isDay==="no" ? style.nightPara: style.morningPara}>
                <p >Visibility: </p>
                <p>{currentWeather.visibility}</p>
              </div>
              <div className={isDay==="no" ? style.nightPara: style.morningPara}>
                <p >Wind Degree: </p>
                <p>{currentWeather.wind_degree}</p>
              </div>
              <div className={isDay==="no" ? style.nightPara: style.morningPara}>
                <p >Weather Description :</p>
                <p> {currentWeather.weather_descriptions[0]}</p>

              </div>
        </div>
     } 
      </div>       
    </div>
  )
}}

