import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import Chip from "@material-ui/core/Chip"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import SEO from "../components/seo"
import Layout from "../layouts/layout"
import Markdown from "../components/Markdown"
import { H3 } from "../components/typo"
import { fluidImgType } from "../types"

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

const DishTemplate = ({ data }) => {
  const classes = useStyles()
  const { title, body, image, tags = [] } = data.contentfulDish

  return (
    <Layout>
      <SEO image={image ? image.fluid.src : null} title={title} />

      <div className="blogpost">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {image ? <Img fluid={image.fluid} alt={title} /> : null}
          </Grid>

          <Grid item xs={12} sm={6}>
            <H3 className={classes.heading}>{title}</H3>
            <div className="tags">
              {tags && tags.map(tag => <Chip className={classes.chip} size="small" label={tag} key={`tag__${tag}`} />)}
            </div>
            <Divider className={classes.divider} />
            <Markdown>{body.childMarkdownRemark.rawMarkdownBody}</Markdown>
          </Grid>
        </Grid>

        <Link to="/dishes">View more posts</Link>
        <br />
        <Link to="/">{"< Back to Home"}</Link>
      </div>
    </Layout>
  )
}

export default DishTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulDish(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      image {
        fluid(maxWidth: 400) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

DishTemplate.defaultProps = {
  title: "",
  body: {
    childMarkdownRemark: {
      rawMarkdownBody: "",
    },
  },
  tags: [],
}

DishTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulDish: PropTypes.shape({
      body: PropTypes.shape({
        childMarkdownRemark: PropTypes.shape({
          rawMarkdownBody: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      fluid: fluidImgType,
      image: PropTypes.shape({
        fluid: PropTypes.shape({
          src: PropTypes.string,
        }),
      }),
      slug: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string.isRequired,
    }),
  }),
}
