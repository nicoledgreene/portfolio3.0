/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import { connect, Provider } from "react-redux"
// import { store } from '../state/ReduxWrapper';
import { GlobalStyle, light, dark } from "../theme"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, isDarkMode }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    {/* <Provider store={store}> */}
      <ThemeProvider theme={isDarkMode ? light : dark}>
        <GlobalStyle />
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            // style={{
            //   margin: `0 auto`,
            //   maxWidth: 960,
            //   padding: `0px 1.0875rem 1.45rem`,
            //   paddingTop: 0,
            // }}
          >
            <main>{children}</main>
            <footer>
              {/* © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a> */}
            </footer>
          </div>
        </ThemeProvider>
      {/* </Provider> */}
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout


const mapStateToProps = state => ({
  isDarkMode: state.reducer.isDarkMode,
})

export default connect(mapStateToProps)(Layout)
