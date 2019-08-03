import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"
import Card from "@material-ui/core/Card"
// import Divider from "@material-ui/core/Divider"
import CardContent from "@material-ui/core/CardContent"
import { Body1 } from "../components/typo"

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
  },
  "MuiTagChip--01": {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  dishImage: {
    maxHeight: "200px",
  },
}))

const BlogCard = ({ props }) => {
  const { node } = props
  const classes = useStyles()

  return (
    <>
      <Card className={classes["MuiEngagementCard--01"]} key={`card__${node.slug}`}>
        {node.image ? <Img fluid={node.image.fluid} alt={node.title} className={classes.dishImage} /> : null}
        <CardContent>
          <Body1>{node.title}</Body1>
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
        rawMarkdownBody: PropTypes.any,
      }),
    }),
    image: PropTypes.objectOf({
      sizes: PropTypes.any,
    }),
  }),
}

export default BlogCard
