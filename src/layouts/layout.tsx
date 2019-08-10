import * as React from "react"

import Container from "@material-ui/core/Container"
import { graphql, useStaticQuery } from "gatsby"

import Footer from "../containers/footer"
import Header from "../theme/gatsby-theme-material-ui-layout/layout/header"

import "./layout.css"

import { SiteTitleQuery } from "../../types/graphqlTypes"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.SFC<LayoutProps> = ({ children }) => {
  const { site }: SiteTitleQuery = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={site.siteMetadata.title} />
      <Container maxWidth="lg">
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </Container>
    </>
  )
}

export default Layout
