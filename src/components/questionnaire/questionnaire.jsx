import React, { useState } from 'react';
import NorthHemi from '../../assets/north-hemi.svg';
import SouthHemi from '../../assets/south-hemi.svg';
import "../questionnaire/questionnaire.css";
import { Row, Col, Dropdown, Menu, Button, TimePicker } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const months = ["January", "February", "March", "April", "May", "June", "July", "August",
                "September", "October", "November", "December", "Any"];

export default function Questionnaire() {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [hemisphere, setHemisphere] = useState("default");
    const [month, setMonth] = useState('Pick a month');
    const [time, setTime] = useState('default time');

    const monthOptions = (
        <Menu>
            {months.map(month => {
                return(
                    <Menu.Item>
                        <a onClick={() => setMonth(month)}>
                            {month}
                        </a>
                    </Menu.Item>
                );
            })}
        </Menu>
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
                <Row style={{width: '40%', margin: '0 35% 20px 35%'}}>
                    <Col span={18} push={6}>
                        <Dropdown overlay={monthOptions}>
                            <Button>
                                {month} <DownOutlined />
                            </Button>
                        </Dropdown>
                    </Col>
                    <Col span={6} pull={18} className="dropdown-label">
                        Date:
                    </Col>
                </Row>
                <Row style={{width: '40%', margin: '0 35%'}}>
                    <Col span={18} push={6}>
                            <TimePicker use12Hours format="h:mm a"/>
                    </Col>
                    <Col span={6} pull={18} className="dropdown-label">
                        Time:
                    </Col>
                </Row>
                <div onClick={() => setQuestionNumber(questionNumber + 1)} className="submit">Submit</div>
            </div>
        )
    }

    function getHemisphereOptionStyle(hemisphereSelected, option) {
        if (hemisphereSelected == "default") return "default-option";
        else if(hemisphereSelected == option) return "selected-option";
        else return "unselected-option";
    }

    return(
        <div className="questionnaire-container">
            {
                (questionNumber == 0) ? askHemisphere() : askDateAndTime()
            }
        </div>
    );
}