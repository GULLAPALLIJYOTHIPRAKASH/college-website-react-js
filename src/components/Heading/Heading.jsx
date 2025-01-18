import React from 'react';
import './Heading.css';

function Heading(props){

    const {heading} = props;

    return(<>

    <div className="heading-section paddingTopMobile-50 paddingTopDesktop-100">
        <h3 className="title">{heading || "featured courses"}</h3>
        <div className="underline"></div>
    </div>
    
    </>)
}

export default React.memo(Heading);