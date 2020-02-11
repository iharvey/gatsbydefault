import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(theme => ({
  header: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
  },
  menuHome: {
    flexGrow: 1,
    textDecoration: "none",
    color: "inherit",
  },
  menuButton: {
    marginRight: theme.spacing(3),
    textDecoration: "none",
    color: "inherit",
  },
  separate: {
    marginLeft: "auto",
  },
}));
