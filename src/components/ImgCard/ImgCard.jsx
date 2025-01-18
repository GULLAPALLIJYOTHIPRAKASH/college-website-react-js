import React from 'react';
import './ImgCard.css';

function ImgCard({img}){

    return(<>
    <div className="imgCard-container paddingBottomMobile-50">
        <img src={img} alt="" />
    </div>
    </>)
}

export default React.memo(ImgCard);