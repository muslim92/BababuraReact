import React from 'react'
import { Button, Card, Col, Row } from 'reactstrap'
import './components.scss'
import CommonSwiper from './CommonSwiper'
import { AddToCalenderIcon, AreaIcon, AuctionBlackIcon, BathIcon, BedIcon, BgIcon, CalendarPrimaryIcon, CarIcon, FavoriteIcon, ForSale, MailWhiteIcon, MapViewIcon, PhoneGreyIcon } from '../../../assets/images/custom-images'
const CommonListingCard = ({auction}) => {
  return (
    <Card className='common-listing-card'>
            <img className='icon' src={BgIcon}/>
            <img className='fav-icon' src={FavoriteIcon}/>
        <div style={{borderBottom: auction ? '1px solid #E5E5EA' : null}} className='flex-row-start gap_24'>
            {/* <img className='for-sale-2' src={ForSale}/> */}
            <div className='for-sale-2'>
                <span className='text_white_5'>For Sale</span>
            </div>
            <div style={{width: 540, height: 294, overflow: 'hidden', borderRadius: 10, position:'relative'}}>
                <CommonSwiper />
            </div>
            <div>
                <span className='text_black_10'>Gorgeous Apartment Building</span>
                <div className='flex-row-start gap_5 mt_4'>
                    <img src={MapViewIcon}/>
                    <span className='text_black-marlin_1'>58 Hullbrook Road, Billesley, B13...</span>
                </div>
                <div className='mt_18'>
                    <span className='text_primary_5'>$7,500</span>
                </div>
                <Row className='mt_18'>
                    <Col md={6}>
                        <div className='flex-row-start align-items-center gap_5'>
                            <img src={BedIcon} />
                            <span className='text_black-marlin_1'>Beds: <span className='text2_black-marlin_1'>4</span></span>
                        </div>
                    </Col>
                    <Col md={6}>
                    <div className='flex-row-start align-items-center gap_5'>
                            <img src={BathIcon} />
                            <span className='text_black-marlin_1'>Baths: <span className='text2_black-marlin_1'>2</span></span>
                        </div>
                    </Col>
                </Row>
                <Row className='mt_18'>
                <Col md={6}>
                        <div className='flex-row-start align-items-center gap_5'>
                            <img src={CarIcon} />
                            <span className='text_black-marlin_1'>Cars: <span className='text2_black-marlin_1'>11</span></span>
                        </div>
                    </Col>
                    <Col md={6}>
                    <div className='flex-row-start align-items-center gap_5'>
                            <img src={AreaIcon} />
                            <span className='text_black-marlin_1'>Size: <span className='text2_black-marlin_1'>100m</span></span>
                        </div>
                    </Col>
                </Row>
                <div className='mt_18'>
                    <span className='text2_black-marlin_1'>House</span>
                </div>
                <hr style={{marginBottom: 11}}/>
                <div className='flex-row-start gap_10'>
                    <Button color='primary' className='flex-row-start gap_5 align-items-center common-btn-primary'>
                        <span className='text_white_8'>Enquire Now</span>
                        <img src={MailWhiteIcon}/>
                    </Button>
                    <Button color='secondary' className='flex-row-start gap_5 align-items-center common-btn-light-primary'>
                        <img src={PhoneGreyIcon}/>
                        <span className='text_silver_3'>1300 392 727</span>
                    </Button>
                </div>
            </div>
        </div>
        {
            auction ?
            <div className='flex-row-between align-items-center pt-1 px-2'>
                <div className='flex-row-start align-items-center'>
                    <img src={AuctionBlackIcon}/>
                    <span className='text_black_11'>Auction Sat 11 Nov 10:30am</span>
                </div>
                <Button color='flat-primary' className='flex-row-start align-items-center gap_5'>
                    <img src={CalendarPrimaryIcon}/>
                    <span className='text_primary_4'>Add to calendar</span>
                </Button>
                <Button color='flat-primary' className='flex-row-start align-items-center gap_5'>
                    <img src={AddToCalenderIcon}/>
                    <span className='text_primary_4'>Add to Bababura planner</span>
                </Button>
            </div>
            : null
        }
    </Card>
  )
}

export default CommonListingCard
