import React from 'react'
import AuctionDateCard from './AuctionDateCard'
import { CalendarAddIcon } from '../../../assets/images/custom-images'

const AuctionDatesSelection = ({selected, setSelected}) => {
    const data = [
        {id: 1, date: '11', day: 'Mon', month: 'Apr'},
        {id: 2, date: '12', day: 'Tue', month: 'Apr'},
        {id: 3, date: '13', day: 'Wed', month: 'Apr'},
        {id: 4, date: '14', day: 'Thu', month: 'Apr'},
        {id: 5, date: '15', day: 'Fri', month: 'Apr'},
        {id: 6, date: '16', day: 'Sat', month: 'Apr'},
        {id: 7, date: '17', day: 'Sun', month: 'Apr'}
    ]
  return (
    <div className='flex-row-start gap_31'>
        <div className='flex-row-start gap_10'>
            {
                data?.map((item) => (
                    <AuctionDateCard id={item?.id} selected={selected} setSelected={setSelected} date={item?.date} day={item?.day} month={item?.month}/>
                ))
            }
        </div>
        <div style={{cursor: 'pointer'}}>
            <img src={CalendarAddIcon}/>
        </div>
    </div>
  )
}

export default AuctionDatesSelection
