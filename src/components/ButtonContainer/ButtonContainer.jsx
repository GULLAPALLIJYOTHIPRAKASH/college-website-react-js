import React from 'react';
import './ButtonContainer.css';
import { Link } from 'react-router-dom';

function ButtonContainer(props){

    const {text_btn , url} = props;

    return(<>
    <div className="button-container text-center">
        <Link to={url || "/courses"} >{text_btn || "contact us"}</Link>
    </div>
    </>)
}

export default React.memo(ButtonContainer);