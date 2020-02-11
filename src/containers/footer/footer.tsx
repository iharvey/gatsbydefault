import Divider from "@material-ui/core/Divider"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"

const useStyles = makeStyles(theme => ({
  "MuiDivider--01": {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}))

const Footer = () => {
  const classes = useStyles({})
  return (
    <footer>
      <Divider className={classes["MuiDivider--01"]} light />© 2020, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}

export default Footer
