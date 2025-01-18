import React from 'react';
import { assets } from '../../assets/assets';
import AboutInfo from '../AboutInfo/AboutInfo';
import Heading from '../Heading/Heading';
import ImgCard from '../ImgCard/ImgCard';
import './AboutContainer.css';

function AboutContainer(){

    return(<>
    <div className="about-container">
        <div className="about-center wrapper">
            <Heading  heading="about us" />
            <div className="about-section paddingTopMobile-50 paddingBottomMobile-50 paddingTopDesktop-100 paddingBottomDesktop-100" >
                <ImgCard img={assets.about_section_img}/>
                <AboutInfo />
            </div>
        </div>
    </div>
    </>)
}

export default React.memo(AboutContainer);