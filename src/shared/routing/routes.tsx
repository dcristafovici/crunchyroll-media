import { RouteObject, createBrowserRouter } from "react-router-dom";
import {
  ApplicationRoutes,
  ApplicationRoutesPaths,
} from "../types/RoutesTypes";
import MediaListPage from "./components/MediaListPage";
import CreateMediaPage from "./components/CreateMediaPage";
import PageLayout from "../../pages/PageLayout";

const routes: RouteObject[] = [
  {
    path: ApplicationRoutesPaths[ApplicationRoutes.MEDIA_LIST],
    element: <MediaListPage />,
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
