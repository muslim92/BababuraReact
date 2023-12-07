import React from 'react'
import './components.scss'
import { BathIcon, BedIcon, CarIcon, CommonImg5, HouseSolidIcon } from '../../../assets/images/custom-images'
import { Badge } from 'reactstrap'
const SoldPropertyCard = () => {
  return (
    <div className='SoldPropertyCard'>
        <div style={{width: '100%', position: 'relative'}}>
            <img src={CommonImg5}  className='spc-img'/>
            <Badge className='custom-badge' color='light'>
                <div className='flex-row-start align-items-center gap_5'>
                    <div style={{width: 5, height: 5, borderRadius: '100%', backgroundColor: '#CC0026'}}></div>
                    <span className='text_black_custom_2'>Sold 16 Oct 2023</span>
                </div>
            </Badge>
        </div>
        <div className='flex-row-between align-items-center mt_10'>
            <span className='text_black_11'>Gorgeous Apartment Building</span>
            <span className='text2_primary_1'>$7,500</span>
        </div>
        <div className='mt_10'>
            <span className='text_black_12'>573 Hume Street Casula, NSW, 2170</span>
        </div>
        <div className='flex-row-between align-items-center mt_10'>
            <div className='flex-row-start align-items-center gap_16'>
                <div className='flex-row-start align-items-center gap_5'>
                    <img src={BedIcon}/>
                    <span className='text_black_5'>4</span>
                </div>
                <div className='flex-row-start align-items-center gap_5'>
                    <img src={BathIcon}/>
                    <span className='text_black_5'>2</span>
                </div>
                <div className='flex-row-start align-items-center gap_5'>
                    <img src={CarIcon}/>
                    <span className='text_black_5'>2</span>
                </div>
            </div>
            {/* <img src={HouseSolidIcon}/> */}
            <span className='text_black_11'>
                House
            </span>
        </div>
    </div>
  )
}

export default SoldPropertyCard
