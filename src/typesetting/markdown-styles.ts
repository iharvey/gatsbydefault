import { createStyles, Theme } from "@material-ui/core/styles"

const htmlFontSize = 16

export const styles = (theme: Theme) =>
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
