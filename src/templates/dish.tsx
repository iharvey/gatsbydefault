import React from "react";

import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Markdown from "../components/markdown";
import SEO from "../components/seo";
import Layout from "../layouts/layout";
import { H3 } from "../typography";

import { DishPageQuery } from "../../types/graphqlTypes";

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

interface DishTemplateProps {
  data: DishPageQuery
}


const DishTemplate = ({ data }: DishTemplateProps) => {
  const classes = useStyles({})
  const { title, body, image } = data.contentfulDish

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

export const dishPageQuery = graphql`
  query DishPage ($slug: String!) {
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
