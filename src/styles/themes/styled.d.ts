import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;

      white: string;

      primary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };

      danger: {
        light: string;
        main: string;
        dark: string;
      };

      gray: {
        900: string;
        200: string;
      };
    };
  }
}
