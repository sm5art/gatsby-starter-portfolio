import React from "react"
import {Button, Row, Col} from 'antd';
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { blue } from '@ant-design/colors';

import headerStyles from "./styles/header.module.css"
import { scale } from "../../utils/typography"

const HeaderLink = ({text, index}) => 
    (<span style={{...scale(0.5)}} className={headerStyles.link}>
        <span style={{color: blue[6]}}>{"0"}{index}{". "}</span>{text}
    </span>);

const Logo = () => {
    const data = useStaticQuery(graphql`
    query LogoQuery {
      avatar: file(absolutePath: { regex: "/logo.png/" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
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
export default () => 
    (
    <Row type="flex" justify="space-between">
        <Col><Logo/></Col>
        <Col>
            <HeaderLink index={1} text={"about"}/>
            <HeaderLink index={2} text={"experience"}/>
            <HeaderLink index={3} text={"blog"}/>
            <Button className={headerStyles.button} type="primary" shape="round" icon="download" size='large'>
        CV
            </Button>
        </Col>
    </Row>
    );