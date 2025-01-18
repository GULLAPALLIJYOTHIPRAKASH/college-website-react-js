import React from 'react';
import { all_campus, all_course } from '../../assets/assets';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import Heading from '../Heading/Heading';
import LocationCard from '../LocationCard/LocationCard';
import SingleCard from '../SingleCard/SingleCard';
import './CampusContainer.css';


function CampusContainer(){

    return(<>
    
    <div className="campus-container">
        <div className="campus-center wrapper">
            <Heading heading="our campus in india" />
            <section   className="campus-section three-template-column paddingTopMobile-50 paddingBottomMobile-50 paddingTopDesktop-50 paddingBottomDesktop-50">
        {
            all_campus.map((item) => {

                return(<LocationCard key={item.id} id={item.id} img={item.img} title={item.name} loc={item.location}/> )
                
            })
        }
     </section>
        </div>
    </div>
    </>)
}

export default React.memo(CampusContainer);