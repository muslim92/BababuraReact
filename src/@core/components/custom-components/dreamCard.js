import React, { useState } from 'react'
import { Card } from 'reactstrap'
// style
import './components.scss'
import { AddressIcon, BathIcon, BedIcon, BgIcon, mask1, CarIcon, FavoriteIcon, Featured, ForSale } from '../../../assets/images/custom-images'
const DreamCard = () => {
    const [onHover, setOnHover] = useState(false)

    return (
        <Card onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)} className='discover-card mb-0 pb-0'>
            <div className='img-sec-card'>
               <div style={{position: 'relative'}}>
                <div style={{overflow: 'hidden', borderRadius: 10}}>
                <img src={mask1}  className={onHover === true ? 'card-img-common-clear-hovered' : 'card-img-common-clear'} style={{ width: '100%', height: 260, objectFit: 'cover', borderRadius: 10 }} />
                </div>
                <div className='property-type-desc'>
                    <span className='text2_white_1'>Luxury villa in Rego Park</span>
                </div>
                </div>
                <div className='mt_16'>
                    <div className='flex-row-start gap_16 mt_18'>
                        <div className='flex-row-start align-items-center gap_5'>
                            <img src={BedIcon} />
                            <span className='text_black-marlin_1'>Beds:</span>
                            <span className='text_black_5'>4</span>
                        </div>
                        <div className='flex-row-start align-items-center gap_5'>
                            <img src={BathIcon} />
                            <span className='text_black-marlin_1'>Baths:</span>
                            <span className='text_black_5'>2</span>
                        </div>
                        <div className='flex-row-start align-items-center gap_5'>
                            <img src={CarIcon} />
                            <span className='text_black-marlin_1'>Cars:</span>
                            <span className='text_black_5'>1</span>
                        </div>
                    </div>
                    <div className='mt_16'>
                        <span className='dream-card-sub'>PDF Real Estate</span>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default DreamCard
