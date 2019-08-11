import React from "react"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { H5 } from "../typography"

import { ContentfulDish } from "../../types/graphqlTypes"

const useStyles = makeStyles(theme => ({
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
      background: "linear-gradient(0deg, rgba(2,0,36,0.5) 0%, rgba(0,212,255,0) 100%)",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  },
  foo: {
    position: "relative",
  },
  bar: {
    position: "absolute",
    bottom: "0",
    color: "white",
    left: "1rem",
  },
}))

type DishCardType = Pick<ContentfulDish, "slug" | "image" | "title">

const DishCard = ({ data }: { data: DishCardType }) => {
  const classes = useStyles({})

  return (
    <Grid key={`grid__${data.slug}`} item xs={6} sm={4} md={3}>
      <Link to={`/dishes/${data.slug}`}>
        <Card className={classes["MuiEngagementCard--01"]} key={`card__${data.slug}`}>
          <div className={classes.foo}>
            {data.image ? <Img fluid={data.image.fluid} alt={data.title} className={classes.dishImage} /> : null}
            <H5 className={classes.bar}>{data.title}</H5>
          </div>
          <CardContent>baa</CardContent>
        </Card>
      </Link>
    </Grid>
  )
}

export default DishCard
