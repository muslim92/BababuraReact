import React from 'react'
import './components.scss'
import { CommonImg6 } from '../../../assets/images/custom-images'

const PropertyNewYouCard = () => {
  return (
    <div className='pnyc'>
        <div className='pnyc-overlay'></div>
        <img src={CommonImg6} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
        <div className='pnyc-info'>
            <span className='text_white_2'>Moncton</span>
            <span className='text_white_9'>1570 listing</span>
        </div>
    </div>
  )
}

export default PropertyNewYouCard
