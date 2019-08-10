import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { HeroImageQuery } from "../../types/graphqlTypes"


const Hero: React.SFC = () => {
  const data: HeroImageQuery = useStaticQuery(graphql`
    query HeroImage {
      heroImage: file(relativePath: { eq: "alexandr-podvalny-WOxddhzhC1w-unsplash.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.heroImage.childImageSharp.fluid} />
}

export default Hero
