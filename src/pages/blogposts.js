import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import { H3 } from "../components/typo"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import BlogCard from "../containers/blog-card"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import Container from "@material-ui/core/Container"

const useStyles = makeStyles(theme => ({
  heading: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  thumbnailImage: {
    // marginTop: theme.spacing(1.5),
    // marginBottom: theme.spacing(1.5),
  },
  "link--internal": {
    textDecoration: "unset",
  },
}))

const BlogPostsPage = ({ data }) => {
  const classes = useStyles()

  return (
    <>
      <Layout>
        <SEO title="Posts" />
        <Container maxWidth="md">
          <H3 className={classes.heading}>Posts</H3>

          <List className={classes.root}>
            {data.allContentfulBlogPost.edges.map(({ node }) => (
              <Link key={node.slug} to={`/blogpost/${node.slug}`} className={classes["link--internal"]}>
                <BlogCard node={node} />
              </Link>
            ))}
          </List>

          <Button variant="outlined" color="secondary">
            <Link style={{ textDecoration: "none", color: "inherit" }} to={`/`}>
              {"< Back to Home"}
            </Link>
          </Button>
        </Container>
      </Layout>
    </>
  )
}

export default BlogPostsPage

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
            sizes(maxWidth: 200) {
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

BlogPostsPage.propTypes = {
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
