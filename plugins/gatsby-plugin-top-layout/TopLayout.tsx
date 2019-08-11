import React from "react"

import CssBaseline from "@material-ui/core/CssBaseline"
import { createGenerateClassName, ThemeProvider } from "@material-ui/styles"
import { Helmet } from "react-helmet"
import JssProvider from "react-jss/lib/JssProvider"

import muiTheme from "../../src/theme/gatsby-theme-material-ui/theme"

const generateClassName = createGenerateClassName()

const fontStrFG = "Quattrocento+Sans:400,700|Work+Sans"
const fontStrHN = "Halant:500|Nunito+Sans:300"
const fontStrLR = "Lora:700|Roboto:300"

const fontStr = fontStrHN

export default function TopLayout(props) {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        <link href={`https://fonts.googleapis.com/css?family=${fontStr}&display=swap`} rel="stylesheet"></link>
      </Helmet>

      <JssProvider generateClassName={generateClassName}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          {props.children}
        </ThemeProvider>
      </JssProvider>
    </>
  )
}
