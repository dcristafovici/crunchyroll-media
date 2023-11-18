import { makeObservable, observable } from "mobx";
import { MediaItem } from "./MediaStoreTypes";

export class MediaStore {
  mediaItems: MediaItem[] = [];

  constructor() {
    makeObservable(this, {
      mediaItems: observable,
    });
  }
}

const mediaStore = new MediaStore();

export default mediaStore;
