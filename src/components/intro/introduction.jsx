import Logo from '../../assets/critterpedia-logo.png';
import Blathers from '../../assets/blathers.svg';
import '../intro/introduction.css';

export default function Introduction() {
    return(
        <div className="introduction-container"> 
            <div>
                <img src={Logo} alt={'Critterpedia Logo'} className="large-logo"/>
            </div>
            <div>
                <span>
                    <img src={Blathers} alt={'Blathers the adorable owl'} style={{width: '40%'}}/>
                </span>
                <span>
                    <h2>Complete your Critterpedia.</h2>
                </span>
            </div>
        </div>
    );
}