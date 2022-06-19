import React from 'react'
import style from '../Style/Home.module.css'
import Slider from '../Components/Slider'
import Header from '../Components/Header'



export default function Home() {
  return (
    <main className={style.main}>
      <Header />
      <section>
        <div className={style.slider}>
          <Slider />
        </div>
        <div className={style.quote}>
          <h1>Welcome to your daily</h1>
          <h1> weather app</h1>
        </div>
      </section>
      
    </main>
  )
}
