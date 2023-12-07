import React from 'react'
import './components.scss'
import { CommonImg6, YellowStarIcon } from '../../../assets/images/custom-images'
import { Map } from 'react-feather'
import Rating from 'react-rating'
const PropertyAddsCard = () => {
  return (
    <div className='pac'>
        <div className='overlayContentStyle'></div>
      <img src={CommonImg6} style={{objectFit:'cover', width: '100%', height: '100%'}}/>
      <div className='pac-desc'>
        <span className='text_white_1'>Gorgeous Apartment Building</span>
        <div className='flex-row-start gap_5 align-items-center mt_10'>
            <Map color='white' size={12}/>
            <span className='text_white_9'>58 Hullbrook Road, Billesley, B13 0LA</span>
        </div>
        <Rating 
        readonly
        className='mt_10'
        fullSymbol={<img src={YellowStarIcon} style={{width:'fit-content'}}/>}
        initialRating={5}
        />
      </div>
    </div>
  )
}

export default PropertyAddsCard
