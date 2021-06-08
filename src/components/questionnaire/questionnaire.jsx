import React, { useState } from 'react';
import NorthHemi from '../../assets/north-hemi.svg';
import SouthHemi from '../../assets/south-hemi.svg';
import "../questionnaire/questionnaire.css";
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';

export default function Questionnaire() {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [hemisphere, setHemisphere] = useState("default");
    return(
        <div className="questionnaire-container">
            {
                (questionNumber == 0) && askHemisphere() 
            }
            {
                (questionNumber == 1) && askDateAndTime()
            }
        </div>
    );

    function askHemisphere(){
        return (
            <div className="question-box">
                <h3 className="question">What hemisphere you from?</h3>
                <Row gutter={[0, 16]}>
                    <Col span={12} >
                        <div className={getHemisphereOptionStyle(hemisphere, "North")}
                            onClick={() => setHemisphere("North")}
                        >
                            <img src={NorthHemi} alt={'North hemisphere option'} className="globes"/>
                            <p className="center-text">North hemisphere</p>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className={getHemisphereOptionStyle(hemisphere, "South")}
                            onClick={() => setHemisphere("South")}
                        >
                            <img src={SouthHemi} alt={'South hemisphere option'} className="globes"/>
                            <p className="center-text">South hemisphere</p>
                        </div>
                    </Col>
                </Row>
                <div onClick={() => setQuestionNumber(questionNumber + 1)} className="submit">Submit</div>
            </div>
        );
    }

    function askDateAndTime(){
        return (
            <div className="question-box">
                <h3 className="question">What's the date and time?</h3>
            </div>
        )
    }

    function getHemisphereOptionStyle(hemisphereSelected, option) {
        if (hemisphereSelected == "default") return "default-option";
        else if(hemisphereSelected == option) return "selected-option";
        else return "unselected-option";
    }
}