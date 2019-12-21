import React from "react"
import { Link, graphql } from "gatsby"
import Head from '../components/landing/header';
import { blue } from '@ant-design/colors';

import { rhythm } from '../utils/typography';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout style={{minHeight:"100vh", background:`${blue[0]}B0` }}>
        <Header style={{background: "inherit"}}>
          <Head/>
        </Header>
          <Layout style={{background: "inherit"}}>
            <Content style={{marginTop: rhythm(1.5)}}>main content <Link to="/blog">blog</Link></Content>
          </Layout>
        <Footer style={{background: "inherit"}}>
          <footer style={{textAlign: 'center'}}>
            © {new Date().getFullYear()}, Built with
            {" "}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            {" and ❤️"}
          </footer>
        </Footer>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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
  }
`
