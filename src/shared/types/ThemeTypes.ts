export type ApplicationThemeInterface = {
  name: string;
  colors: {
    primary: {
      default: string;
      dark: string;
      light: string;
    };
    white: string;
    green: string;
    yellow: string;
    black: string;
  };
};

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ApplicationThemeInterface {}
}
