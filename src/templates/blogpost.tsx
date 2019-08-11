import React from "react"

import Chip from "@material-ui/core/Chip"
import Container from "@material-ui/core/Container"
import Divider from "@material-ui/core/Divider"
import { makeStyles } from "@material-ui/core/styles"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Markdown from "../components/markdown"
import SEO from "../components/seo"
import Layout from "../layouts/layout"
import { H3 } from "../typography"

import { BlogPostPageQuery } from "../../types/graphqlTypes"

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
  hero: {
    width: "65%",
    marginLeft: theme.spacing(2),
    float: "right",
  },
}))

interface BlogPostTemplateProps {
  data: BlogPostPageQuery
}

const BlogPostTemplate:  React.FC<BlogPostTemplateProps> = ({data}) => {

  const classes = useStyles({})
  const { title, body, image, tags = [] } = data.contentfulBlogPost

  return (
    <Layout>
      <SEO image={image ? image.fluid.src : null} title={title} />
      <Container maxWidth="md">
        <div className="blogpost">
          {image ? <Img fluid={image.fluid} alt={title} className={classes.hero} /> : null}
          <H3 className={classes.heading}>{title}</H3>
          <div className="tags">
            {tags && tags.map(tag => <Chip className={classes.chip} size="small" label={tag} key={`tag__${tag}`} />)}
          </div>
          <Divider className={classes.divider} />
          <div className="markdown__output">
            <Markdown>{body.body}</Markdown>
          </div>

          <Link to="/blogposts">View more posts</Link>
          <br />
          <Link to="/">{"< Back to Home"}</Link>
        </div>
      </Container>
    </Layout>
  )
}

export default BlogPostTemplate

export const blogPostPageQuery = graphql`
  query BlogPostPage($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      body {
        body
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      tags
    }
  }
`
