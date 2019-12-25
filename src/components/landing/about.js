import React from "react"
import { Row, Col,} from 'antd';
import { useStaticQuery, graphql } from "gatsby";

import jumboStyles from './styles/jumbotron.module.css';
import { IS_MOBILE } from '../../utils/mobile';
import { rhythm } from '../../utils/typography';
import { SectionNumber } from './common';
const TOP_MARGIN = 10;
const AboutMe = () => {
    const data = useStaticQuery(graphql`query AboutMe {
        markdownRemark(fields: { slug: { regex: "/landing/about/" } }) {
          id
          excerpt(pruneLength: 160)
          html
        }
      }`);
    return (
    <Row style={{ marginTop:rhythm(TOP_MARGIN)}} className={IS_MOBILE ? jumboStyles.jumbotronMobile : jumboStyles.jumbotron} type="flex" justify="start">
        <Col>
          <SectionNumber number={1}/>
        </Col>
        <Col>
            <section dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Col>
    </Row>
);
}

export default AboutMe;