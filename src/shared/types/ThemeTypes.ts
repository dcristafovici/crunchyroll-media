export type ApplicationThemeInterface = {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
};

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ApplicationThemeInterface {}
}
