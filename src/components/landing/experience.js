import React from "react"
import { Button, Row, Col, Icon, Drawer } from 'antd';
import { useStaticQuery, graphql } from "gatsby";

import jumboStyles from './styles/jumbotron.module.css';


const Experience = () => {
    const data = useStaticQuery(graphql`query Experience {
        markdownRemark(fields: { slug: { regex: "/landing/experience/" } }) {
          id
          excerpt(pruneLength: 160)
          html
        }
      }`);
    return (
    <Row className={jumboStyles.jumbotron} type="flex" justify="center">
        <Col>
            <section dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Col>
    </Row>
);
}

export default Experience;