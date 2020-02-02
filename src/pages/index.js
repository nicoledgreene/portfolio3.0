import React from "react"
import 'materialize-css/dist/css/materialize.min.css';

import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Nicole Greene" />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
    <div className="container">
      <div className="logo-container">
        <div className="site-title">
          <span>Nicole Greene</span>
          <span>creative technologist</span>
        </div>
        <Logo />
      </div>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
