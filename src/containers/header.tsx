import React from "react";

import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "gatsby";

import { H4, H5 } from "../typography";

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
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.menuHome}>
            <H4>{siteTitle}</H4>
          </Link>

          <span className={classes.separate} />

          {headerLinks.map(link => (
            <Link key={link.url} to={link.url} className={classes.menuButton}>
              <H5>{link.name}</H5>
            </Link>
          ))}

          <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  )
}
export default Header
