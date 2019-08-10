import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import { ChildImageSharp } from "../types";

// import { GatsbyImageSharpFluid } from "../fragments"

interface HeroData {
  heroImage: {
    childImageSharp: ChildImageSharp
  }
}

const Hero: React.SFC = () => {



  const data: HeroData = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "alexandr-podvalny-WOxddhzhC1w-unsplash.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    console.warn({data})

  return <Img fluid={data.heroImage.childImageSharp.fluid} />
}

export default Hero
