import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ImageIcon from "@material-ui/icons/Image"

const useStyles = makeStyles(theme => ({
  gridItem: {
    background: "#f8f8f8",
  },
  // "MuiEngagementCard--01": {
  //   transition: "0.3s",
  //   height: "100%",
  //   margin: "auto",
  //   boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
  //   "&:hover": {
  //     boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
  //   },
  //   "& .MuiCardMedia-root": {
  //     paddingTop: "56.25%",
  //   },
  //   "& .MuiCardContent-root": {
  //     textAlign: "left",
  //     padding: theme.spacing(3),
  //   },
  //   "& .MuiDivider-root": {
  //     margin: `${theme.spacing(3)}px 0`,
  //   },
  // },
  "MuiTagChip--01": {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

const BlogCard = ({ node }) => {
  const classes = useStyles()

  return (
    <>
      <ListItem disableGutters>
        <Grid container spacing={0} className={classes.gridItem}>
          <Grid item xs={3}>
            <div style={{ marginRight: "1rem" }}>
              {node.image ? (
                <Img fluid={node.image.sizes} alt={node.title} className={classes.thumbnailImage} />
              ) : (
                <ImageIcon />
              )}
            </div>
          </Grid>
          <Grid item xs={9}>
            <ListItemText primary={node.title} secondary={node.body.childMarkdownRemark.excerpt} />
          </Grid>
        </Grid>
      </ListItem>
    </>
  )
}

BlogCard.propTypes = {
  node: PropTypes.objectOf({
    slug: PropTypes.any,
    title: PropTypes.any,
    createdAt: PropTypes.any,
    body: PropTypes.objectOf({
      childMarkdownRemark: PropTypes.objectOf({
        excerpt: PropTypes.any,
      }),
    }),
    image: PropTypes.objectOf({
      sizes: PropTypes.any,
    }),
  }),
}

export default BlogCard
