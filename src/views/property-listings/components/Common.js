import React from 'react'
import './components.scss'
const Commonbutton = ({title, icon, search}) => {
  return (
    <div className={search ? 'filterbtn' : 'filterbtn1'}>
      <span className='text2_silver_1'>{title}</span>
        <img src={icon}/>
    </div>
  )
}

export default Commonbutton
