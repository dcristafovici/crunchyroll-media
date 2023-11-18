import { MediaItemType } from "../../app/store/MediaStore/MediaStoreTypes";

export interface MediaItemProps {
  item: MediaItemType;
  // TODO: Change
  onDelete: any;
}
