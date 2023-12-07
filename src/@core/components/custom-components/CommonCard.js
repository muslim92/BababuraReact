import React, { useState } from 'react'
import { Card } from 'reactstrap'
// style
import './components.scss'
import { AddressIcon, BathIcon, BedIcon, BgIcon, CarIcon, CommonImg2, FavoriteIcon, Featured, ForSale } from '../../../assets/images/custom-images'
import { useNavigate } from 'react-router-dom'
const CommonCard = () => {

    const [onHover, setOnHover] = useState(false)
    const navigate = useNavigate()

  return (
    <Card onClick={() => navigate('/single-property')} onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)} className='common-card'>
        <div className='img-sec-card'>
            <div style={{borderRadius: 10, overflow: 'hidden', width: '100%', height: 184}}>
            <img src={CommonImg2}  className={onHover ? 'card-img-common-clear-hovered' : 'card-img-common-clear'} style={{width: '100%', height: 184, objectFit: 'cover'}}/>
            </div>
            {/* <img className='featured' src={Featured}/> */}
            <div className='featured'>
                <span className='text_white_9'>Featured</span>
            </div>
            <div className='for-sale'>
                <span className='text_white_9'>For Sale</span>
            </div>
            {/* <img className='for-sale' src={ForSale}/> */}
            <img className='icon' src={BgIcon}/>
            <img className='fav-icon' src={FavoriteIcon}/>
            <div className='mt_16'>
                <span className='text_black_4'>Gorgeous Apartment Building</span>
                <div>
                    <img style={{marginRight: 4}} src={AddressIcon}/>
                    <span className='text_black-marlin_1'>58 Hullbrook Road, Billesley, B13 0LA</span>
                </div>
                <div className='mt_18'>
                    <span className='text_primary_2'>$7,500</span>                    
                </div>
                <div className='flex-row-start gap_16 mt_18'>
                    <div className='flex-row-start align-items-center gap_5'>
                        <img src={BedIcon}/>
                        <span className='text_black-marlin_1'>Beds:</span>
                        <span className='text_black_5'>4</span>
                    </div>
                    <div className='flex-row-start align-items-center gap_5'>
                        <img src={BathIcon}/>
                        <span className='text_black-marlin_1'>Baths:</span>
                        <span className='text_black_5'>2</span>
                    </div>
                    <div className='flex-row-start align-items-center gap_5'>
                        <img src={CarIcon}/>
                        <span className='text_black-marlin_1'>Cars:</span>
                        <span className='text_black_5'>1</span>
                    </div>
                </div>
                <div className='mt_16'>
                    <span className='text_black_5'>House</span>
                </div>
            </div>
        </div>
    </Card>
  )
}

export default CommonCard
