import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import Chip from "@material-ui/core/Chip"
import Divider from "@material-ui/core/Divider"
import Container from "@material-ui/core/Container"
import SEO from "../components/seo"
import Layout from "../layouts/layout"
import Markdown from "../components/Markdown"
import { H3 } from "../components/typo"

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
    float: 'right',
  },
}))

const BlogPostTemplate = ({ data }) => {
  const classes = useStyles()
  const { title, body, image, tags = [] } = data.contentfulBlogPost

  return (
    <Layout>
      <SEO image={image ? image.fixed.src : null} title={title} />
      <Container maxWidth="md">
        <div className="blogpost">
          {image ? <Img fluid={image.sizes} alt={title} className={classes.hero} /> : null}

          <H3 className={classes.heading}>{title}</H3>
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
      </Container>
    </Layout>
  )
}

export default BlogPostTemplate

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

BlogPostTemplate.propTypes = {
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
