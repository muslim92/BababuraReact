import React from 'react'
import './components.scss'
import { SearchEyeIcon } from '../../../assets/images/custom-images'
import { Button } from 'reactstrap'
const RecentAddedProperty = () => {
  return (
    <div className='rap flex-row-between'>
        <div className='flex-row-start align-items-center gap_10'>
            <img src={SearchEyeIcon}/>
            <span className='text_grey-suit_2'><span className='text_black_9'>1 new</span> properties since your last visit</span>
        </div>
        <Button color='flat-primary'>
            View
        </Button>
    </div>
  )
}

export default RecentAddedProperty
