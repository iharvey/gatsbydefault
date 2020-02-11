import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby"
import React from "react"

import SEO from "../components/seo"
import Hero from "../containers/hero"
import Layout from "../layouts/layout"
import { Body1, H2 } from "../typesetting"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Hero />
        </Grid>
        <Grid item xs={6}>
          <H2>Title Here</H2>
          <Body1>Welcome to your new Gatsby site.</Body1>
          <Body1>Now go build something great.</Body1>
          <Button variant="outlined" color="secondary">
            <Link style={{ textDecoration: "none", color: "inherit" }} to={`/blogposts`}>
              View Posts
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Layout>
  </>
)

export default IndexPage
