import { red } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

export const headerFont = "'Work Sans', sans-serif"
export const bodyFont = "'Quattrocento Sans', sans-serif;"

const boldWeight = 700

const defaultThemeObj: ThemeOptions = {
  typography: {
    fontFamily: bodyFont,
    htmlFontSize: 16,
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
    subtitle2: {
      fontWeight: boldWeight,
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
