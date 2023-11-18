import React from "react";
import LoadComponent from "../../utils/LoadComponent";

const MediaListPage = LoadComponent(
  React.lazy(() => import("../../../pages/MediaList"))
);

export default MediaListPage;
