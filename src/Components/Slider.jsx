import React from 'react'
import img1 from '../assets/SliderData/img1.jpg'
import img2 from '../assets/SliderData/img2.jpg'
import img3 from '../assets/SliderData/img3.jpg'
import img4 from '../assets/SliderData/img4.jpg'
import img5 from '../assets/SliderData/img5.jpg'
import img6 from '../assets/SliderData/img6.jpg'
import style from '../Style/Slider.module.css'



export default function Slider() {
  return (
    <div>
        <div className={style.rightClick}></div>
        <section>
            <img src={img1} alt="" className=''/>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
        </section>
        <div className={style.leftClick}></div>
            

    </div>

  )
}
