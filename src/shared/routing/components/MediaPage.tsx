import React from "react";
import LoadComponent from "../../utils/LoadComponent";

const MediaPage = LoadComponent(
  React.lazy(() => import("../../../pages/Media"))
);

export default MediaPage;
