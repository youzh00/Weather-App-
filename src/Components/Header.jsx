import React, { useState } from 'react'
import styles from '../Style/Header.module.css'
import {TiWeatherPartlySunny} from 'react-icons/ti'





export default function Header() {
  return (
      <header >
            
            <div className={styles.app}>
                <TiWeatherPartlySunny size={50} fill={'#000'}/>
              <h2>Weather App</h2>
            </div>    
      </header>
  )
}
