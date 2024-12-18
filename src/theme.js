const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
const theme = {
  colors: {
    primary: "#8CABFF",
    background: "#0B0C10",
    surface: "#15171F",
    text: "white",
    textDark: "#8F8F95",
    textDarker: "#6B6E70",
  },
  font: {
    xxl: "4.5em",
    xml: "2.2em",
    xl: "1.5em",
    anotherlg: "1.3em",
    lg: "1.2em",
    md: "0.9em",
    sm: "0.8em",
    xs: "0.7em",
  },
  size: {
    appMaxWidth: "1250px",
  },
  breakPoints: {
    device: {
      mobileS: `(max-width: ${size.mobileS})`,
      mobileM: `(max-width: ${size.mobileM})`,
      mobileL: `(max-width: ${size.mobileL})`,
      tablet: `(max-width: ${size.tablet})`,
      laptop: `(max-width: ${size.laptop})`,
      laptopL: `(max-width: ${size.laptopL})`,
      desktop: `(max-width: ${size.desktop})`,
      desktopL: `(max-width: ${size.desktop})`,
    },
  },
};
export default theme;
