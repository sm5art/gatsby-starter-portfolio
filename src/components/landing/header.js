import React from "react"
import headerStyles from "./styles/header.module.css"
import {Button, Row, Col} from 'antd';
const HeaderLink = ({text, index}) => 
    (<h3 className={headerStyles.link}>
        {"0"}{index}{". "}{text}
    </h3>);

export default () => 
    (
        <Row>
            <Col span={1}>logo</Col>
            <Col offset={3} span={4}><HeaderLink index={1} text={"about"}/></Col>
            <Col offset={1} span={5}><HeaderLink index={2} text={"experience"}/></Col>
            <Col offset={1} span={4}><HeaderLink index={3} text={"blog"}/></Col>
            <Col offset={3} span={1}><Button className={headerStyles.button} type="primary" shape="round" icon="download" size='large'>
          CV
        </Button></Col>
        </Row>);
    /*

        <HeaderLink index={1} text={"about"}/>
        <HeaderLink index={2} text={"experience"}/>
        <HeaderLink index={3} text={"blog"}/>
        <Button className={headerStyles.button} type="primary" shape="round" icon="download" size='large'>
          CV
        </Button>*/