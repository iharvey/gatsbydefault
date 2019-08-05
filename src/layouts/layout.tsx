import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import Container from "@material-ui/core/Container"
import Header from "../theme/gatsby-theme-material-ui-layout/layout/header"
import Footer from "../containers/footer"

import "./layout.css"

const SiteMain: React.SFC<LayoutPropsWithData> = ({ children, site }) => {
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

export default ({ children }: LayoutProps) => {
  return (
    <StaticQuery
      query={LayoutQuery}
      render={({ site }: LayoutPropsWithData) => <SiteMain site={site} children={children} />}
    />
  )
}

interface LayoutProps {
  children: React.ReactNode
}
interface LayoutPropsWithData extends LayoutProps {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

export const LayoutQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
