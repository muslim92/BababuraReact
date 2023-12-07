import React from 'react'
import './components.scss'
import { BlackLogo, CommonImg6, SmallLogo } from '../../../assets/images/custom-images'
import { Button } from 'reactstrap'
const SecondCommonListingCard = () => {
  return (
    <div className='sclc'>
        <div style={{padding: '10px 25px'}}>
        <img src={BlackLogo}/>
        </div>
        <div>
            <img src={CommonImg6} className='sclc-img'/>
        </div>
        <div className='sclc-desc'>
            <div className='flex-row-start align-items-center gap-3'>
                <div>
                <span className='text_black_14'>Jewel Private Residences Gold Coast</span>
                <div className='mt_5'>
                    <span className='text_black_8'>
                    Now selling. Ready to move in immediately. Lifestyle by The Langhthm Gold Coast.
                    </span>
                </div>
                <div className='mt_20'>
                    <span className='text_black_15'>Total Property Group</span>
                </div>
                </div>
                <Button color='primary'>
                    <span style={{whiteSpace: 'nowrap'}}>Learn More</span>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default SecondCommonListingCard
