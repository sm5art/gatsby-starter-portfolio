import React from "react"
import { Button, Row, Col, Icon, Drawer } from 'antd';
import { useStaticQuery, graphql, Link } from "gatsby";
import Image from "gatsby-image";

import headerStyles from "./styles/header.module.css"
import { scale, rhythm } from "../../utils/typography"
import { IS_MOBILE } from '../../utils/mobile'; 
import { blue } from '../../utils/colors';

const LINK_SCALE = 0.5;
const MOBILE_DRAWER_RYTHYM = 1.0;

const HeaderLink = ({text, index}) => 
    (
    <span style={{...scale(LINK_SCALE)}} className={headerStyles.link}>
        <span style={{color: blue[6]}}>{"0"}{index}{". "}</span>{text}
    </span>
    );

const HeaderLinkHref = ({href, text, index, style}) => 
    (
    <Link to={href}>
      <span style={style}>
      <HeaderLink text={text} index={index}/>
      </span>
    </Link>
    );

const Logo = () => {
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
        fixed={data.avatar.childImageSharp.fixed}
     />
  )
}

const CVButton = () =>
  <Button className={headerStyles.button} type="primary" shape="round" icon="download" size='large'>
            CV
  </Button>

const FullWidthHeader = () => (
  <div>
            <HeaderLinkHref index={1} text={"about"}/>
            <HeaderLinkHref index={2} text={"experience"}/>
            <HeaderLinkHref index={3} text={"blog"} href={"/blog"}/>
            <CVButton/>
    </div>
);

class HalfWidthHeader extends React.Component {
  state = {
    visible: false
  }
  constructor(props, context) {
    super(props, context);
    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.setState({visible: false});
  }
  render() {
    return (
      <div>
        <Icon onClick={()=>this.setState({visible: true})} type="menu" />
        <Drawer
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <Row style={{marginTop: rhythm(MOBILE_DRAWER_RYTHYM)}} type="flex" justify="start">
               <HeaderLinkHref index={1} text={"about"}/>
               </Row>
               <Row style={{marginTop: rhythm(MOBILE_DRAWER_RYTHYM)}} type="flex" justify="start">
                <HeaderLinkHref index={2} text={"experience"}/>
                </Row>
                <Row style={{marginTop: rhythm(MOBILE_DRAWER_RYTHYM)}} type="flex" justify="start">
                <HeaderLinkHref index={3} text={"blog"} href={"/blog"}/>
                </Row>
              <Row style={{marginTop: rhythm(MOBILE_DRAWER_RYTHYM)}} type="flex" justify="start">
                <CVButton/>
              </Row>
            </Drawer>
      </div>
  );
  }
}
export default () => 
    (
    <Row type="flex" justify="space-between">
        <Col><Logo/></Col>
        <Col>{IS_MOBILE ? <HalfWidthHeader/>:  <FullWidthHeader/> }</Col>
    </Row>
    );