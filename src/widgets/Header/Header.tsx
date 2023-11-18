import React from "react";
import { HeaderStyled } from "./HeaderStyled";
import Container from "../../shared/ui/Container";
import { NavLink } from "react-router-dom";
import {
  ApplicationRoutes,
  ApplicationRoutesPaths,
} from "../../shared/types/RoutesTypes";

const Header: React.FC = () => (
  <HeaderStyled>
    <Container>
      <nav className="header-navigation">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={ApplicationRoutesPaths[ApplicationRoutes.MEDIA_LIST]}
            >
              Media List
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={ApplicationRoutesPaths[ApplicationRoutes.CREATE_MEDIA]}
            >
              Create Media
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  </HeaderStyled>
);

export default Header;
