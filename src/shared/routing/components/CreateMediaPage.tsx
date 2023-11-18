import React from "react";
import LoadComponent from "../../utils/LoadComponent";

const CreateMediaPage = LoadComponent(
  React.lazy(() => import("../../../pages/CreateMedia"))
);

export default CreateMediaPage;
