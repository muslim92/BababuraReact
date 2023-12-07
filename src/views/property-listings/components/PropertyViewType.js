import React from 'react'
import './components.scss'
const PropertyViewType = ({icon, title, id, selectedType, selectedIcon, setSelectedType}) => {
  return (
    <div className={selectedType === id ? 'pvt-selected' : 'pvt'} onClick={() => setSelectedType(id)}>
      <img src={selectedType === id ? selectedIcon : icon}/>
      <span className={selectedType === id ? 'text_primary_6' : 'text_black-marlin_2'}>{title}</span>
    </div>
  )
}

export default PropertyViewType
