import React from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { graphql, Link } from "gatsby";

import SEO from "../components/seo";
import DishCard from "../containers/dish-card";
import Layout from "../layouts/layout";
import { H3 } from "../typography";

import { FluidImgType } from "../types";

// import PropTypes from "prop-types"
// import Card from "@material-ui/core/Card"
// import CardContent from "@material-ui/core/CardContent"
// import { Body1 } from "../components/typo"
// import Img from "gatsby-image"

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

export interface DishesPageProps {
  data: {
    allContentfulDish: {
      edges: [
        {
          node: {
            slug: string
            title: string
            image: {
              fluid: FluidImgType
            }
          }
        }
      ]
    }
  }
}

const DishesPage = (props: DishesPageProps) => {
  const { data } = props

  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Dishes" />
      <H3 className={classes["heading"]}>Dishes</H3>
      <Grid container spacing={2}>
        {data.allContentfulDish.edges.map(({ node }, index) => (
          <DishCard key={`dish__${node.slug}`} data={{ node, index }} />
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

export const dishQuery = graphql`
  query dishQuery {
    allContentfulDish {
      edges {
        node {
          title
          slug
          body {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
          image {
            fluid(maxWidth: 400, maxHeight: 300, cropFocus: TOP) {
              ...GatsbyContentfulFluid
            }
          }
          createdAt(formatString: "MM-DD-YYYY")
        }
      }
    }
  }
`
