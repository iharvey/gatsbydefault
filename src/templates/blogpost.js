import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import Chip from "@material-ui/core/Chip"
import { H2 } from "../components/typo"
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
        <H2 className={classes["heading"]}>{title}</H2>

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

BlogPost.propTypes = {
  data: PropTypes.shape({
    contentfulBlogPost: PropTypes.shape({
      body: PropTypes.shape({
        childMarkdownRemark: PropTypes.shape({
          html: PropTypes.string,
        }),
      }),
      image: PropTypes.shape({
        fixed: PropTypes.shape({
          src: PropTypes.string,
        }),
        sizes: PropTypes.shape({
          aspectRatio: PropTypes.number,
          base64: PropTypes.string,
          sizes: PropTypes.string,
          src: PropTypes.string,
          srcSet: PropTypes.string,
          srcSetWebp: PropTypes.string,
          srcWebp: PropTypes.string,
          tracedSVG: PropTypes.string,
        }),
      }),
      slug: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
    }),
  }),
}
