import React from 'react'
import'./Hero.css'
import dark_arrow from'../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1> We ensure a better eduction for a better world</h1>
        <p> our cutting-edge curriculum is designed to empower students with the knowledge , skills , and experiencess neded to exel in the dynamic field of eduction</p>
        <button className='btn'> Explore more <img src={dark_arrow} alt=''/></button>

      </div>
    </div>
  )
}

export default Hero
