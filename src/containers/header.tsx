import React from "react"

import AppBar from "@material-ui/core/AppBar"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import { Link } from "gatsby"

import { H5, Sub1 } from "../typography"

const useStyles = makeStyles(theme => ({
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
}))

const headerLinks = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/blogposts",
    name: "Posts",
  },
  {
    url: "/dishes",
    name: "Dishes",
  },
]

interface HeaderProps {
  siteTitle: string
}

const Header = (props: HeaderProps): JSX.Element => {
  const { siteTitle } = props
  const classes = useStyles({})

  return (
    <header className={classes.header}>
      <AppBar position="static">
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

          {/* <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </header>
  )
}
export default Header
