import { observer } from "mobx-react-lite";
import mediaStore from "../../app/store/MediaStore/MediaStore";
import { MediaListStyled } from "./MediaListStyled";
import { useEffect } from "react";
import Container from "../../shared/ui/Container";
import MediaItem from "../MediaItem";

const MediaList: React.FC = observer(() => {
  const { filteredMediaItems, fetchMediaItems, deleteMediaItem } = mediaStore;
  useEffect(() => {
    fetchMediaItems();
  }, [fetchMediaItems]);

  return (
    <MediaListStyled>
      <Container>
        {filteredMediaItems.map((item) => (
          <MediaItem
            key={item.id}
            item={item}
            onDelete={(id: number) => deleteMediaItem(id)}
          />
        ))}
      </Container>
    </MediaListStyled>
  );
});

export default MediaList;
