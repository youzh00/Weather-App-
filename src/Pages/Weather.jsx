import{useContext, useState} from 'react'
import { Input, Stack } from '@chakra-ui/react'
import  DataContext  from '../Context/dataContext/DataContext'
import { TextField } from '@material-ui/core'
import style from '../Style/Weather.module.css'
import image from '../assets/weather1.jpg'
import night from '../assets/night1.jpg'
import morning1 from '../assets/morning1.jpg'
import {BsMoonStarsFill} from 'react-icons/bs'
import {BsFillSunFill} from 'react-icons/bs'
import {FaCity} from 'react-icons/fa'



export default function Weather() {
  const {getWeather,data}= useContext(DataContext)
  const [city,setCity]=useState('')
  const [isDay,setIsDay]=useState('yes')
  const [submited,setSubmited]=useState(false)

  const {location,current}=data
  
  const handleChange=(e)=>{
      setCity(e.target.value)
      setSubmited(false)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    getWeather(city)
    setIsDay(current.is_day)
    setSubmited(true)
  }
  console.log(current)





  return (
    <div className={style.weather}>
      <img src={isDay==='no' ? night :morning1} alt="" className={style.image}/>
      <div className={style.imageContainer}>
          <div className={style.dayMode}>
            {isDay==='no' ? <BsMoonStarsFill size={30}/> : <BsFillSunFill size={30}/>}
            <p>{isDay==='no' ? 'Night': 'Light '}</p>
          </div>
          {submited &&
           <div className={style.cityContainer}>
           <FaCity size={25}/>
           <p>{location.name}</p>
         </div>}
         
      </div>
      <div className={style.formContainer}>
      <form onSubmit={handleSubmit} className={style.form}>
        <TextField id="standard-basic" label="City" variant="standard" value={city} onChange={handleChange} className={style.textField} />
      </form> 
      {current!==undefined &&
      <div className={style.fromContainerDiv}>
      <p className={style.weatherDetails} > Weather Details :</p>
      <p className={isDay==='no' ? style.nightPara: style.morningPara}>Cloud Cover: {current.cloudcover} oktas</p>
      <p className={isDay==='no' ? style.nightPara: style.morningPara}>Humidity: {current.humidity}</p>
      <p className={isDay==='no' ? style.nightPara: style.morningPara}>Temperature: {current.temperature}&#8451;</p>
      <p className={isDay==='no' ? style.nightPara: style.morningPara}>Wind Speed: {current.wind_speed} m/s</p>
      <p className={isDay==='no' ? style.nightPara: style.morningPara}>Visibility: {current.visibility}</p>
      <p className={isDay==='no' ? style.nightPara: style.morningPara}>Wind Degree: {current.wind_degree}</p>
      <p className={isDay==='no' ? style.nightPara: style.morningPara}>Weather Description : {current.weather_descriptions[0]}</p>
    </div>
     
     }
      
      </div>       
    </div>
  )
}
