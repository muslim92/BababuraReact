import React, { useState } from 'react'
import { Card } from 'reactstrap'
// style
import './components.scss'
import { AddressIcon, BathIcon, BedIcon, BgIcon, mask1, CarIcon, FavoriteIcon, Featured, ForSale } from '../../../assets/images/custom-images'
const DiscoverdCard = () => {

  const [onHover, setOnHover] = useState(false)

    return (
        <Card className='discover-card mb-0 pb-0'>
            <div onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)} className='img-sec-card'>
                <div style={{overflow: 'hidden', borderRadius: 10}}>
                <img src={mask1} className={onHover === true ? 'card-img-common-clear-hovered' : 'card-img-common-clear'} style={{ width: '100%', height: 260, objectFit: 'cover' }} />
                </div>
                <div className='mt_16'>
                    <div className='d-flex justify-content-between flex-wrap align-items-center'>
                        <div>
                            <span className='card-head1'>Luxury villa in Rego Park</span>
                            <div className='mt_5'>
                                <span className='card-head2'>4211 W 29th New York, NYC</span>
                            </div>
                        </div>
                        <div className='ms-auto'>
                            <span className='text_primary_2'>$7500/mon</span>
                        </div>
                    </div>
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
                </div>
            </div>
        </Card>
    )
}

export default DiscoverdCard
