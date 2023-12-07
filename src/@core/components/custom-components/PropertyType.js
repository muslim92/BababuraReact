/* eslint-disable arrow-spacing */
import React, { useState } from 'react'
import { Card, CardImg } from 'reactstrap'
import './components.scss'
import { CommonImg1 } from '../../../assets/images/custom-images'
import { ArrowDownLeft } from 'react-feather'
import { Link } from 'react-router-dom'

const PropertyType = ({ title, number }) => {
  const [onHover, setOnHover] = useState(false)
  return (
    <div className={'property-type'} onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
      <img src={CommonImg1} className='hover-effect h-100 w-100' />
      <div className='property-type-desc'>
        <span className='text_white_1'>{title}</span>
        <span className='text_white_2'>{number} listings</span>
        {onHover && <Link className='text_white_3'>View all listing → </Link>}
      </div>
    </div>
  )
}

export default PropertyType
