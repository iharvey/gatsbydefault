import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { H4, H5 } from "../components/typo"

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
  titleLeft: {
    marginLeft: "auto",
  },
  menuBurger: {
    marginLeft: theme.spacing(1),
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
  }
]

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.menuHome}>
            <H4>Header</H4>
          </Link>

          <span className={classes.titleLeft} />

          {headerLinks.map(link => (
            <Link key={link.url} to={link.url} className={classes.menuButton}>
              <H5>{link.name}</H5>
            </Link>
          ))}

          <IconButton edge="start" className={classes.menuBurger} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  )
}
