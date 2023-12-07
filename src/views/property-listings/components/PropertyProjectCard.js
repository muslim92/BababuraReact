import React from 'react'
import './components.scss'
import { MailWhiteIcon, PhoneGreyIcon, SmallLogo } from '../../../assets/images/custom-images'
import CommonSwiper from './CommonSwiper'
import { Button } from 'reactstrap'
import { Heart } from 'react-feather'
import ProjectHorizontalCard from './ProjectHorizontalCard'
const PropertyProjectCard = () => {
  return (
    <>
    <div style={{boxShadow: '0px 2px 12px 0px rgba(0, 0, 0, 0.15)', borderTopLeftRadius: 10, borderTopRightRadius: 10, overflow: 'hidden'}}>
        <div className='project-header'>
            <img src={SmallLogo}/>
            <img src={SmallLogo}/>
        </div>
        <div style={{maxHeight: 635}}>
            <CommonSwiper />
        </div>
        <div className='desc-sec'>
            <div className='flex-row-between align-items-center'>
                <span className='text_black_13'>Brilliantly Designed To Echo Zetland’s Dynamic Urban Energy</span>
                <Button color='light' outline className='lightFav'>
                    <Heart color='#8E8E93' size={18}/>
                </Button>
            </div>
            <div className='mt_20'>
                <span className='text2_black_1'>Atlas Sydney Project </span>
            </div>
            <div className='mt_5'>
                <span className='text2_grey-suit_1'>106 - 116 Epsom Road, Zetland</span>
            </div>
            <div className='mt_32'>
                <span className='text2_black_1'>Open today 10:00 am</span>
            </div>
        </div>
        <ProjectHorizontalCard />
        <ProjectHorizontalCard />
        <ProjectHorizontalCard />
        <hr style={{margin: 0}}/>
        <div className='flex-col-end py-2 pe-2'>
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
    </>
  )
}

export default PropertyProjectCard
