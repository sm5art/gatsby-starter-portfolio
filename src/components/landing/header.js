import React from "react"
import { Button, Row, Col, Icon } from 'antd';
import { useStaticQuery, graphql, Link } from "gatsby";
import Image from "gatsby-image";

import { blue } from '@ant-design/colors';

import headerStyles from "./styles/header.module.css"
import { scale } from "../../utils/typography"
import { IS_MOBILE } from '../../utils/mobile'; 

const LINK_SCALE = 0.5;

const HeaderLink = ({text, index}) => 
    (
    <span style={{...scale(LINK_SCALE)}} className={headerStyles.link}>
        <span style={{color: blue[6]}}>{"0"}{index}{". "}</span>{text}
    </span>
    );

const HeaderLinkHref = ({href, text, index}) => 
    (
    <Link to={href}>
      <HeaderLink text={text} index={index}/>
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

const FullWidthHeader = () => (
  <div>
            <HeaderLinkHref index={1} text={"about"}/>
            <HeaderLinkHref index={2} text={"experience"}/>
            <HeaderLinkHref index={3} text={"blog"} href={"/blog"}/>
            <Button className={headerStyles.button} type="primary" shape="round" icon="download" size='large'>
        CV
            </Button>
    </div>
);

const HalfWidthHeader = () => (
  <Icon type="menu" />
);
export default () => 
    (
    <Row type="flex" justify="space-between">
        <Col><Logo/></Col>
        <Col>{IS_MOBILE ? <HalfWidthHeader/>:  <FullWidthHeader/> }</Col>
    </Row>
    );