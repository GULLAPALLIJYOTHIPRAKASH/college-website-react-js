import React from 'react';
import { all_course, all_facility } from '../../assets/assets';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import Heading from '../Heading/Heading';
import SingleCard from '../SingleCard/SingleCard';
import './FacilitiesContainer.css';

function FacilitiesContainer(){

    return(<>
    
    <div className="facilities-container">
        <div className="facilities-center wrapper">
            <Heading heading="our facilities in JPT" />
            <section  className='facilities-section three-template-column paddingTopMobile-50 paddingBottomMobile-50 paddingTopDesktop-50 paddingBottomDesktop-100'>
        {
            all_facility.map((item) => {


                    return(<SingleCard key={item.id} id={item.id} img={item.img} title={item.name} card_type="facilities" /> )
        
            })
        }
     </section>
        </div>
    </div>
    </>)
}

export default React.memo(FacilitiesContainer);