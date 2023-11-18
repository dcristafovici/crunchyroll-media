import React, { useEffect } from "react";
import { MediaListStyled } from "./MediaListStyled";
import { observer } from "mobx-react-lite";
import mediaStore from "../../app/store/MediaStore/MediaStore";

const MediaList: React.FC = observer(() => {
  const { mediaItems } = mediaStore;

  console.log(mediaItems);
  return <MediaListStyled>h1</MediaListStyled>;
});
export default MediaList;
