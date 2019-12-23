import React from "react"
import { Button, Row, Col } from 'antd';

import jumboStyles from "./styles/jumbotron.module.css";
import { scale, rhythm } from "../../utils/typography";
import { sleep, repeat } from '../../utils/promise';
import { blue } from '../../utils/colors';
import { IS_MOBILE } from '../../utils/mobile';

const JUMBOTRON_TEXT_SCALE = 2.1;
const BOTTOM_PADDING = 10;
const PARTS = ["software.", 'front end.', 'back end.', 'full stack software.'];
const DURATION = 100;

const Jumbotron = ({topMessage, bottomMessage, bottomMessagePrefix}) => (
    <div className={IS_MOBILE ? jumboStyles.jumbotronMobile : jumboStyles.jumbotron}>
        <Row>
            <h1 style={{...scale(JUMBOTRON_TEXT_SCALE)}}>
                {topMessage}
            </h1>
        </Row>
        <Row>
            <h1 id="element" style={{...scale(JUMBOTRON_TEXT_SCALE)}}>
                {bottomMessagePrefix}<span style={{color:blue[7]}}>{bottomMessage}</span><span className={jumboStyles.blinker}/>
            </h1>
        </Row>
        <Row>
            <Button type="primary">Get in touch</Button>
        </Row>
    </div>
);

class JumbotronWrapper extends React.Component {
    state = {
        message: PARTS[0], 
        deleted: false
    }
    constructor(props, context) {
        super(props, context);
        this.deleteChar = this.deleteChar.bind(this);
        this.addChar = this.addChar.bind(this);
    }

    componentDidMount() {
        let promise = Promise.resolve();
        for(let i = 0; i < PARTS.length-1 ; i++) {
            promise = promise.then(()=>sleep(1000));
            promise = promise.then(()=>this.deleteString(PARTS[i]));
            promise = promise.then(()=>sleep(1000));
            promise = promise.then(()=>this.typeString(PARTS[i+1]));
        }
    }

    deleteString(stringPart) {
        return new Promise ((res)=> {
            repeat(this.deleteChar, stringPart.length).then(res)
        });
    }

    typeString(stringPart) {
        return new Promise ((res)=> {
            var promise = Promise.resolve();
            for(let i = 0; i < stringPart.length; i++) {
                promise = promise.then(()=>this.addChar(stringPart.substring(i, i+1)));
            }
            promise = promise.then(res);
        });
    }

    deleteChar() {
        return new Promise ((res) => {
            sleep(DURATION)
                .then(()=> {
                    this.setState({message: this.state.message.substring(0, this.state.message.length-1)})
                    res();
                });
        })
    }

    addChar (char) {
        return new Promise ((res) => {
            sleep(DURATION)
                .then(()=> {
                    this.setState({message: this.state.message+char})
                    res();
                });
        })
    }

    render() {
        return (
            <Jumbotron 
                topMessage={"Hi, i'm Artur."} 
                bottomMessagePrefix={"I build "}
                bottomMessage={this.state.message}/>
        );
    }
}

export default () => 
    (
    <Row style={{paddingBottom: rhythm(BOTTOM_PADDING)}} type="flex" justify="start">
        <Col>
            <JumbotronWrapper/>
        </Col>
    </Row>
    );