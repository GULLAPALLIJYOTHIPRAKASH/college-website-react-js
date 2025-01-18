import React from 'react';
import { assets } from '../../assets/assets';
import Banner from '../../components/Banner/Banner';
import CourseContainer from '../../components/CourseContainer/CourseContainer';
import Promotion from '../../components/Promotion/Promotion';
import './Course.css'
function Course(){

    return(<>

    <Banner home_banner_img={assets.course_banner_img} text="choose your courses for future" btn={false} />
    <CourseContainer len={15}/>
    <Promotion/>


    </>)
}

export default React.memo(Course);