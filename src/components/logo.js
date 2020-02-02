import React from "react";
import Img from "gatsby-image";
import { connect } from 'react-redux';
import { StaticQuery, graphql } from "gatsby";

const mapStateToProps = state => ({
  isDarkMode: state.reducer.isDarkMode,
})

export class Logo extends React.Component {
  // constructor(props, context) {
  //     super(props, context);
  // }
  
  componentWillMount() {
    // const {isDarkMode} = this.props;
    console.log(this.props);
  }

  render() {
    console.log('render ', this.props.isDarkMode)

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
          (this.props.isDarkMode) ? ( <Img
              fluid={data.whiteLogo.childImageSharp.fluid}
            />
          ) : (
            <Img
              fluid={data.blueLogo.childImageSharp.fluid}
            />
          )
        )}
      />
      );
  }
}

export default connect(mapStateToProps)(Logo);