import React from "react"
import { Button, Row, Col } from 'antd';
import Typed from 'typed.js';

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
            <h1 id="element" style={{...scale(JUMBOTRON_TEXT_SCALE)}}>
                {bottomMessage}<span className={jumboStyles.blinker}/>
            </h1>
        </Row>
        <Row>
            <Button type="primary">Get in touch</Button>
        </Row>
    </div>
);

const INITIAL_MESSAGE = "I build software.";
const DURATION = 100;
class JumbotronWrapper extends React.Component {
    state = {
        message: INITIAL_MESSAGE
    }
    constructor(props, context) {
        super(props, context);
        this.deleteChar = this.deleteChar.bind(this);
        this.addChar = this.addChar.bind(this);
    }

    componentDidMount() {
        setTimeout(()=>{
            this.repeat(this.deleteChar, 10)
        }, 2000)
    }

    repeat(func, times) {
        var promise = Promise.resolve();
        while (times-- > 0) promise = promise.then(func);
        return promise;
    }

    deleteChar() {
        return new Promise ((res) => {
            setTimeout(()=> {
                this.setState({message: this.state.message.substring(0, this.state.message.length-1)})
                res();
            }
            , DURATION);
        })
    }

    addChar (char) {
        return new Promise ((res) => {
            setTimeout(()=> {
                this.setState({message: this.state.message+char})
                res();
            }
            , DURATION);
        })
    }

    render() {
        return (
            <Jumbotron 
                topMessage={"Hi, i'm Artur."} 
                bottomMessage={this.state.message}/>
        );
    }
}

export default () => 
    (
    <Row type="flex" justify="center">
        <Col>
            <JumbotronWrapper/>
        </Col>
    </Row>
    );