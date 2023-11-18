import React from "react";
import { MediaStyled } from "./MediaStyled";
import MediaList from "../../entities/MediaList";

const Media: React.FC = () => {
  return (
    <MediaStyled>
      <MediaList />
    </MediaStyled>
  );
};

export default Media;
