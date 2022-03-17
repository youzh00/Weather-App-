import React, { useState } from 'react'
import styles from '../Style/Header.module.css'
import {MdOutlineDarkMode} from 'react-icons/md'
import {FiSun} from 'react-icons/fi'
import logo from '../assets/weather.png'
import DarkModeToggle from "react-dark-mode-toggle";




export default function Header() {
    const [mode,setMode]=useState(false)

    const toggle =()=>{
        setMode(previousState=>!previousState)
    }
  return (
      <header >
            <div className={styles.app}>
                <img src={logo} alt="" />
              <h2>Weather App</h2>
            </div>
           
            <DarkModeToggle
                    onChange={toggle}
                    checked={mode}
                    size={80}
            />
      </header>
  )
}
