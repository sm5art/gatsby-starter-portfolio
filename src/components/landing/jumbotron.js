import React from "react"
import { Button, Row, Col } from 'antd';

import jumboStyles from "./styles/jumbotron.module.css";
import { scale, rhythm } from "../../utils/typography";
import { sleep, repeat } from '../../utils/promise';
import { IS_MOBILE } from '../../utils/mobile';
import constants from '../../utils/constants';

const JUMBOTRON_TEXT_SCALE = 2.1;
const DURATION = 100;
const PARTS = constants.jumbotron.lines;
const JUMBOTRON_RHYTHM = 2;

const Jumbotron = ({topMessage, bottomMessage, bottomMessagePrefix,}) => (
    <div style={{paddingTop: rhythm(JUMBOTRON_RHYTHM), width: '100%'}} className={IS_MOBILE ? jumboStyles.jumbotronMobile : jumboStyles.jumbotron}>
        <Row>
            <h1 style={{...scale(JUMBOTRON_TEXT_SCALE)}}>
                {topMessage}
            </h1>
        </Row>
        <Row style={{height:'270px'}}>
            <h1 id="element" style={{...scale(JUMBOTRON_TEXT_SCALE)}}>
                {bottomMessagePrefix}<span style={{color: constants.theme.jumbotronTypingColor}}>{bottomMessage}</span><span className={jumboStyles.blinker}/>
            </h1>
        </Row>
        <Row type="flex" justify="end">
            <Button href={`mailto:${constants.contactEmail}`} type="primary">{constants.jumbotron.buttonText}</Button>
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
                topMessage={constants.jumbotron.topMessage} 
                bottomMessagePrefix={constants.jumbotron.bottomMessagePrefix}
                bottomMessage={this.state.message}/>
        );
    }
}

export default () => 
    (
    <Row type="flex" justify="start">
        <Col style={{width:"100%"}}>
            <JumbotronWrapper/>
        </Col>
    </Row>
    );