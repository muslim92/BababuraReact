import React from 'react'

// style
import './components.scss'
import { Button } from 'reactstrap'
import { CommonImg3, CommonImg4 } from '../../../assets/images/custom-images'

const DreamHouse = () => {
  return (
    <div className='dream-home'>
      <div className='flex-row-between'>
            <div className='flex-col-start p-5'>
                <span className='text_black_7'>Get your dream house</span>
                <span className='text_black_8 mt-2'>We provide a complete service for the sale, purchase or rental of real estate.</span>
                <Button color='primary' className='mt_40 rounded-0'>Request consultation</Button>
            </div>
            <div style={{position: 'relative'}}>
                <img src={CommonImg3} style={{position: 'absolute', right:127, bottom:0, zIndex: 22, height: 535, width: 343, objectFit: 'cover'}}/>
                <img src={CommonImg4}/>
            </div>
      </div>
    </div>
  )
}

export default DreamHouse
