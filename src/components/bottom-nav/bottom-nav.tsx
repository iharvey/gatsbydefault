import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import FavoriteIcon from "@material-ui/icons/Favorite"
import HomeIcon from "@material-ui/icons/Home"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import ScatterPlot from "@material-ui/icons/ScatterPlot"
import { Link } from "gatsby"
import React from "react"

import { useStyles } from "./styles"

type NavTabType = "home" | "favorites" | "nearby" | "folder"

const BottomNav: React.FC<{ initial?: NavTabType }> = ({ initial }) => {
  const classes = useStyles()
  const [currentTab, setCurrentTab] = React.useState<NavTabType | null>(initial)

  function handleChange(event: React.ChangeEvent, newValue: NavTabType) {
    setCurrentTab(newValue)
  }

  // component={Link} to="/"
  return (
    <BottomNavigation value={currentTab} onChange={handleChange} className={classes.root}>
      {/* <BottomNavigationAction label="Home" currentTab="home" icon={<HomeIcon />} /> */}
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Dishes" value="dishes" icon={<ScatterPlot />} />
    </BottomNavigation>
  )
}

export default BottomNav
