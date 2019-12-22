import React from "react"
import { Button, Row, Col, Icon, Drawer } from 'antd';
import jumboStyles from './styles/jumbotron.module.css'


const AboutMe = () => (
    <Row className={jumboStyles.jumbotron} type="flex" justify="center">
        <Col>
            <h1>About me</h1>
        </Col>
    </Row>
);


export default AboutMe;