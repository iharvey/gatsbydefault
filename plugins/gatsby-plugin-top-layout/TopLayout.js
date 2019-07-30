import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import JssProvider from "react-jss/lib/JssProvider"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/styles"
import { createGenerateClassName } from "@material-ui/styles"
import muiTheme from "../../src/theme/gatsby-theme-material-ui/theme"

const generateClassName = createGenerateClassName()

export default function TopLayout(props) {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link href="https://fonts.googleapis.com/css?family=Quattrocento+Sans|Work+Sans&display=swap" rel="stylesheet"></link>
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

TopLayout.propTypes = {
  children: PropTypes.node,
}
