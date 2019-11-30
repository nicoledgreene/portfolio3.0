import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Logo = (props) => {
  // const queryMap = {
  //   blueRight: 'bluegreylogoright.png',
  //   blueLeft: 'bluegreylogoleft.png',
  //   whiteRight: 'whitelogoright.png',
  //   whiteLeft: 'whitelogoleft.png'
  // }

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logos/bluegreylogoright.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Logo;

// logos/`+queryMap[props.logoKey]+`