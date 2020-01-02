import React from "react"
import { Row, Col,} from 'antd';
import { useStaticQuery, graphql } from "gatsby";

import jumboStyles from './styles/jumbotron.module.css';
import { IS_MOBILE } from '../../utils/mobile';
import { rhythm } from '../../utils/typography';
import { SectionNumber } from './common';

const TOP_MARGIN = 7;

const AboutMe = ({refCallback}) => {
    const data = useStaticQuery(graphql`query AboutMe {
        markdownRemark(fields: { slug: { regex: "/landing/about/" } }) {
          id
          excerpt(pruneLength: 160)
          html
        }
      }`);
    return (
    <div ref={refCallback} style={{ marginTop:rhythm(TOP_MARGIN)}} className={IS_MOBILE ? jumboStyles.jumbotronMobile : jumboStyles.jumbotron}>
        <Row>
          <SectionNumber number={1}/>
        </Row>
        <Row>
            <section dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Row>
    </div>
);
}

export default AboutMe;