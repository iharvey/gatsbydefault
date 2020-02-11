import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"

import { ContentfulDish } from "../../../types/graphqlTypes"
import { H5 } from "../../typesetting"
import { useStyles } from "./styles"

type DishCardType = Pick<ContentfulDish, "slug" | "image" | "title">

const DishCard: React.FC<{ data: DishCardType }> = ({ data }) => {
  const classes = useStyles()

  return (
    <Grid key={`grid__${data.slug}`} item xs={6} sm={4} md={3}>
      <Link to={`/dishes/${data.slug}`}>
        <Card className={classes["MuiEngagementCard--01"]} key={`card__${data.slug}`}>
          <div className={classes.container}>
            {data.image ? <Img fluid={data.image.fluid} alt={data.title} className={classes.dishImage} /> : null}
            <H5 gutterBottom className={classes.cardTitle}>
              {data.title}
            </H5>
          </div>
          <CardContent>baa</CardContent>
        </Card>
      </Link>
    </Grid>
  )
}

export default DishCard
