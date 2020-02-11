import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"

import { DishPageQuery } from "../../types/graphqlTypes"
import SEO from "../components/seo"
import Layout from "../layouts/layout"
import { H3 } from "../typesetting"
import Markdown from "../typesetting/markdown"

const useStyles = makeStyles(theme => ({
  heading: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  chip: {
    marginRight: theme.spacing(1),
  },
}))

const DishTemplate: React.FC<{ data: DishPageQuery }> = ({ data }) => {
  const classes = useStyles()
  const { dish } = data
  const { rawMarkdownBody } = dish.body.childMarkdownRemark

  return (
    <Layout>
      <SEO image={dish.image ? dish.image.fluid.src : null} title={dish.title} />

      <div className="page__content--dish">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {dish.image ? <Img fluid={dish.image.fluid} alt={dish.title} /> : null}
          </Grid>

          <Grid item xs={12} sm={6}>
            <H3 className={classes.heading}>{dish.title}</H3>
            <Divider className={classes.divider} />
            <Markdown>{rawMarkdownBody}</Markdown>
          </Grid>
        </Grid>

        <Link to="/dishes">View more posts</Link>
        <br />
        <Link to="/">{"< Back to Home"}</Link>
      </div>
    </Layout>
  )
}

export default DishTemplate

export const dishPageQuery = graphql`
  query DishPage($slug: String!) {
    dish: contentfulDish(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      image {
        fluid(maxWidth: 600, sizes: "(min-width: 600px) 50vw, (min-width: 1280px) 600px, 90vw") {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
