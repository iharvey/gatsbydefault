import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import Chip from "@material-ui/core/Chip"
import Typography from "@material-ui/core/Typography"
import Layout from "../layouts/layout"
import SEO from "../components/seo"

const useStyles = makeStyles(theme => ({
  heading: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}))

const BlogPost = ({ data }) => {
  const classes = useStyles()
  const { title, body, image, tags = [] } = data.contentfulBlogPost

  return (
    <Layout>
      <SEO image={image.fixed.src} title={title} />

      <div className="blogpost">
        <h2 className={classes["heading"]}>{title}</h2>

        <Img fluid={image.sizes} alt={title} />

        <div className="tags">

          {tags && (
            <div>
              {tags.map(tag => (
                <Chip
                  className={classes["MuiTagChip--01"]}
                  size="small"
                  label={tag}
                  key={`tag__${tag}`}
                />
              ))}
            </div>
          )}

          {tags.map(tag => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <p
          className="body-text"
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        />
        <Link to="/blogposts">View more posts</Link>
        <br />
        <Link to="/">{"< Back to Home"}</Link>
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      image {
        sizes(maxWidth: 1280) {
          ...GatsbyContentfulSizes
        }
        fixed {
          src
        }
      }
      tags
    }
  }
`
