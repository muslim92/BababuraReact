import React from 'react'
import './components.scss'
import { BellIcon } from '../../../assets/images/custom-images'
import { Input } from 'reactstrap'
const PropertyAlert = ({primary}) => {
  return (
    <div style={{backgroundColor: primary ? '#F1FAFF' : '#fff', boxShadow: primary ? null : '0px 6px 12px 0px rgba(0, 0, 0, 0.20)' }} className='property-alert'>
      <img style={{cursor: 'pointer'}} src={BellIcon}/>
      <span className='text_black_9'>Property alert</span>
      <div className="form-check form-switch">
          <Input
            type="switch"
            name="customSwitch"
            id="exampleCustomSwitch"
            defaultChecked
          />
        </div>
    </div>
  )
}

export default PropertyAlert
