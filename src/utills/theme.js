import { createTheme } from "@mui/material/styles";
const BaseTheme = createTheme({
  palette: {
    primary: {
      main: "#DD952B",
      light:"#F5DDC4",
      hover: "#E9EFFF",
    },
    secondary: {
      main: "#DD952B",
    },
   
    common: {
      black: "#000000",
      white: "#FFFFFF",
      grey: "#DCD9D9",
      lightgrey: "#DCD9D9",
      green:"#015f3d"
    },
    error: {
      main: '#b10004', // Change to your desired error color
    },
  },
//   typography: {
//     fontFamily: {
//       main: "rubik",
//     },
//   },
});

export default BaseTheme;
