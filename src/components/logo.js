import React from "react";
import Img from "gatsby-image";
import { connect } from 'react-redux';
import { StaticQuery, graphql } from "gatsby";

const Logo = ({isDarkMode}) => {
  return (
    <StaticQuery
      query={graphql`
        {
          blueLogo: file(relativePath: { eq: "logos/bluegreylogoright.png" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          whiteLogo: file(relativePath: { eq: "logos/whitelogoleft.png" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        (isDarkMode) ? ( <Img
            fluid={data.whiteLogo.childImageSharp.fluid}
          />
        ) : (
          <Img
            fluid={data.blueLogo.childImageSharp.fluid}
          />
        )
      )}
    />
  )
}

export default connect(
  null
)(Logo)
