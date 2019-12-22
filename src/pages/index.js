import React from "react"
import { Link, graphql } from "gatsby"
import Head from '../components/landing/header';
import Jumbotron from '../components/landing/jumbotron';
import AboutMe from '../components/landing/about';

import { blue } from '@ant-design/colors';

import { rhythm } from '../utils/typography';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const HEADER_PADDING = 0.5;

class BlogIndex extends React.Component {
  state = {
    width: null
  }
  componentDidMount() {
    window.addEventListener("resize", ()=>this.setState({width: window.innerWidth}));
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout style={{minHeight:"100vh", background:`${blue[0]}B0` }}>
        <Header style={{paddingLeft: rhythm(HEADER_PADDING),paddingRight: rhythm(HEADER_PADDING), background: "inherit"}}>
          <Head/>
        </Header>
          <Layout style={{background: "inherit"}}>
            <Content style={{marginTop: rhythm(3)}}>
              <Jumbotron/>
              <AboutMe/>
            </Content>
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
