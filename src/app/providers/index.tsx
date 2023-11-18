import GlobalStyles from "../styles/GlobalStyles";
import ApplicationRouterProvider from "./ApplicationRouterProvider";
import ApplicationThemeProvider from "./ApplicationThemeProvider/ApplicationThemeProvider";

const ApplicationProvider: React.FC = () => (
  <ApplicationThemeProvider>
    <GlobalStyles />
    <ApplicationRouterProvider />
  </ApplicationThemeProvider>
);

export default ApplicationProvider;
