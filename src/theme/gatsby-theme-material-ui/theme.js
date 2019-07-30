import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import { red, amber, indigo } from "@material-ui/core/colors"

const headerFont = "'Work Sans', sans-serif"
const bodyFont = "'Quattrocento Sans', sans-serif;"

const defaultTheme = createMuiTheme({
  typography: {
    fontFamily: bodyFont,
    htmlFontSize: 14,
    fontSize: 14,
    h1: {
      fontFamily: headerFont,
    },
    h2: {
      fontFamily: headerFont,
    },
    h3: {
      fontFamily: headerFont,
    },
    h4: {
      fontFamily: headerFont,
    },
    h5: {
      fontFamily: headerFont,
    },
    h6: {
      fontFamily: headerFont,
    },
  },
  palette: {
    primary: {
      main: amber["500"],
    },
    secondary: {
      main: indigo["500"],
    },
    error: {
      main: red["A400"],
    },
    background: {
      default: "#F0F0F0",
    },
  },
})

const theme = {
  ...defaultTheme,
  overrides: {},
}

export default responsiveFontSizes(theme)

// https://github.com/mui-org/material-ui/issues/12290
// https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/page-layout-examples/blog/Markdown.js
