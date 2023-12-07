import React from 'react'
import './components.scss'
import SoldPropertyCard from './SoldPropertyCard'
const SoldPropertySec = () => {
  return (
    <div className='mt-1 spc-sec'>
       <div className='mt_24'>
            <span className='text_black_4'>Recently sold similar properties</span>
            <hr />
        </div>
        <SoldPropertyCard />
        <SoldPropertyCard />
        <SoldPropertyCard />
    </div>
  )
}

export default SoldPropertySec
