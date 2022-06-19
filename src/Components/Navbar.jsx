import React from 'react'
import '../Style/Navbar.css'
import {BiHomeSmile} from 'react-icons/bi'
import {TiWeatherCloudy} from 'react-icons/ti'
import { useNavigate, useLocation } from 'react-router-dom'




export default function Navbar() {
    const navigate=useNavigate()
    const {pathname}=useLocation()

    const pathmatches=(route)=>{
        if(route===pathname){
            return true
        }
        return false
    }
  
  return (
    <main className='navBar'>
        < div className='navBarContainer'>
            <ul className='navBarContainerList'>
                <li >
                    <BiHomeSmile size={35} className='icon' onClick={()=>navigate('/')} fill={pathmatches('/') ? '#1a22c9': '#acaed9'}/>
                    <h3 className={pathmatches('/') ? 'pActive' : 'pDesactive'} onClick={()=>navigate('/')}>Home</h3>
                </li>
                <li>
                    <TiWeatherCloudy  size={35} className='icon' onClick={()=>navigate('/weather')} fill={pathmatches('/weather') ? '#1a22c9': '#acaed9'}/>
                    <h3 className={pathmatches('/weather') ? 'pActive' : 'pDesactive'} onClick={()=>navigate('/weather')}>Weather</h3>
                </li>
                
            </ul>
        </div>
    </main>
  )
}
