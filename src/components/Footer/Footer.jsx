import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { assets } from '../../assets/assets';

function Footer(){

    return(<>
    <div className="footer-container">
        <div className="footer-center wrapper">
            <div className="footer-links-main">
                <ul className="footer-links">
                    <li><NavLink  to="/" className="footer-link">home</NavLink></li>
                    <li><NavLink  to="/about" className="footer-link">about</NavLink></li>
                    <li><NavLink  to="/courses" className="footer-link">courses</NavLink></li>
                    <li><NavLink  to="/contact" className="footer-link">contact</NavLink></li>
                </ul>
            </div>
            <div className="footer-social-links-main">
                <ul className="footer-social-links">
                    <li className="footer-social-link"><a href="https://www.linkedin.com/in/jyothiprakash-gullapalli-186857207/" target='_blank'><img src={assets.linkedin_icon} alt="" /></a></li>
                    <li className="footer-social-link"><a href="https://www.linkedin.com/in/jyothiprakash-gullapalli-186857207/" target='_blank'><img src={assets.instagram_icon} alt="" /></a></li>
                    <li className="footer-social-link"><a href="https://www.linkedin.com/in/jyothiprakash-gullapalli-186857207/" target='_blank'><img src={assets.youtube_icon} alt="" /></a></li>
                    <li className="footer-social-link"><a href="https://www.linkedin.com/in/jyothiprakash-gullapalli-186857207/" target='_blank'><img src={assets.github_icon} alt="" /></a></li>
                </ul>
            </div>
            <div className="footer-copyright-section">
                <p className="footer-copy-right">Copyright 2021 - {new Date().getFullYear()}, Made by Gullapalli Jyothi Prakash</p>
            </div>
        </div>
    </div>
    </>)
}

export default React.memo(Footer);