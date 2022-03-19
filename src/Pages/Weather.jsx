import{useContext, useState} from 'react'
import { Input, Stack } from '@chakra-ui/react'
import  DataContext  from '../Context/dataContext/DataContext'
import { TextField } from '@material-ui/core'
import style from '../Style/Weather.module.css'
import image from '../assets/weather1.jpg'

export default function Weather() {
  const {getWeather,weather}= useContext(DataContext)
  const [city,setCity]=useState('')
  

  const handleChange=(e)=>{
      setCity(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    getWeather(city)
 
  }
  return (
    <div className={style.weather}>
      <img src={image} alt="" className={style.image}/>
      <div className={style.imageContainer}>
      </div>
      <div className={style.formContainer}>
      <form onSubmit={handleSubmit} className={style.form}>
        <TextField id="standard-basic" label="City" variant="standard" value={city} onChange={handleChange} className={style.textField} />
      </form> 
      <div className={style.fromContainerDiv}>
        <p className={style.weatherDetails}>Weather Details</p>
        <p>Cloud Cover:</p>
        <p>Humidity:</p>
        <p>Temperature: C</p>
        <p>Wind Speed: </p>
        <p>Visibility: </p>
        <p>Wind Degree: </p>
      </div>
      </div>       
    </div>
  )
}
