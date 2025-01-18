import React from 'react';
import { assets } from '../../assets/assets';
import AboutContainer from '../../components/AboutContainer/AboutContainer';
import Banner from '../../components/Banner/Banner';
import Promotion from '../../components/Promotion/Promotion';
import './About.css'
function About(){

    return(<>
    
    <Banner home_banner_img={assets.about_banner_img} text="your future is here" btn={false}/>
    <AboutContainer/>
    <Promotion/>
    </>)
}

export default React.memo(About);