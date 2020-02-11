import { red } from "@material-ui/core/colors"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme"

const typographyHaLantNunito = {
  headerFont: "'Halant', sans-serif",
  bodyFont: "'Nunito Sans', sans-serif;",
  boldWeight: 500
}

const fonts = typographyHaLantNunito

const defaultThemeObj: ThemeOptions = {
  typography: {
    fontFamily: fonts.bodyFont,
    htmlFontSize: 16,
    fontSize: 14,
    h1: {
      fontFamily: fonts.headerFont,
      fontSize: 4.5,
    },
    h2: {
      fontFamily: fonts.headerFont,
    },
    h3: {
      fontFamily: fonts.headerFont,
    },
    h4: {
      fontFamily: fonts.headerFont,
    },
    h5: {
      fontFamily: fonts.headerFont,
    },
    h6: {
      fontFamily: fonts.headerFont,
    },
    subtitle2: {
      fontWeight: fonts.boldWeight,
    },
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red["A400"],
    },
    background: {
      default: "#F0F0F0",
    },
  },
}

const defaultTheme = createMuiTheme(defaultThemeObj)

const theme = {
  ...defaultTheme,
  overrides: {
    // MuiButton: {
    //   text: {
    //     color: "white",
    //   },
    // },
  },
}


export default responsiveFontSizes(theme)

// https://github.com/mui-org/material-ui/issues/12290
// https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/page-layout-examples/blog/Markdown.js
