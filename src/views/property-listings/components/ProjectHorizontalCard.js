import React from 'react'
import './components.scss'
import { BathIcon, BedIcon, CarIcon, CommonImg2, GreyChevronIcon } from '../../../assets/images/custom-images'
import { Button } from 'reactstrap'
import { ChevronRight } from 'react-feather'
const ProjectHorizontalCard = () => {
  return (
    <div className='project-h-card'>
        <div className='flex-row-start gap_20'>
            <img src={CommonImg2} className='phc-img'/>
            <div className='flex-row-between align-items-center w-100 pe-5 pt-2'>
                <div>
                    <span className='text_black_14'>from $765k - $876k</span>
                    <div>
                    <span className='text_grey-suit_2'>The heart and soul of Atlas</span>
                </div>
                <div className='flex-row-start mt_20 gap_16'>
                    <div className='flex-row-start align-items-center gap_5'>
                        <img src={BedIcon} />
                        <span className='text_black-marlin_1'>Beds: <span className='text2_black-marlin_1'>4</span></span>
                    </div>
                    <div className='flex-row-start align-items-center gap_5'>
                        <img src={BathIcon} />
                        <span className='text_black-marlin_1'>Baths: <span className='text2_black-marlin_1'>4</span></span>
                    </div>
                    <div className='flex-row-start align-items-center gap_5'>
                        <img src={CarIcon} />
                        <span className='text_black-marlin_1'>Cars: <span className='text2_black-marlin_1'>4</span></span>
                    </div>
                </div>
                </div>
                <div style={{cursor: 'pointer'}}>
                    <img src={GreyChevronIcon}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectHorizontalCard
