import { assets } from '../../assets/assets';
import ButtonContainer from '../../components/ButtonContainer/ButtonContainer';
import './NotFound.css';

function NotFound(){

    return(<>
    <div className="notfound-container paddingTopMobile-50 paddingTopDesktop-50 paddingBottomMobile-50 paddingBottomDesktop-50">
        <div className="notfound-center wrapper">
            <div className="img-container">
                <img src={assets.error_img} alt="" />
            </div>
           <ButtonContainer text_btn="back to home"  url="/" />
        </div>
    </div>

    </>)
}

export default NotFound;