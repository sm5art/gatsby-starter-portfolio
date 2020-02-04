import React from "react"
import { Link, graphql } from "gatsby"
import { Layout } from 'antd';

import Head, { SCROLL_OFFSET } from '../components/landing/header';
import Jumbotron from '../components/landing/jumbotron';
import About from '../components/landing/about';
import Blogs from '../components/landing/blogs';
import Experience from '../components/landing/experience';
import SEO from '../components/landing/seo';

import indexStyles from './styles/index.module.css';

import { rhythm } from '../utils/typography';
import { theme, author, description } from '../utils/constants';
import { sleep, repeat } from '../utils/promise';
import { setMobile } from '../utils/mobile';

const { Header, Footer, Content } = Layout;
const HEADER_PADDING = 0.5;
const CONTENT_MAX_WIDTH = 32;
const PAUSE_DURATION = 1000;
const ANIMATION_DURATION = 6000; // duration of animation from css in ms
const COLORS = theme.shiftingColors;
const N_TIMES = 500;
class BlogIndex extends React.Component {
  state = {
    width: null,
    currentIndex: 0,
    backgroundColor: COLORS[0]
  }
  aboutRef = null
  experienceRef = null
  blogsRef = null
  constructor(props, context) {
    super(props, context);
    this.rotateBackgroundColor = this.rotateBackgroundColor.bind(this);
    this.oneRotation = this.oneRotation.bind(this);
    this.startRotations = this.startRotations.bind(this);
    this.initKeyPressLogic = this.initKeyPressLogic.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", ()=>this.setState({width: window.innerWidth})); // set width in state to cause rerender on resize
    repeat(this.startRotations, N_TIMES).then(()=>console.log("no more repeating"));
    this.initKeyPressLogic();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", ()=>this.setState({width: window.innerWidth}));
    document.removeEventListener('keypress', this.func);
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

  initKeyPressLogic (){
      this.func = (event) => {
        if (event.keyCode == '1'.charCodeAt(0)) {
          window.scrollTo(0, this.blogsRef.offsetTop+SCROLL_OFFSET);
        }
        else if (event.keyCode == '2'.charCodeAt(0)) {
          window.scrollTo(0, this.aboutRef.offsetTop+SCROLL_OFFSET);
        }
        else if (event.keyCode == '3'.charCodeAt(0)) {
          window.scrollTo(0, this.experienceRef.offsetTop+SCROLL_OFFSET);
        }
    };
    document.addEventListener("keypress", this.func)
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
      <Layout style={{background: this.state.backgroundColor}} className={indexStyles.container}>
        <SEO
              title={author}
              description={description}
              meta={[{
                name: `google-site-verification`,
                content: "SkuXj_g_uDvvxdLmSZ32ZSEFYFwZ0Yqv5t7pcPak8hg",
              }]}
            />
        <Header style={{position: 'fixed', zIndex: 1, width:'99vw', paddingLeft: rhythm(HEADER_PADDING), paddingRight: rhythm(HEADER_PADDING), background: "inherit"}}>
          <Head refs={[this.aboutRef, this.experienceRef, this.blogsRef]}/>
        </Header>
          <Layout style={{background: "inherit"}}>
            <Content style={{marginTop: rhythm(3), marginLeft:'auto', marginRight:'auto', maxWidth: rhythm(CONTENT_MAX_WIDTH)}}>
              <Jumbotron/>
              <Blogs refCallback={(ref) => this.blogsRef=ref}/>
              <About refCallback={(ref) => this.aboutRef=ref}/>
              <Experience refCallback={(ref) => this.experienceRef=ref}/>
              <Footer style={{background: "inherit"}}>
          <footer>
            © {new Date().getFullYear()}, Built with
            {" "}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            {" and ❤️"}
          </footer>
        </Footer>
           </Content>
          </Layout>
        
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
