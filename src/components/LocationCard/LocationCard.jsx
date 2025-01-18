import React from 'react';
import { all_campus, assets } from '../../assets/assets';
import './LocationCard.css';

function LocationCard({id , title , img  , loc}){

    return(<>
    <article id={id} className='location-card'>
        <div className="img-container">
            <img src={img} alt="" />
            <div className="share-icon">
                <img src={assets.share_icon} alt="" />
            </div>
        </div>
        <div className="text-content text-center">
            <h1 className="title">{title}</h1>
            <p className="desc">We offers world-class education with diverse programs, cutting-edge facilities, and a vibrant campus life. Empowering students to achieve excellence and build successful futures.</p>
            <h3 className="location">{loc}</h3>


        </div>
    </article>
    
    </>)

}

export default React.memo(LocationCard);