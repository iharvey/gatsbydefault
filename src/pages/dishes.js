import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import ImageIcon from "@material-ui/icons/Image"

import { H3 } from "../components/typo"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import DishCard from "../containers/dish-card"

const useStyles = makeStyles(theme => ({
  heading: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  "link--internal": {
    textDecoration: "unset",
  },
  "link--home": {
    display: "inline-block",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}))

const DishesPage = ({ data }) => {
  const classes = useStyles()
  return (
    <>
      <Layout>
        <SEO title="Dishes" />

        <H3 className={classes["heading"]}>Dishes</H3>

        <Grid container spacing={2}>
          {data.allContentfulDish.edges.map(({ node }, index) => (
            <Grid key={`grid__${node.slug}`} item xs={6} sm={4} md={3}>
              <Link to={`/dishes/${node.slug}`} className={classes["link--internal"]}>
                <DishCard props={{ node, index }} />
              </Link>
            </Grid>
          ))}
        </Grid>

        <Button variant="outlined" color="secondary">
          <Link style={{ textDecoration: "none", color: "inherit" }} to={`/`}>
            {"< Back to Home"}
          </Link>
        </Button>
      </Layout>
    </>
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
            fixed(width: 400, height: 300, cropFocus: TOP) {
              ...GatsbyContentfulFixed
              base64
              height
              src
              srcSet
              width
            }
            fluid(maxWidth: 400, maxHeight:300, cropFocus: TOP) {
              ...GatsbyContentfulFluid
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
          createdAt(formatString: "MM-DD-YYYY")
        }
      }
    }
  }
`

DishesPage.propTypes = {
  data: PropTypes.shape({
    allContentfulDish: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.any,
        })
      ),
    }),
  }),
}
