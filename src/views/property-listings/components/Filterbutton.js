import React from 'react'
import './components.scss'
import { CheckWhite } from '../../../assets/images/custom-images'
const Filterbutton = ({title, id, selected, setSelected}) => {
  return (
    <div className={`${selected === id ? 'filterbtnActive' : 'filterbtn'}`} onClick={() => setSelected(id)}>
      {
        selected === id ?
        <img src={CheckWhite}/>
        : null
    }
      <span className={selected === id ? 'text_white_7' : 'text2_silver_1'}>{title}</span>
    </div>
  )
}

export default Filterbutton
