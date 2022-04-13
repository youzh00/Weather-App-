import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/sadWeather.png'
import style from '../Style/CityNotExist.module.css'
import {BiHomeSmile} from 'react-icons/bi'


export default function CityNotExist() {
  return (
    <main className={style.main}>
        <div className={style.error}>
            <img src={image} alt="" />
            <h2>Ooooops  The city you searched for does not exist !!</h2>
        </div>
        <div className={style.linkContainer}>
                <Link to='/weather' className={style.link}> <BiHomeSmile size={20} className={style.home}/> Back to Home </Link>

        </div>
    </main>
    )
}
