import React from "react"
import { Row, Col, } from 'antd';
import { useStaticQuery, graphql, Link } from "gatsby";

import jumboStyles from './styles/jumbotron.module.css';
import { IS_MOBILE } from '../../utils/mobile';
import { rhythm } from '../../utils/typography';
import { filterPosts } from "../../utils/blog";
import { SectionNumber } from './common';

const TOP_MARGIN = 7;

const Blogs = ({refCallback}) => {
    const data = useStaticQuery(graphql`query Blogs {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
              }
            }
          }
        }
      }`);
    const posts = filterPosts(data.allMarkdownRemark.edges);
    return (
    <div ref={refCallback} style={{ marginTop:rhythm(TOP_MARGIN)}} className={IS_MOBILE ? jumboStyles.jumbotronMobile : jumboStyles.jumbotron}>
        <Row><SectionNumber number={1}/></Row>
        <Row>
            <h1>{"Blogs"}</h1>
            {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
                return (
                    <article key={node.fields.slug}>
                    <header>
                        <h3
                        style={{
                            marginBottom: rhythm(1 / 4),
                        }}
                        >
                        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                            {title}
                        </Link>
                        </h3>
                        <small>{node.frontmatter.date}</small>
                    </header>
                    <section>
                        <p
                        dangerouslySetInnerHTML={{
                            __html: node.frontmatter.description || node.excerpt,
                        }}
                        />
                    </section>
                    </article>
                )
            })}
        </Row>
    </div>
);
}

export default Blogs;