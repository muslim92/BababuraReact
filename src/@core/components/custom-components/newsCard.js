/* eslint-disable arrow-spacing */
import React from 'react'
import './components.scss'
import { Link } from 'react-router-dom'

const NewsCard = ({ title, img }) => {
  return (
    <div className='news-card'>
      <img src={img} style={{width: '100%', height: 200, objectFit: 'cover'}} />
      <div className='mt_24'>
        <span className='text_black_6'>{title}</span>
      </div>
    </div>
  )
}

export default NewsCard
