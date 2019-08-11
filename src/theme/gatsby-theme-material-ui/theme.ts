import { red } from "@material-ui/core/colors"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme"

// export const bodyFont = "'Quattrocento Sans', sans-serif;"
// export const headerFont = "'Work Sans', sans-serif"

const typographyFairyGates = {
  headerFont: "'Work Sans', sans-serif",
  bodyFont: "'Quattrocento Sans', sans-serif;",
  boldWeight: 700
}

const typographyHaLantNunito = {
  headerFont: "'Halant', sans-serif",
  bodyFont: "'Nunito Sans', sans-serif;",
  boldWeight: 500
}

const typographyLoraRoboto = {
  headerFont: "'Lora', serif",
  bodyFont: "'Roboto', sans-serif;",
  boldWeight: 700
}


const typo = typographyHaLantNunito

const defaultThemeObj: ThemeOptions = {
  typography: {
    fontFamily: typo.bodyFont,
    htmlFontSize: 16,
    fontSize: 14,
    h1: {
      fontFamily: typo.headerFont,
      fontSize: 4.5,
    },
    h2: {
      fontFamily: typo.headerFont,
    },
    h3: {
      fontFamily: typo.headerFont,
    },
    h4: {
      fontFamily: typo.headerFont,
    },
    h5: {
      fontFamily: typo.headerFont,
    },
    h6: {
      fontFamily: typo.headerFont,
    },
    subtitle2: {
      fontWeight: typo.boldWeight,
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

// export default responsiveFontSizes(theme)

export default responsiveFontSizes(theme)

// https://github.com/mui-org/material-ui/issues/12290
// https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/page-layout-examples/blog/Markdown.js
