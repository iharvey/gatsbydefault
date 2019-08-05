import React from "react"
// import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import Container from "@material-ui/core/Container"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import BlogCard from "../containers/blog-card"
import { H3 } from "../components/typo"
import { BlogPostNodeShort } from "../types"

const useStyles = makeStyles(theme => ({
  heading: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}))

const BlogPostsPage = (props: BlogPostsPageTypes) => {
  const { data } = props
  const classes = useStyles()

  return (
    <>
      <Layout>
        <SEO title="Posts" />
        <Container maxWidth="md">
          <H3 className={classes.heading}>Posts</H3>

          <List>
            {data.allContentfulBlogPost.edges.map(({ node }) => (
              <BlogCard key={node.slug} node={node} />
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

type BlogPostsPageTypes = {
  data: {
    allContentfulBlogPost: {
      edges: [
        {
          node: BlogPostNodeShort
        }
      ]
    }
  }
}

export const postQuery = graphql`
  query postQuery {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          image {
            fluid(maxWidth: 250, maxHeight: 200) {
              ...GatsbyContentfulFluid
            }
          }
          createdAt(formatString: "MM-DD-YYYY")
        }
      }
    }
  }
`
