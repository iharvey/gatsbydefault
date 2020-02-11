import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import { graphql, Link } from "gatsby"
import React from "react"

import { DishesPageQuery } from "../../types/graphqlTypes"
import DishCard from "../components/dish-card"
import SEO from "../components/seo"
import Layout from "../layouts/layout"
import { H3 } from "../typesetting"

const useStyles = makeStyles(theme => ({
  heading: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  linkHome: {
    display: "inline-block",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    textDecoration: "none",
    color: "inherit",
  },
}))

const DishesPage: React.FC<{ data: DishesPageQuery }> = ({ data }) => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Dishes" />
      {/* <H3 className={classes.heading}>Dishes</H3> */}

      <Grid container spacing={2}>
        {data.dishes.edges.map(({ node }) => (
          <DishCard key={`dish__${node.slug}`} data={node} />
        ))}
      </Grid>

      <Button variant="outlined" color="secondary">
        <Link className={classes.linkHome} to={`/`}>
          {"< Back to Home"}
        </Link>
      </Button>
    </Layout>
  )
}

export default DishesPage

export const dishesPageQuery = graphql`
  query DishesPage {
    dishes: allContentfulDish {
      edges {
        node {
          title
          slug
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
