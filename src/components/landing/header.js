import React from "react"
import { Button, Row, Col, Icon, Drawer } from 'antd';
import { useStaticQuery, graphql, Link } from "gatsby";
import Image from "gatsby-image";

import headerStyles from "./styles/header.module.css"
import { scale, rhythm } from "../../utils/typography"
import { IS_MOBILE } from '../../utils/mobile'; 
import { theme } from '../../utils/constants';
import { sleep } from "../../utils/promise";

const LINK_SCALE = 0.5;
const MOBILE_DRAWER_RYTHYM = 1.0;
const DRAWER_WAIT_DURATION = 250;
export const SCROLL_OFFSET = -80;
const LOGO_SPACING = 0.5;
const HEADER_WIDTH = 32;

// link needs to scroll to a certain ref

const HeaderLink = ({text, index, reference, extraFunc }) => 
    (
    <a onClick={reference ? () => {
      if(extraFunc) extraFunc().then(()=>window.scrollTo(0, reference.offsetTop+SCROLL_OFFSET)) 
      else { window.scrollTo(0, reference.offsetTop+SCROLL_OFFSET) }
      } : null } 
      style={{...scale(LINK_SCALE)}} 
      className={headerStyles.link}>
        <span style={{color: theme.numberColor}}>{"0"}{index}{". "}</span>{text}
    </a>
    );

export const Logo = () => {
    const data = useStaticQuery(graphql`
    query LogoQuery {
      avatar: file(absolutePath: { regex: "/logo.png/" }) {
        childImageSharp {
          fixed(width: 55, height: 55) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Image
        style={{marginTop: rhythm(LOGO_SPACING)}}
        fixed={data.avatar.childImageSharp.fixed}
     />
  )
}

const CVButton = () =>
  <Button onClick={()=>window.open('/Resume.pdf')} className={headerStyles.button} type="primary" shape="round" icon="download" size='large'>
            CV
  </Button>

const FullWidthHeader = ({refs}) => {
  return (
    <div>
            <HeaderLink reference={refs[2]} index={1} text={"blog"}/>
            <HeaderLink reference={refs[0]} index={2} text={"about"}/>
            <HeaderLink reference={refs[1]} index={3} text={"experience"}/>
            <CVButton/>
    </div>
);
  }

class HalfWidthHeader extends React.Component {
  state = {
    visible: false
  }
  constructor(props, context) {
    super(props, context);
    this.onClose = this.onClose.bind(this);
    this.extra = this.extra.bind(this);
  }

  onClose() {
    this.setState({visible: false});
  }

  extra () {
    return new Promise ((res) => {
      this.setState({visible: !this.state.visible});
      sleep(DRAWER_WAIT_DURATION).then( ()=>{ res()})
    });
  }

  render() {
    const { refs, } = this.props;
    return (
      <div>
        <Icon onClick={(e)=>{
          e.preventDefault();
          this.setState({visible: true})
          }} type="menu" />
        <Drawer
              placement="right"
              closable={false}
              onClose={this.onClose}
              getContainer={false}
              visible={this.state.visible}
            >
              <Row style={{marginTop: rhythm(MOBILE_DRAWER_RYTHYM)}} type="flex" justify="start">
               <HeaderLink extraFunc={this.extra} reference={refs[2]} index={1} text={"blog"}/>
               </Row>
               <Row style={{marginTop: rhythm(MOBILE_DRAWER_RYTHYM)}} type="flex" justify="start">
                <HeaderLink extraFunc={this.extra} reference={refs[0]} index={2} text={"about"}/>
                </Row>
                <Row style={{marginTop: rhythm(MOBILE_DRAWER_RYTHYM)}} type="flex" justify="start">
                <HeaderLink extraFunc={this.extra} reference={refs[1]} index={3} text={"experience"}/>
                </Row>
              <Row style={{marginTop: rhythm(MOBILE_DRAWER_RYTHYM)}} type="flex" justify="start">
                <CVButton/>
              </Row>
            </Drawer>
      </div>
  );
  }
}

//refs is a list of references to the divs containing About, Experience, and blog sections
export default ({refs}) => 
    (
    <Row style={{
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(HEADER_WIDTH)}} type="flex" justify="space-between">
        <Col><Logo/></Col>
        <Col>{IS_MOBILE ? <HalfWidthHeader refs={refs}/>:  <FullWidthHeader refs={refs}/> }</Col>
    </Row>
    );