import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import JssProvider from "react-jss/lib/JssProvider"
import { TypographyStyle, GoogleFont } from "react-typography"

import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/styles"
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import { createGenerateClassName } from "@material-ui/styles"

import muiTheme from "../../src/theme/gatsby-theme-material-ui/theme"
import typography from "../../src/theme/typography"

const generateClassName = createGenerateClassName()

export default function TopLayout(props) {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
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