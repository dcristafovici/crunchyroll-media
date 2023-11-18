import React from "react";
import { RouterProvider } from "react-router-dom";
import { applicationBrowserRouter } from "../../../shared/routing/routes";

const ApplicationRouterProvider: React.FC = () => (
  <RouterProvider router={applicationBrowserRouter} />
);

export default ApplicationRouterProvider;
