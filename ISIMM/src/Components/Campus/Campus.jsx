import React from 'react'
import './Campus.css'
import galeery_1 from'../../assets/gallery-1.png'
import galeery_2 from'../../assets/gallery-2.png'
import galeery_3 from'../../assets/gallery-3.png'
import galeery_4 from'../../assets/gallery-4.png'
import white_arrow from'../../assets/white-arrow.png'
const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src={galeery_1} alt="" />
            <img src={galeery_2} alt="" />
            <img src={galeery_3} alt="" />
            <img src={galeery_4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
      
    </div>
  )
}

export default Campus
