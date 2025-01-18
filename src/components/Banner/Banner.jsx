import React from 'react';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import './Banner.css';

function Banner(porps){

    const {home_banner_img , text , btn , page} = porps;

    return(<>
    <div className={page ?"home-page banner-container" : "banner-container"}>
        <div className="banner-img-component">
            <div className="img-container">
                <img src={home_banner_img} alt="" />
            </div>
        </div>
        <div className="banner-section paddingTopMobile-30 paddingBottomMobile-30">
            <div className="banner-text-content text-center text-container">
                <h1 className="title">Jyothi Prakash Institute of Technology</h1>
                {
                    page ? <p className="desc">Our institution  is a leading institution dedicated to academic excellence and innovation. We offer diverse undergraduate and postgraduate programs, state-of-the-art facilities, and a vibrant campus experience. Join us to shape your future and achieve your dreams.</p>
                    : <h3 className="small-title">{text}</h3>
                }
                {btn ? <ButtonContainer text_btn="get Started"/> : <></>}
            </div>
        </div>
    </div>
    </>)
}

export default React.memo(Banner);