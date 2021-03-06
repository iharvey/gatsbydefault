import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

import { SiteMetaQuery } from "../../../types/graphqlTypes"
import { SEOProps } from "./types"

const SEO: React.FC<SEOProps> = props => {
  const { description = "", lang = "en", meta = [], title, image = null } = props

  const { site }: SiteMetaQuery = useStaticQuery(
    graphql`
      query SiteMeta {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        ...meta,
      ]}
    />
  )
}

export default SEO
