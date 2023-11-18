import React from "react";
import { ContainerStyled } from "./ContainerStyled";
import { ParentCommonProps } from "../../types/ParentCommonProps";

const Container: React.FC<ParentCommonProps> = ({ children }) => (
  <ContainerStyled>{children}</ContainerStyled>
);

export default Container;
