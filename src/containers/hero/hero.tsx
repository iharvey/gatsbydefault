import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

import { HeroImageQuery } from "../../../types/graphqlTypes"

export const PureHero: React.FC<{ data: HeroImageQuery }> = ({ data }) => (
  <Img fluid={data.heroImage.childImageSharp.fluid} />
)

export const Hero: React.FC = () => {
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

  return <PureHero data={data}></PureHero>
}

export default Hero
