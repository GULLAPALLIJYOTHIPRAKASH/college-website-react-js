import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Navbar.css';

function Navbar(props){

    const navigate = useNavigate();
    
    const {show_sidebar , stickynav} = props;
    

    return(<>
    <nav className={ stickynav > 50 ? "navbar-container navbar-sticky": "navbar-container"}>
        <div className="navbar-center wrapper">
            <div className="navbar-logo">
                <img src={assets.university_icon} alt=""  onClick={() => navigate('/')} />
            </div>
            <div className="navbar-hamburger" onClick={() => show_sidebar()}>
                <img src={assets.bar_icon} alt="" />
            </div>
            <div className="nav-links-main">
                <ul className="nav-links">
                    <li>
                    <NavLink to="/" className="nav-link">home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/about" className="nav-link">about</NavLink>
                    </li>
                    <li>
                    <NavLink to="/courses" className="nav-link">courses</NavLink>
                    </li>
                    <li>
                    <NavLink to="/contact" className="nav-link">contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="nav-social-links-main">
                <ul className="nav-social-links">
                    <li className="nav-social-link">
                        <a href="https://www.linkedin.com/in/jyothiprakash-gullapalli-186857207/" target='_blank'>
                            <img src={assets.linkedin_icon} alt="" />
                        </a>
                    </li>
                    <li className="nav-social-link">
                        <a href="https://www.linkedin.com/in/jyothiprakash-gullapalli-186857207/" target='_blank'>
                            <img src={assets.instagram_icon} alt="" />
                        </a>
                    </li>
                    <li className="nav-social-link">
                        <a href="https://www.linkedin.com/in/jyothiprakash-gullapalli-186857207/" target='_blank'>
                            <img src={assets.youtube_icon} alt="" />
                        </a>
                    </li>
                    <li className="nav-social-link">
                        <a href="https://www.linkedin.com/in/jyothiprakash-gullapalli-186857207/" target='_blank'>
                            <img src={assets.github_icon} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>)
}

export default React.memo(Navbar);