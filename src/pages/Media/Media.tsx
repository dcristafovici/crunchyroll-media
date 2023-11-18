import React, { useEffect } from "react";
import { MediaStyled } from "./MediaStyled";

const Media: React.FC = () => {
  useEffect(() => {
    fetch("/api/media").then((res) => console.log(res));
  }, []);
  return (
    <MediaStyled>
      <h1>media page</h1>
    </MediaStyled>
  );
};

export default Media;
