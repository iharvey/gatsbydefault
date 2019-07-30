import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Divider from "@material-ui/core/Divider"

const useStyles = makeStyles(theme => ({
  "MuiEngagementCard--01": {
    transition: "0.3s",
    height: "100%",
    margin: "auto",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
    "& .MuiCardMedia-root": {
      paddingTop: "56.25%",
    },
    "& .MuiCardContent-root": {
      textAlign: "left",
      padding: theme.spacing(3),
    },
    "& .MuiDivider-root": {
      margin: `${theme.spacing(3)}px 0`,
    },
    "& .MuiAvatar-root": {
      display: "inline-block",
      border: "2px solid white",
      "&:not(:first-of-type)": {
        marginLeft: theme.spacing(-1),
      },
    },
  },
  "MuiTagChip--01": {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

const BlogCard = ({ props }) => {
  const { node } = props
  const classes = useStyles()

  return (
    <>
      <Card
        className={classes["MuiEngagementCard--01"]}
        key={`card__${node.slug}`}
      >
        <Img fluid={node.image.sizes} alt={node.title} />
        <CardContent>
          <h5>{node.title}</h5>
          <p>{node.body.childMarkdownRemark.excerpt}</p>
          <Divider light />
          <span><em>Created: {node.createdAt}</em></span>
        </CardContent>
      </Card>
    </>
  )
}

BlogCard.propTypes = {
  props: PropTypes.any,
  node: PropTypes.objectOf({
    slug: PropTypes.any,
    title: PropTypes.any,
    createdAt: PropTypes.any,
    body: PropTypes.objectOf({
      childMarkdownRemark: PropTypes.objectOf({
        excerpt: PropTypes.any,
      })
    }),
    image: PropTypes.objectOf({
        sizes: PropTypes.any,
    }),
  })
}

export default BlogCard