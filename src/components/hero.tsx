import React from "react";

import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = () => (
  <StaticQuery query={ImageQuery} render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />} />
)
export default Image

export const ImageQuery = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "alexandr-podvalny-WOxddhzhC1w-unsplash.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`