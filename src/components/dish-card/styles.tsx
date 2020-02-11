import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(theme => ({
  "MuiEngagementCard--01": {
    height: "100%",
    margin: "auto",
    "& .MuiCardContent-root": {
      textAlign: "left",
      padding: theme.spacing(3),
    },
  },
  dishImage: {
    maxHeight: "200px",
    "&::after": {
      content: "''",
      background: "linear-gradient(0deg, rgba(2,0,36,0.5) 0%, rgba(0,212,255,0) 75%)",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  },
  container: {
    position: "relative",
  },
  cardTitle: {
    position: "absolute",
    bottom: "0",
    color: "white",
    left: "1rem",
  },
}));
