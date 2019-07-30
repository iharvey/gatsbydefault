import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import Chip from "@material-ui/core/Chip"
import Divider from "@material-ui/core/Divider"
import SEO from "../components/seo"
import Layout from "../layouts/layout"
import Markdown from "../utils/Markdown"
import { H4 } from "../components/typo"

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
}))

const BlogPost = ({ data }) => {
  const classes = useStyles()
  const { title, body, image, tags = [] } = data.contentfulBlogPost

  return (
    <Layout>
      <SEO image={image.fixed.src} title={title} />

      <div className="blogpost">
        <Img fluid={image.sizes} alt={title} />
        <H4 className={classes.heading}>{title}</H4>
        <div className="tags">
          {tags && tags.map(tag => <Chip className={classes.chip} size="small" label={tag} key={`tag__${tag}`} />)}
        </div>
        <Divider className={classes.divider} />
        <div>
          <Markdown>{body.body}</Markdown>
        </div>

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
        body
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
        body: PropTypes.string,
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
