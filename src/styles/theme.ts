
 import { DefaultTheme } from "styled-components";

 const size = {
  mobile: '',
  tablet: '',
  laptop: '',
  desktop: '',
}

 const theme: DefaultTheme = {
   color: {
    main: "",
    sub: ""
   },
   size : {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
  }
 };
 
//  const nextTheme: DefaultTheme = {
 
//    color: {
//      main: "#1c1f25",
//      sub: "#fff"
//    }
//  };
 
//  export { theme, nextTheme };
export { theme };
  