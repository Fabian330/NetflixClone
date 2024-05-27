import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const navRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 1) {
                navRef.current.classList.add('navbar-dark');
            }else{
                navRef.current.classList.remove('navbar-dark');
            }
        })
    }, [])

  return (
    <div ref={navRef} className='navbar'>
        <div className='navbar-logo'>
            <img src={assets.logo} alt="" />
        </div>
        <div className='explore-dropdown'>
            <div>
            <p>Explore</p>
            <img src={assets.caret_icon} alt="" />
            </div>
        <img className='explore-dropdown-icon' src={assets.caret_icon} alt="" />
        <ul className='navbar-links'>
            <li className='active'>Home</li>
            <li>Series</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My list</li>
            <li>Browse by languages</li>
        </ul>
        </div>
        <div className='navbar-right-side'>
            <img className='search' src={assets.search_icon} alt="" />
            <p>Children</p>
            <div className='notif'>
                <img className='bell' src={assets.bell_icon} alt="" />
                <span className='counter'>12</span>
            </div>
            <div className='user'>
                <img className='profile' src={assets.profile} alt="" />
                <img className='caret' src={assets.caret_icon} alt="" />
                <img className='caret-dropdown' src={assets.caret_icon} alt="" />
                <div className='user-dropdown'>
                    <div>
                    <p><img src={assets.profile} alt="" /> User 2</p>
                    <p><img src={assets.profile} alt="" /> Children</p>
                    <p>Manage profiles</p>
                    <p>Transfer profile</p>
                    <p>Account</p>
                    <p>Help center</p>
                    </div>
                    <hr />
                    <p className='sign-out'>Sign out of netflix</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar