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
    padding: theme.spacing(2, 4),
    margin: theme.spacing(0, 0, 4, 0),

    "& .MuiTypography-paragraph": {
      fontSize: `${theme.typography.fontSize / theme.typography.htmlFontSize}rem`,
    },
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
        <Paper elevation={0} classes={{ root: classes.blockquote }} {...props} />
      )),
      props: {
        className: "MuiBlockquote",
      },
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

// .c0157 blockquote {
//   border: 5px solid #bbbbbb;
//   margin: 2.5em 0;
//   padding: 1em 1.1em 1em 1.3em;
//   position: relative;
//   font-style: italic;

//   "&:before, &:after" {
//     top: -5px;
//     left: 50%;
//     width: 94%;
//     height: 5px;
//     content: "";
//     position: absolute;
//     background: #ffffff;
//     margin-left: -47%;
//   }
// }
