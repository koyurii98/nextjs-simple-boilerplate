import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      main: string,
      sub: string
     },
     size : {
      mobile: string,
      tablet: string,
      laptop: string,
      desktop: string,
    }
  }
}
 