import React from 'react'
import './components.scss'
const AuctionDateCard = ({id, selected, setSelected, day, date, month}) => {
  return (
    <div onClick={() => setSelected(id)} className={selected === id ? 'auction-date-card-selected' : 'auction-date-card'}>
      <span className='text_grey-suit_1'>{day}</span>
      <span className={selected === id ? 'text_primary_2' : 'text_black_4'}>{date}</span>
      <span className='text_grey-suit_1'>{month}</span>

    </div>
  )
}

export default AuctionDateCard
