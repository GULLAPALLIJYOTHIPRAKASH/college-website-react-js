import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Sidebar.css';

function Sidebar(props){

    const navigate = useNavigate();

    const {close_sidebar , sidebar} = props;



    return(<>
    <aside className={sidebar ? 'sidebar-container show-sidebar ' : 'sidebar-container'}>
        <div className="sidebar-center wrapper">
            <div className="sidebar-header">
                <div className="sidebar-logo">
                    <img src={assets.university_icon} alt="" onClick={() =>{ navigate('/'); close_sidebar();}} />
                </div>
                <div className="sidebar-close" onClick={() => close_sidebar() }>
                    <img src={assets.close_icon} alt="" />
                </div>
            </div>
            <div className="sidebar-links-main">
                <ul className="sidebar-links">
                    <li><NavLink onClick={() => close_sidebar() } to="/" className="sidebar-link">home</NavLink></li>
                    <li><NavLink onClick={() => close_sidebar() } to="/about" className="sidebar-link">about</NavLink></li>
                    <li><NavLink onClick={() => close_sidebar() } to="/courses" className="sidebar-link">courses</NavLink></li>
                    <li><NavLink onClick={() => close_sidebar() } to="/contact" className="sidebar-link">contact</NavLink></li>
                </ul>
            </div>
        </div>
    </aside>
    </>)
}

export default React.memo(Sidebar);