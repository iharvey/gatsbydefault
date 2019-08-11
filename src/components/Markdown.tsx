import * as React from "react"

import Link from "@material-ui/core/Link"
import Paper from "@material-ui/core/Paper"
import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import ReactMarkdown from "markdown-to-jsx"

const htmlFontSize = 16

const styles = (theme: Theme) =>
  createStyles({
    listItem: {
      marginTop: theme.spacing(1),
      flexDirection: "column",
    },
    blockquote: {
      padding: theme.spacing(2, 4),
      margin: theme.spacing(0, 0, 4, 0),

      "& .MuiTypography-paragraph": {
        fontSize: `${theme.typography.fontSize / htmlFontSize}rem`,
      },

      border: "5px solid #bbbbbb",
      position: "relative",
      fontStyle: "italic",
      paddingBottom: "1px",

      "&::before, &::after": {
        top: "-5px",
        left: "50%",
        width: "94%",
        height: "5px",
        content: "''",
        position: "absolute",
        background: "#ffffff",
        marginLeft: "-47%",
      },

      "&::after": {
        top: "auto",
        bottom: "-5px",
      },
    },
  })

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

export default function Markdown({ children }: { children: string }) {
  return <ReactMarkdown options={options}>{children}</ReactMarkdown>
}
