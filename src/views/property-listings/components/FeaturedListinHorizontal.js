import React from 'react'
import './components.scss'
import { CommonImg2 } from '../../../assets/images/custom-images'
const FeaturedListingHorizontal = () => {
  return (
    <div className='FeaturedListingHorizontal'>
        <div className='flex-row-start gap_12'>
            <img src={CommonImg2} className='flh-img'/>
            <div style={{height: 75}} className='flex-col-start justify-content-between'>
                <div style={{width: '80%'}}>
                <span className='text_black_9'>Gorgeous Apartment Building</span>
                </div>
                <span className='text_primary_2'>$7,500</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedListingHorizontal
