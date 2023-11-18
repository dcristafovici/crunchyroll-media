import makeServer from "../../shared/lib/mirage/server";
import GlobalStyles from "../styles/GlobalStyles";
import ApplicationRouterProvider from "./ApplicationRouterProvider";
import ApplicationThemeProvider from "./ApplicationThemeProvider/ApplicationThemeProvider";

const ApplicationProvider: React.FC = () => {
  makeServer();
  return (
    <ApplicationThemeProvider>
      <GlobalStyles />
      <ApplicationRouterProvider />
    </ApplicationThemeProvider>
  );
};

export default ApplicationProvider;
