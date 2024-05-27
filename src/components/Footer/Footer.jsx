import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.instagram_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.youtube_icon} alt="" />
        </div>
        <div className="footer-links">
            <table>
                <tr>
                    <td><a href="#">Audio description</a></td>
                    <td><a href="#">Help center</a></td>
                    <td><a href="#">Gift cards</a></td>
                    <td><a href="#">Media center</a></td>
                </tr>
                <tr>
                    <td><a href="#">Investor relations</a></td>
                    <td><a href="#">Jobs</a></td>
                    <td><a href="#">Terms of use</a></td>
                    <td><a href="#">Privacy</a></td>
                </tr>
                <tr>
                    <td><a href="#">Legal notices</a></td>
                    <td><a href="#">Cookie preferences</a></td>
                    <td><a href="#">Corporate information</a></td>
                    <td><a href="#">Contact us</a></td>
                </tr>
            </table>
        </div>
        <button className='code-btn'>Service code</button>
        <p>© 1997 - 2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer