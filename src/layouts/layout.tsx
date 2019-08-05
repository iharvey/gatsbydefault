import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Container from "@material-ui/core/Container"
import Header from "../theme/gatsby-theme-material-ui-layout/layout/header"
import Footer from "../containers/footer"

import "./layout.css"

interface LayoutPropsType {
  children: JSX.Element[]
}

interface LayoutDataType {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Layout = (props: LayoutPropsType) => {
  const { children } = props
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data: LayoutDataType) => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Container maxWidth="lg">
            <div>
              <main>{children}</main>
            </div>
            <Footer />
          </Container>
        </>
      )}
    />
  )
}

export default Layout
