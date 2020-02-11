import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/styles"
import React from "react"
import { Helmet } from "react-helmet"
import { JssProvider } from "react-jss"

import muiTheme from "../../src/theme/gatsby-theme-material-ui/theme"

const fontStrHN = "Halant:500|Nunito+Sans:300"
const fontStr = fontStrHN

export default function TopLayout(props) {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        <link href={`https://fonts.googleapis.com/css?family=${fontStr}&display=swap`} rel="stylesheet"></link>
      </Helmet>
      <JssProvider>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          {props.children}
        </ThemeProvider>
      </JssProvider>
    </>
  )
}
