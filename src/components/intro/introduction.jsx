import Logo from '../../assets/critterpedia-logo.png';
import Blathers from '../../assets/blathers.svg';
import '../intro/introduction.css';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';

export default function Introduction() {
    const siteDescription = "Let’s face it, running an island is hard work. Find out what critters you can catch right now and catch them all.";
    return(
        <div className="introduction-container"> 
            <div>
                <img src={Logo} alt={'Critterpedia Logo'} className="large-logo"/>
            </div>
            <div>
                <Row gutter={[8, 8]}>
                    <Col span={12} >
                        <img src={Blathers} alt={'Blathers the adorable owl'} className="blathers-img"/>
                    </Col>
                    <Col span={12} >
                        <h2 className="intro-slogan">Complete your Critterpedia.</h2>
                        <h2 className="intro-slogan-second">Know what's in season |</h2>
                        <p className="site-description">{siteDescription}</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}