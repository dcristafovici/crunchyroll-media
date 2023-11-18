import { RouteObject, createBrowserRouter } from "react-router-dom";
import {
  ApplicationRoutes,
  ApplicationRoutesPaths,
} from "../types/RoutesTypes";
import CreateMediaPage from "./components/CreateMediaPage";
import PageLayout from "../../pages/PageLayout";
import MediaPage from "./components/MediaPage";

const routes: RouteObject[] = [
  {
    path: ApplicationRoutesPaths[ApplicationRoutes.MEDIA],
    element: <MediaPage />,
  },
  {
    path: ApplicationRoutesPaths[ApplicationRoutes.CREATE_MEDIA],
    element: <CreateMediaPage />,
  },
];

export const applicationBrowserRouter = createBrowserRouter([
  {
    element: <PageLayout />,
    children: routes,
    loader: (): string => {
      return "test";
    },
  },
]);
