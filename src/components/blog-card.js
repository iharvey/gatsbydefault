import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"
import Chip from "@material-ui/core/Chip"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import CardHeader from "@material-ui/core/CardHeader"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SEO from "../components/seo"

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
  const { node, index } = props
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

          {node.createdAt}

          {/* {node.tags && (
            <div>
              {node.tags.map(tag => (
                <Chip
                  className={classes["MuiTagChip--01"]}
                  size="small"
                  label={tag}
                  key={`tag__${tag}`}
                />
              ))}
            </div>
          )} */}
        </CardContent>
      </Card>
    </>
  )
}

export default BlogCard
