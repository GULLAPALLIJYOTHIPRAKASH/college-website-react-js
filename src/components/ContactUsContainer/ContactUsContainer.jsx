import React from 'react';
import { assets } from '../../assets/assets';
import FormContainer from '../FormContainer/FormContainer';
import Heading from '../Heading/Heading';
import ImgCard from '../ImgCard/ImgCard';
import './ContactUsContainer.css';

function ContactUsContainer(){

    return(<>
    <div className="contactus-container">
        <div className="contactus-center wrapper">
            <Heading heading="contact us"/>
            <div className="contactus-section paddingTopMobile-50 paddingBottomMobile-50 paddingTopDesktop-50 paddingBottomDesktop-100">
                <ImgCard  img={assets.contact_section_img}/>
                <FormContainer />
            </div>
        </div>
    </div>
    </>)
}
export default React.memo(ContactUsContainer);