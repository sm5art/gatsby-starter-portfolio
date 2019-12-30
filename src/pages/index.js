import React from "react"
import { Link, graphql } from "gatsby"
import { Layout } from 'antd';

import Head from '../components/landing/header';
import Jumbotron from '../components/landing/jumbotron';
import About from '../components/landing/about';
import Blogs from '../components/landing/blogs';
import Experience from '../components/landing/experience';
import SEO from '../components/landing/seo';

import indexStyles from './styles/index.module.css';

import { rhythm } from '../utils/typography';
import { theme, author, description } from '../utils/constants';
import { sleep, repeat } from '../utils/promise';

const { Header, Footer, Content } = Layout;
const HEADER_PADDING = 0.5;
const PAUSE_DURATION = 300;
const ANIMATION_DURATION = 3000; // duration of animation from css in ms
const COLORS = theme.shiftingColors;
const N_TIMES = 500;
class BlogIndex extends React.Component {
  state = {
    width: null,
    currentIndex: 0,
    backgroundColor: COLORS[0]
  }
  constructor(props, context) {
    super(props, context);
    this.rotateBackgroundColor = this.rotateBackgroundColor.bind(this);
    this.oneRotation = this.oneRotation.bind(this);
    this.startRotations = this.startRotations.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", ()=>this.setState({width: window.innerWidth})); // set width in state to cause rerender on resize
    repeat(this.startRotations, N_TIMES).then(()=>console.log("no more repeating"));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", ()=>this.setState({width: window.innerWidth}));
  }

  rotateBackgroundColor() {
    return new Promise(res => {
      const nextIndex = this.state.currentIndex+1 >= COLORS.length ? 0:  this.state.currentIndex+1;
      this.setState({currentIndex: nextIndex, backgroundColor: COLORS[nextIndex]});
      sleep(ANIMATION_DURATION).then(res);
    })
  }
  
  oneRotation () {
    let promise = Promise.resolve();
    promise = promise.then(()=>sleep(PAUSE_DURATION))
    promise = promise.then(()=>this.rotateBackgroundColor());
    return promise;
  }

  startRotations() {
    let promise = Promise.resolve();
    for(let i = 0; i < COLORS.length; i++) {
      promise = promise.then(()=>this.oneRotation());
    }
    return promise;
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
      //<Layout className={`${indexStyles.container} ${this.state.background}`}>
      <Layout style={{background: this.state.backgroundColor}} className={indexStyles.container}>
    <SEO
          title={author}
          description={description}
        />
        <Header style={{paddingLeft: rhythm(HEADER_PADDING), paddingRight: rhythm(HEADER_PADDING), background: "inherit"}}>
          <Head/>
        </Header>
          <Layout style={{background: "inherit"}}>
            <Content style={{marginTop: rhythm(3)}}>
              <Jumbotron/>
              <About/>
              <Experience/>
              <Blogs/>
            </Content>
          </Layout>
        <Footer style={{background: "inherit"}}>
          <footer>
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
