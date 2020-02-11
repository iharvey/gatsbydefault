import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { Link } from "gatsby"
import React from "react"

import { H5, Sub1 } from "../../typesetting"
import { headerLinks } from "./links"
import { useStyles } from "./styles"

type HeaderProps = {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = props => {
  const { siteTitle } = props
  const classes = useStyles()

  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Link to="/" className={classes.menuHome}>
            <H5>{siteTitle}</H5>
          </Link>

          <span className={classes.separate} />

          {headerLinks.map(link => (
            <Link key={link.url} to={link.url} className={classes.menuButton}>
              <Sub1>{link.name}</Sub1>
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </>
  )
}
export default Header
