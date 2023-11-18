import React from "react";
import { MediaStyled } from "./MediaStyled";
import MediaList from "../../entities/MediaList";
import FilterBar from "../../features/FilterBar";

const Media: React.FC = () => {
  return (
    <MediaStyled>
      <FilterBar />
      <MediaList />
    </MediaStyled>
  );
};

export default Media;
