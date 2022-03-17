import React from 'react'
import style from '../Style/Home.module.css'
import Slider from '../Components/Slider'



export default function Home() {
  return (
    <main>
      <section>
        <div className={style.HomeWelcome}>
          <h2 >Welcom to your daily weather app</h2>
        </div>
        <div>
          <Slider/>
        </div>
      </section>
      
    </main>
  )
}
