import React from 'react';
import { assets } from '../../assets/assets';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import Heading from '../Heading/Heading';
import './Promotion.css';

function Promotion(){

    return(<>
    <div className="contact-promotion-container">
        <div className="contact-promotion-center wrapper">
            <Heading heading="contact us for your future"/>
            <div className="contact-promotion-section paddingTopMobile-50 paddingTopDesktop-50 paddingBottomMobile-50 paddingBottomDesktop-100">
                <div className="img-container">
                    <img src={assets.contact_promotion_img} alt="" />
                    <div className="promo-text-content text-center text-container">
                    <h2 className="title">enroll for our various b.tech courses anywhere from india.</h2>
                    {/* <div className="button-container">
                        <a>contact us</a>
                    </div> */}
                    <ButtonContainer text_btn="contact us" url={"/contact"}/>
                </div>
                </div>
                
            </div>
        </div>
    </div>
    </>)
}

export default React.memo(Promotion);