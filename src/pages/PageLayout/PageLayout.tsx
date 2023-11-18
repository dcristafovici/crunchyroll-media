import React from "react";
import { PageLayoutStyled } from "./PageLayoutStyled";
import Header from "../../widgets/Header";
import { Outlet } from "react-router-dom";

const PageLayout: React.FC = () => (
  <PageLayoutStyled>
    <Header />
    <Outlet />
  </PageLayoutStyled>
);

export default PageLayout;
