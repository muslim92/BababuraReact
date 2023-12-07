/* eslint-disable arrow-spacing */
import React, { useState } from 'react'
import './components.scss'
import { Link } from 'react-router-dom'

const NewDevelopmentCard = ({ title, address, img }) => {
  
  const [onHover, setOnHover] = useState(false)
  
  return (
    <div onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)} className='real-estate-card'>
      <div style={{overflow: 'hidden'}}>
      <img src={img} className={`h-100 w-100  ${onHover === true ? 'card-img-common-clear-hovered' : 'card-img-common-clear'}`} />
      </div>
      <div className='development-properties'>
        <span className='text2_white_2'>4 Properties</span>
      </div>
      <div className='development-properties-desc'>
        <span className='text_white_1'>{title}</span>
        <span className='text_white_2'>{address}</span>
      </div>
    </div>
  )
}

export default NewDevelopmentCard
