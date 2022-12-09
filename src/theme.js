const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }
const theme = {
    colors:{
        primary:"#66FCF1",
        background: "#0B0C10",
        surface: "#15171F",
        text: "white",
        textDark: "#8F8F95",
        textDarker: "#6B6E70",
    },
    font:{
        xxl:"4.5em",
        xml:"2.2em",
        xl:"1.5em",
        anotherlg:"1.3em",
        lg:"1.2em",
        md:"0.9em",
        sm:"0.8em",
        xs:"0.7em",
    },
    size:{
        appMaxWidth:"1250px",
    },
    breakPoints:{
        device :{
            mobileS: `(min-width: ${size.mobileS})`,
            mobileM: `(min-width: ${size.mobileM})`,
            mobileL: `(min-width: ${size.mobileL})`,
            tablet: `(min-width: ${size.tablet})`,
            laptop: `(min-width: ${size.laptop})`,
            laptopL: `(min-width: ${size.laptopL})`,
            desktop: `(min-width: ${size.desktop})`,
            desktopL: `(min-width: ${size.desktop})`
          }    
    }
}
export default theme;