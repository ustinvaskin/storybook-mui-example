import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    primary: {
      c90: "#EBDCFF",
      c80: "#D4BBFF",
      c70: "#BD99FC",
      c60: "#A27FDF",
      c50: "#8765C3",
      c40: "#6E4CA8",
      c30: "#55338E",
      c20: "#3E1876",
      c10: "#270058",
      c0: "#000000",
      main: "#D4BBFF",
    },
    secondary: {
      c90: "#D8E2FF",
      c80: "#ADC6FF",
      c70: "#80AAFF",
      c60: "#4F8EFC",
      c50: "#2E74E0",
      c40: "#005AC2",
      c30: "#004494",
      c20: "#002E69",
      c10: "#001A41",
      c0: "#000000",
      main: "#ADC6FF",
    },
    tertiary: {
      c90: "#BAEAFF",
      c80: "#5FD4FD",
      c70: "#3BB8E0",
      c60: "#009DC4",
      c50: "#0081A2",
      c40: "#006781",
      c30: "#004D62",
      c20: "#003544",
      c10: "#001F29",
      c0: "#000000",
      main: "#5FD4FD",
      contrastText: "#000000",
      light: "#000000",
      dark: "#000000",
    },
    error: {
      c90: "#FFDAD4",
      c80: "#FFB4A7",
      c70: "#FF8A77",
      c60: "#FF553E",
      c50: "#DF3622",
      c40: "#BA1A0A",
      c30: "#920700",
      c20: "#680300",
      c10: "#400100",
      c0: "#000000",
      main: "#FFB4A7",
    },
    success: {
      c90: "#A2F795",
      c80: "#87DA7B",
      c70: "#6CBE63",
      c60: "#52A24B",
      c50: "#388734",
      c40: "#1B6D1D",
      c30: "#00530A",
      c20: "#003A05",
      c10: "#002202",
      c0: "#000000",
      main: "#87DA7B",
    },
    neutral: {
      c95: "#F5EFF4",
      c90: "#E6E1E6",
      c80: "#CAC5CA",
      c70: "#AEAAAE",
      c60: "#938F94",
      c50: "#79767A",
      c40: "#605D61",
      c30: "#48464A",
      c20: "#323033",
      c10: "#1D1B1E",
      c0: "#000000",
      main: "#CAC5CA",
    },
    background: {
      default: "#202124",
    },
    text: {
      primary: "#F0F0F0",
      secondary: "#989899",
    },
    mode: "dark",
  },
  typography: {
    h1: {
      fontFamily: ["Lato", "Syabil", "sans-serif"].join(","),
      fontSize: "32px",
      fontWeight: 400,
      lineHeight: "40px",
      textAlign: "left",
    },
    h2: {
      fontFamily: ["Lato", "Syabil", "sans-serif"].join(","),
      fontSize: "28px",
      fontWeight: 400,
      lineHeight: "36px",
      textAlign: "left",
    },
    h3: {
      fontFamily: ["Lato", "Syabil", "sans-serif"].join(","),
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "32px",
      textAlign: "left",
    },
    h4: {
      fontFamily: ["Lato", "Syabil", "sans-serif"].join(","),
      fontSize: "22px",
      fontWeight: 500,
      lineHeight: "28px",
      textAlign: "left",
    },
    h5: {
      fontFamily: ["Lato", "Syabil", "sans-serif"].join(","),
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "24px",
      textAlign: "left",
    },
    h6: {
      fontFamily: ["Lato", "Syabil", "sans-serif"].join(","),
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "24px",
      textAlign: "left",
    },
    body1: {
      fontFamily: ["Lato", "Syabil", "sans-serif"].join(","),
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
      textAlign: "left",
    },
    body2: {
      fontFamily: ["Lato", "Syabil", "sans-serif"].join(","),
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "20px",
      textAlign: "left",
    },
    subtitle1: {
      fontFamily: ["Lato", "Syabil", "sans-serif"].join(","),
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "24px",
      textAlign: "left",
    },
    subtitle2: {
      fontFamily: ["Lato", "Syabil", "sans-serif"].join(","),
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "20px",
      textAlign: "left",
    },
    caption: {
      fontFamily: ["Lato", "Syabil", "sans-serif"].join(","),
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16px",
      textAlign: "left",
    },
    button: {
      fontFamily: ["Lato", "Syabil", "sans-serif"].join(","),
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "16px",
      textAlign: "left",
    },
    overline: {
      fontFamily: ["Lato", "Syabil", "sans-serif"].join(","),
      fontSize: "10px",
      fontWeight: 500,
      lineHeight: "16px",
      textAlign: "left",
    },
  },
});
