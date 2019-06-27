import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import { red, amber, indigo } from "@material-ui/core/colors"

// const headerFont = "Domine"
// const bodyFont = "Open Sans"

const defaultTheme = createMuiTheme({
  // typography: {
  //   fontFamily: [bodyFont, headerFont, "sans-serif"].join(","),
  // },
  palette: {
    primary: {
      main: amber[500],
    },
    secondary: {
      main: indigo[500],
    },
    error: {
      main: red["A400"],
    },
    background: {
      default: "#F0F0F0",
    },
  },
})

// const {
//   breakpoints,
//   typography: { pxToRem },
// } = defaultTheme

const theme = {
  ...defaultTheme,
  // overrides: {
  //   MuiTypography: {
  //     h1: { fontFamily: headerFont },
  //     h2: { fontFamily: headerFont },
  //     h3: { fontFamily: headerFont },
  //     h4: { fontFamily: headerFont },
  //     h5: { fontFamily: headerFont },
  //     h6: { fontFamily: headerFont },
  //     subtitle1: { fontFamily: headerFont },
  //     subtitle2: { fontFamily: headerFont },
  //     body1: { fontFamily: bodyFont },
  //     body2: { fontFamily: bodyFont },
  //   },
  // },
}

export default responsiveFontSizes(theme)

// MuiTypography: {
//   h2: {
//     fontSize: "10rem",
//     [breakpoints.only("xs")]: {
//       fontSize: "1rem",
//       outline: "2px solid red"
//     },
//     // [breakpoints.up("sm")]: {
//     //   fontSize: "3rem",
//     //   outline: "2px solid blue"
//     // },
//   },
// },
