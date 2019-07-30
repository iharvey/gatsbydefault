/* eslint-disable react/display-name */
import React from "react"
import ReactMarkdown from "markdown-to-jsx"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import Paper from "@material-ui/core/Paper"

const styles = theme => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
  blockquote: {
    padding: theme.spacing(2, 2, 0, 6),
    paddingBottom: "1px",
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(4),
  },
})

const options = {
  overrides: {
    h1: { component: props => <Typography gutterBottom variant="h4" {...props} /> },
    h2: { component: props => <Typography gutterBottom variant="h5" {...props} /> },
    h3: { component: props => <Typography gutterBottom variant="h6" {...props} /> },
    h4: { component: props => <Typography gutterBottom variant="h4" {...props} /> },
    h5: { component: props => <Typography gutterBottom variant="h5" {...props} /> },
    h6: { component: props => <Typography gutterBottom variant="h6" {...props} /> },
    p: { component: props => <Typography paragraph {...props} /> },
    a: { component: Link },
    blockquote: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <Paper elevation={2} classes={{ root: classes.blockquote }} {...props} />
      )),
    },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      )),
    },
  },
}

export default function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />
}
