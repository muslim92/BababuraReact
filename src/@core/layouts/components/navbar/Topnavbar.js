import React from 'react'
import { Phone } from 'react-feather'
import { Link } from 'react-router-dom'

const Topnavbar = () => {
  return (
    <div className='top-navbar'>
        <div className="flex-row-between align-items-center container py_11">
            <div className='flex-row-start gap-2'>
                <Link className='text_black_1'>For Agents</Link>
                <div className='white-line'></div>
                <Link className='text_black_1'>For Owners</Link>
                <div className='white-line'></div>
                <Link className='text_black_1'>For Property Developers</Link>
                <div className='white-line'></div>
                <Link className='text_black_1'>Commercial Real Estate</Link>
            </div>
            {/* <div className='flex-row-start align-items-center gap_6'>
                <Phone size={13}/>
                <span className='text_black_1'>1300 393 727</span>
            </div> */}
        </div>
    </div>
  )
}

export default Topnavbar
