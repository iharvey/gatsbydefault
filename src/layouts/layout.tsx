import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"

import { SiteTitleQuery } from "../../types/graphqlTypes"
import BottomNav from "../components/bottom-nav"
import Footer from "../containers/footer/footer"
import Header from "../theme/gatsby-theme-material-ui-layout/layout/header"

import "./layout.css"

const Layout: React.FC = ({ children }) => {
  const { site }: SiteTitleQuery = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const theme = useTheme()
  const rule1 = useMediaQuery(theme.breakpoints.only("xs"))
  const rule2 = useMediaQuery(theme.breakpoints.up("sm"))
  const rule3 = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <>
      <Header siteTitle={site.siteMetadata.title} />
      <Container maxWidth="lg">
        <div>
          <main>{children}</main>
        </div>
        <Footer />
        <div>{`theme.breakpoints.only('xs') matches: ${rule1}`}</div>
        <div>{`theme.breakpoints.up('sm') matches: ${rule2}`}</div>
        <div>{`theme.breakpoints.up('md') matches: ${rule3}`}</div>
        <Box display={{ xs: "block", md: "none" }}>hide on screens wider than md</Box>
        <Box display={{ xs: "none", md: "block" }}>hide on screens smaller than md</Box>
      </Container>
      <BottomNav />
    </>
  )
}

export default Layout
