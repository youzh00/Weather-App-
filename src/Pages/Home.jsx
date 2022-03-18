import React from 'react'
import style from '../Style/Home.module.css'
import Slider from '../Components/Slider'
import Header from '../Components/Header'


export default function Home() {
  return (
    <main className={style.main}>
      <Header />
      <section>
        <div>
          <Slider/>
        </div>
      </section>
      
    </main>
  )
}
