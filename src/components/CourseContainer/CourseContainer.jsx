import React from 'react';
import { all_course } from '../../assets/assets';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import Heading from '../Heading/Heading';
import SingleCard from '../SingleCard/SingleCard';
import './CourseContainer.css';

function CourseContainer({len = 6 }){

    return(<>
    
    <div className="featured-course-container">
        <div className="featured-course-center wrapper">
            <Heading heading="featured courses" />
            <section  className='featured-course-section three-template-column paddingTopMobile-50 paddingBottomMobile-50 paddingTopDesktop-50 paddingBottomDesktop-50'>
        {
            all_course.map((item , index) => {

                if( index < len){

                    return(<SingleCard key={item.id} id={item.id} img={item.img} title={item.name} card_type={"course"} />)
                }
            })
        }
     </section>
     {len === 15 ? <></> : <div className="paddingBottomMobile-50 paddingBottomDesktop-100">
     <ButtonContainer text_btn="view all"/>
     </div>}
        </div>
    </div>
    </>)
}

export default React.memo(CourseContainer);