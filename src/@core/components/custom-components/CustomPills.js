/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

// style
import './components.scss'
import { Button, Tooltip, UncontrolledTooltip } from 'reactstrap'

const CustomPills = ({property, title, selectedPill, setSelectedPill, id}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false)
  return (
    <>
    <div id={id} style={{cursor: 'pointer'}} onClick={() => setSelectedPill(id)} className='custom-pill'>
        <span className={selectedPill === id ? 'text_primary_1' : 'text_black_3'}>{title}</span>
    </div>
    </>
  )
}

export default CustomPills
