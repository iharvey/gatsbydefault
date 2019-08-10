import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import { HeroImageQuery } from "../../types/graphqlTypes";

interface HeroData {
  data: HeroImageQuery
}

const Hero: React.SFC = () => {

  const { data }: HeroData = useStaticQuery(graphql`
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

  const fluidData = data.heroImage.childImageSharp.fluid
    // (data && data.heroImage && data.heroImage.childImageSharp && data.heroImage.childImageSharp.fluid)

  return (
    fluidData ? <Img fluid={fluidData} /> : null
  )
}

export default Hero
