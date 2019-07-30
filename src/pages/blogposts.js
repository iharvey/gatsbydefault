import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import { H3 } from "../components/typo"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import BlogCard from "../containers/blog-card"

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

const SecondPage = ({ data }) => {
  const classes = useStyles()

  return (
    <>
      <Layout>
        <SEO title="Page two" />

        <H3 className={classes["heading"]}>Welcome to page 2</H3>

        <Grid container spacing={2}>
          {data.allContentfulBlogPost.edges.map(({ node }, index) => (
            <Grid key={`grid__${node.slug}`} item xs={12} sm={6} md={4}>
              <Link
                to={`/blogpost/${node.slug}`}
                className={classes["link--internal"]}
              >
                <BlogCard props={{ node, index }} />
              </Link>
            </Grid>
          ))}
        </Grid>

        <Link to={"/"} className={classes[("link--internal", "link--home")]}>
          {"< Back to Home"}
        </Link>
      </Layout>
    </>
  )
}

export default SecondPage

export const postQuery = graphql`
  query postQuery {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          tags
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          image {
            sizes(maxWidth: 600) {
              ...GatsbyContentfulSizes
            }
            fixed {
              src
            }
          }
          createdAt(formatString: "MM-DD-YYYY")
        }
      }
    }
  }
`

SecondPage.propTypes = {
  data: PropTypes.shape({
    allContentfulBlogPost: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.any,
        })
      ),
    }),
  }),
}
