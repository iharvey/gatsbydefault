import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"

import { H3 } from "../components/typo"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import DishCard from "../containers/dish-card"

// import Card from "@material-ui/core/Card"
// import CardContent from "@material-ui/core/CardContent"
// import { Body1 } from "../components/typo"
// import Img from "gatsby-image"

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

DishesPage.propTypes = {
  data: PropTypes.shape({
    allContentfulDish: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            slug: PropTypes.string.isRequired,
          }),
        })
      ),
    }),
  }),
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

// DishesPage.propTypes = {
//   data: PropTypes.shape({
//     allContentfulDish: PropTypes.shape({
//       edges: PropTypes.arrayOf({
//         node: PropTypes.shape({
//           title: PropTypes.string.isRequired,
//           slug: PropTypes.string.isRequired,
//           body: PropTypes.shape({
//             childMarkdownRemark: PropTypes.shape({
//               rawMarkdownBody: PropTypes.string,
//             }),
//           }),
//           image: PropTypes.shape({
//             fluid: { ...fluidImgType },
//           }),
//           createdAt: PropTypes.string,
//         }),
//       }),
//     }),
//   }),
// }
