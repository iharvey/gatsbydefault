import React from "react"
import { Link } from "gatsby"
import Button from '@material-ui/core/Button';

import { H2, Body1 } from "../components/typo"

import Layout from "../layouts/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />

      <H2>Title Here</H2>
      <Body1>Welcome to your new Gatsby site.</Body1>
      <Body1>Now go build something great.</Body1>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>

      <Button variant="outlined" color="secondary">
        <Link to={`/blogposts`}>View Posts</Link>
      </Button>

    </Layout>
  </>
)

export default IndexPage
