import { observer } from "mobx-react-lite";
import mediaStore from "../../app/store/MediaStore/MediaStore";
import { MediaListStyled } from "./MediaListStyled";

const MediaList: React.FC = observer(() => {
  const { mediaItems } = mediaStore;
  return (
    <MediaListStyled>
      <h1>MediaList page</h1>
    </MediaListStyled>
  );
});

export default MediaList;
