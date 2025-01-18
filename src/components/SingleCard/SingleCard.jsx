import React from 'react';
import { all_course, assets } from '../../assets/assets';
import './SingleCard.css';

function SingleCard({id,  img , title , card_type}){

    

    return(<>
    <article id={id} className="single-article">
        <div className="img-container">
            <img src={img} alt="" />
        </div>
        <div className="text-content text-center">
            <h1 className="title">{title}</h1>
            {card_type == "course" ? <></> : <p className="desc">We offers state-of-the-art facilities to ensure an exceptional learning and campus experience. Our amenities include modern classrooms, a world-class library, advanced laboratories, sports complexes, and comfortable hostels. With cutting-edge technology and vibrant recreational spaces, we provide an environment where students can thrive academically, socially, and personally.</p>}
        </div>
    </article>
    </>)
}

export default React.memo(SingleCard);