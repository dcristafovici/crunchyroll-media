import { ThemeProvider } from "styled-components";
import defaultApplicationTheme from "../../../shared/ui/theme/defaultApplicationTheme";
import { ParentCommonProps } from "../../../shared/types/ParentCommonProps";

const ApplicationThemeProvider: React.FC<ParentCommonProps> = ({
  children,
}) => <ThemeProvider theme={defaultApplicationTheme}>{children}</ThemeProvider>;

export default ApplicationThemeProvider;
