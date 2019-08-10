import React from "react"

import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import { graphql, Link } from "gatsby"

import DishCard from "../components/dish-card"
import SEO from "../components/seo"
import Layout from "../layouts/layout"
import { H3 } from "../typography"

import { DishesPageQuery } from "../../types/graphqlTypes"

const useStyles = makeStyles(theme => ({
  heading: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  "link--home": {
    display: "inline-block",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}))

const DishesPage = ({ data }: { data: DishesPageQuery }) => {
  const classes = useStyles({})
  return (
    <Layout>
      <SEO title="Dishes" />
      <H3 className={classes["heading"]}>Dishes</H3>
      <Grid container spacing={2}>
        {data.allContentfulDish.edges.map(({ node }) => (
          <DishCard key={`dish__${node.slug}`} data={node} />
        ))}
      </Grid>

      <Button variant="outlined" color="secondary">
        <Link style={{ textDecoration: "none", color: "inherit" }} to={`/`}>
          {"< Back to Home"}
        </Link>
      </Button>
    </Layout>
  )
}

export default DishesPage

export const dishesPageQuery = graphql`
  query DishesPage {
    allContentfulDish {
      edges {
        node {
          title
          slug
          createdAt(formatString: "MM-DD-YYYY")
          body {
            childMarkdownRemark {
              html
            }
          }
          image {
            fluid(maxWidth: 400, maxHeight: 300, cropFocus: TOP) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
