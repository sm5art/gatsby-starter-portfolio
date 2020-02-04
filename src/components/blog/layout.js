import React from "react"
import { Link } from "gatsby"
import { Button } from 'antd';

import { rhythm, scale } from "../../utils/typography"
import { title, theme } from '../../utils/constants';
import { Logo } from '../../components/landing/header';

const BLOG_LAYOUT_WIDTH = 24;

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
          <Link
            to={`/`}
          >
            <Logo/>
          </Link>
      )
    } else {
      header = (
          <Link
            to={`/`}
          >
            <Logo/>
          </Link>
      )
    }
    return (
      <div style={{minHeight: '100vh', background: theme.blogColor}}>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(BLOG_LAYOUT_WIDTH),
          padding: `0 ${rhythm(0.5)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
      </div>
    )
  }
}

export default Layout
