import React from "react"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { Body1 } from "../typography"

import { ContentfulDish } from "../../types/graphqlTypes"

const useStyles = makeStyles(theme => ({
  "MuiEngagementCard--01": {
    transition: "0.3s",
    height: "100%",
    margin: "auto",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
    "& .MuiCardMedia-root": {
      paddingTop: "56.25%",
    },
    "& .MuiCardContent-root": {
      textAlign: "left",
      padding: theme.spacing(3),
    },
    "& .MuiDivider-root": {
      margin: `${theme.spacing(3)}px 0`,
    },
  },
  "MuiTagChip--01": {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  dishImage: {
    maxHeight: "200px",
  },
}))

type DishCardType = Pick<ContentfulDish, "slug" | "image" | "title">

const DishCard = ({ data }: { data: DishCardType }) => {
  const classes = useStyles({})

  return (
    <Grid key={`grid__${data.slug}`} item xs={6} sm={4} md={3}>
      <Link to={`/dishes/${data.slug}`}>
        <Card className={classes["MuiEngagementCard--01"]} key={`card__${data.slug}`}>
          {data.image ? <Img fluid={data.image.fluid} alt={data.title} className={classes.dishImage} /> : null}
          <CardContent>
            <Body1>{data.title}</Body1>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
}

export default DishCard
