import React from 'react';
import { assets } from '../../assets/assets';
import Banner from '../../components/Banner/Banner';
import CampusContainer from '../../components/CampusContainer/CampusContainer';
import CourseContainer from '../../components/CourseContainer/CourseContainer';
import FacilitiesContainer from '../../components/FacilitiesContainer/FacilitiesContainer';
import Promotion from '../../components/Promotion/Promotion';
import './Home.css'
function Home(){

    return(<>
        <Banner home_banner_img={assets.home_banner_img} btn={true} page={true}/>
        <CourseContainer />
        <CampusContainer/>
        <FacilitiesContainer/>
        <Promotion/>
        
    </>)
}

export default React.memo(Home);