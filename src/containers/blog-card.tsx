import React from "react";

import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import ImageIcon from "@material-ui/icons/Image";
import { Link } from "gatsby";
import Img from "gatsby-image";

import { BlogPostNodeShort } from "../types";

const useStyles = makeStyles(theme => ({
  gridItem: {
    background: "#f8f8f8",
  },
  "MuiTagChip--01": {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

interface BlogCard {
  node: BlogPostNodeShort
}

const BlogCard = (props: BlogCard) => {
  const classes = useStyles()
  const { node } = props

  return (
    <Link to={`/blogpost/${node.slug}`}>
      <ListItem disableGutters>
        <Grid container spacing={0} className={classes.gridItem}>
          <Grid item xs={3}>
            <div style={{ marginRight: "1rem" }}>
              {node.image ? <Img fluid={node.image.fluid} alt={node.title} /> : <ImageIcon />}
            </div>
          </Grid>
          <Grid item xs={9}>
            <ListItemText primary={node.title} secondary={node.body.childMarkdownRemark.excerpt} />
          </Grid>
        </Grid>
      </ListItem>
    </Link>
  )
}

export default BlogCard