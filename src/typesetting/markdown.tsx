import Link from "@material-ui/core/Link"
import Paper from "@material-ui/core/Paper"
import { WithStyles, withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import ReactMarkdown from "markdown-to-jsx"
import * as React from "react"

import { styles } from "./markdown-styles"

interface TypoClassPropsType {
  children?: React.ReactNode
  className?: string
  id?: string
}

type StyledProps = TypoClassPropsType & WithStyles<typeof styles>

const options = {
  overrides: {
    h1: { component: (props: TypoClassPropsType) => <Typography gutterBottom variant="h4" {...props} /> },
    h2: { component: (props: TypoClassPropsType) => <Typography gutterBottom variant="h5" {...props} /> },
    h3: { component: (props: TypoClassPropsType) => <Typography gutterBottom variant="h6" {...props} /> },
    h4: { component: (props: TypoClassPropsType) => <Typography gutterBottom variant="h4" {...props} /> },
    h5: { component: (props: TypoClassPropsType) => <Typography gutterBottom variant="h5" {...props} /> },
    h6: { component: (props: TypoClassPropsType) => <Typography gutterBottom variant="h6" {...props} /> },
    p: { component: (props: TypoClassPropsType) => <Typography paragraph {...props} /> },
    a: { component: Link },
    blockquote: {
      component: withStyles(styles)(({ classes, ...props }: StyledProps) => (
        <Paper elevation={0} classes={{ root: classes.blockquote }} {...props} />
      )),
    },
    li: {
      component: withStyles(styles)(({ classes, ...props }: StyledProps) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      )),
    },
  },
}

const Markdown: React.FC = props => {
  return <ReactMarkdown options={options}>{props.children}</ReactMarkdown>
}

export default Markdown
