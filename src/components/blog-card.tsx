import React from "react"

import Grid from "@material-ui/core/Grid"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { makeStyles } from "@material-ui/core/styles"
import ImageIcon from "@material-ui/icons/Image"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { ContentfulBlogPost } from "../../types/graphqlTypes"

const useStyles = makeStyles(theme => ({
  gridItem: {
    background: "#f8f8f8",
  },
  "MuiTagChip--01": {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

type BlogCardType = Pick<ContentfulBlogPost, "title" | "slug" | "createdAt" | "body" | "image">

const BlogCard = ({ data }: { data: BlogCardType }) => {
  const classes = useStyles({})

  return (
    <Link to={`/blogpost/${data.slug}`}>
      <ListItem disableGutters>
        <Grid container spacing={0} className={classes.gridItem}>
          <Grid item xs={3}>
            <div style={{ marginRight: "1rem" }}>
              {data.image ? <Img fluid={data.image.fluid} alt={data.title} /> : <ImageIcon />}
            </div>
          </Grid>
          <Grid item xs={9}>
            <ListItemText primary={data.title} secondary={data.body.childMarkdownRemark.excerpt} />
          </Grid>
        </Grid>
      </ListItem>
    </Link>
  )
}

export default BlogCard
