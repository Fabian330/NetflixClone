import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
        <img className='header-image' src={assets.header_img} alt="" />
        <div className='header-info'>
            <img className='header-title' src={assets.header_title} alt="" />
            <p>
                A young resident of modern Istanbul discovers ties to an ancient 
                secret order and sets out to save his city from an immortal enemy.
            </p>
            <div className='header-buttons'>
                <a className='play-btn' href="#"><img src={assets.play_icon} alt="" />Play</a>
                <a className='info-btn' href="#"><img src={assets.info_icon} alt="" />More information</a>
            </div>
        </div>
    </div>
  )
}

export default Header