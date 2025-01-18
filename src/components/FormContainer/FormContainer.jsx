import React from 'react';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import './FormContainer.css';

function FormContainer(){

    return(<>
    <div className="form-container">
        <div className="form-center">
            <div className="form-input">
                <input type="text" name="username" id="username" placeholder='Enter your name' />
            </div>
            <div className="form-input">
                <input type="email" name="email" id="email" placeholder='Enter your email' />
            </div>
            <div className="form-input">
                <textarea name="message" id="message" rows="30" cols="5" placeholder="Please write your message"></textarea>
            </div>
            <ButtonContainer text_btn="submit"  url={'/contact'} />
        </div>
    </div>
    </>)
}

export default React.memo(FormContainer);