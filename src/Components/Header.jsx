import React, { useState } from 'react'
import styles from '../Style/Header.module.css'
import DarkModeToggle from "react-dark-mode-toggle";
import {TiWeatherPartlySunny} from 'react-icons/ti'





export default function Header() {
    const [mode,setMode]=useState(false)

    const toggle =()=>{
        setMode(previousState=>!previousState)
    }
  return (
      <header >
            
            <div className={styles.app}>
                <TiWeatherPartlySunny size={50} fill={'#000'}/>
              <h2>Weather App</h2>
            </div>
           
            <DarkModeToggle
                    onChange={toggle}
                    checked={mode}
                    size={60}
                    className={styles.darkmodeButton}
            />
      </header>
  )
}
