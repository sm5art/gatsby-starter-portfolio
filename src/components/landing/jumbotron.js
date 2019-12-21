import React from "react"
import { Button, Row, Col } from 'antd';

import { blue } from '@ant-design/colors';

import jumboStyles from "./styles/jumbotron.module.css"
import { scale } from "../../utils/typography"

const JUMBOTRON_TEXT_SCALE = 2;

const Jumbotron = ({topMessage, bottomMessage}) => (
    <div className={jumboStyles.jumbotron}>
        <Row>
            <h1 style={{...scale(JUMBOTRON_TEXT_SCALE)}}>
                {topMessage}
            </h1>
        </Row>
        <Row>
            <h1 style={{...scale(JUMBOTRON_TEXT_SCALE)}}>
                {bottomMessage}
            </h1>
        </Row>
        <Row>
            <Button type="primary">Get in touch</Button>
        </Row>
    </div>
);


export default () => 
    (
    <Row type="flex" justify="center">
        <Col>
            <Jumbotron 
                topMessage={"Hi, i'm Artur."} 
                bottomMessage={"I build software."}/>
        </Col>
    </Row>
    );