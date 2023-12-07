import React from 'react'
import './components.scss'
import PerfectScrollbar from "react-perfect-scrollbar";
import FeaturedListingHorizontal from './FeaturedListinHorizontal';

const FeaturedListingSec = () => {
  return (
    <div className='featuredListingSec'>
        <div className='mt_32'>
            <span className='text_black_4'>Featured listings</span>
            <hr />
        </div>
        <PerfectScrollbar
            className="customizer-content"
            style={{height: 500}}
        >
            <FeaturedListingHorizontal />
            <FeaturedListingHorizontal />
            <FeaturedListingHorizontal />
            <FeaturedListingHorizontal />
            <FeaturedListingHorizontal />
            <FeaturedListingHorizontal />
        </PerfectScrollbar>
    </div>
  )
}

export default FeaturedListingSec
