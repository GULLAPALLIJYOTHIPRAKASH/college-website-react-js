import React from 'react';
import { assets } from '../../assets/assets';
import Banner from '../../components/Banner/Banner';
import ContactUsContainer from '../../components/ContactUsContainer/ContactUsContainer';
import Promotion from '../../components/Promotion/Promotion';
import './Contact.css'
function Contact(){

    return(<>
    
    <Banner home_banner_img={assets.contact_banner_img} text="contact us for more information" btn={false} />
    <ContactUsContainer />
    </>)
}

export default React.memo(Contact);