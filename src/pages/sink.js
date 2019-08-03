import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Layout from "../layouts/layout"

import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: "none",
  },
}))

const KitchenSink = () => {
  const classes = useStyles()

  return (
    <Layout>
      <div>
        <Button variant="contained" className={classes.button}>
          Default
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          Primary
        </Button>
        <Button variant="contained" color="secondary" className={classes.button}>
          Secondary
        </Button>
        <Button variant="contained" color="secondary" disabled className={classes.button}>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons" className={classes.button}>
          Link
        </Button>
        <input accept="image/*" className={classes.input} id="contained-button-file" multiple type="file" />
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span" className={classes.button}>
            Upload
          </Button>
        </label>
      </div>

      <div>
        <Button className={classes.button}>Default</Button>
        <Button color="primary" className={classes.button}>
          Primary
        </Button>
        <Button color="secondary" className={classes.button}>
          Secondary
        </Button>
        <Button disabled className={classes.button}>
          Disabled
        </Button>
        <Button href="#text-buttons" className={classes.button}>
          Link
        </Button>
        <input accept="image/*" className={classes.input} id="text-button-file" multiple type="file" />
        <label htmlFor="text-button-file">
          <Button component="span" className={classes.button}>
            Upload
          </Button>
        </label>
      </div>

      <div>
        <Button variant="outlined" className={classes.button}>
          Default
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          Primary
        </Button>
        <Button variant="outlined" color="secondary" className={classes.button}>
          Secondary
        </Button>
        <Button variant="outlined" disabled className={classes.button}>
          Disabled
        </Button>
        <Button variant="outlined" href="#outlined-buttons" className={classes.button}>
          Link
        </Button>
        <input accept="image/*" className={classes.input} id="outlined-button-file" multiple type="file" />
        <label htmlFor="outlined-button-file">
          <Button variant="outlined" component="span" className={classes.button}>
            Upload
          </Button>
        </label>
        <Button variant="outlined" color="inherit" className={classes.button}>
          Inherit
        </Button>
      </div>

      <div>
        <Button variant="outlined" size="small" color="primary" className={classes.button}>
          Small
        </Button>
        <Button variant="outlined" size="medium" color="primary" className={classes.button}>
          Medium
        </Button>
        <Button variant="outlined" size="large" color="primary" className={classes.button}>
          Large
        </Button>
      </div>

      <div>
        <IconButton aria-label="delete" className={classes.margin} size="small">
          <ArrowDownwardIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" className={classes.margin}>
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" className={classes.margin}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" className={classes.margin}>
          <DeleteIcon fontSize="large" />
        </IconButton>
      </div>

      <hr/>

      <Grid container spacing={2}>
        <Grid key={`grid__1`} item xs={12} sm={6}>
          <Typography variant="h1" component="h2" gutterBottom>
            h1. Heading
          </Typography>
          <Typography variant="h2" gutterBottom>
            h2. Heading
          </Typography>
          <Typography variant="h3" gutterBottom>
            h3. Heading
          </Typography>
          <Typography variant="h4" gutterBottom>
            h4. Heading
          </Typography>
          <Typography variant="h5" gutterBottom>
            h5. Heading
          </Typography>
          <Typography variant="h6" gutterBottom>
            h6. Heading
          </Typography>
        </Grid>

        <Grid key={`grid__2`} item xs={12} sm={6}>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
            beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
            Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
            beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
            Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
            button text
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            caption text
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            overline text
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default KitchenSink
