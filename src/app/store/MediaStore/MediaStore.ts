import { action, computed, makeObservable, observable } from "mobx";
import {
  MediaApplicationSupportedGenre,
  MediaItemType,
} from "./MediaStoreTypes";
import httpClient from "../../../shared/api/httpClient";

export class MediaStore {
  mediaItems: MediaItemType[] = [];

  constructor() {
    makeObservable(this, {
      mediaItems: observable,
      fetchMediaItems: action,
      filteredMediaItems: computed,
    });
  }

  fetchMediaItems = async () => {
    try {
      httpClient
        .get<MediaItemType[]>("/media")
        .subscribe((data) => (this.mediaItems = data));
    } catch (error) {
      console.error("Error fetching media items:", error);
    }
  };

  deleteMediaItem = async (id: number) => {
    try {
      httpClient.delete<boolean>("/media", id).subscribe((response) => {
        if (response === true) {
          this.mediaItems = this.mediaItems.filter((item) => item.id !== id);
        }
      });
    } catch (error) {
      console.error("Error fetching media items:", error);
    }
  };

  get filteredMediaItems() {
    return this.mediaItems.filter((item) =>
      MediaApplicationSupportedGenre.includes(item.type)
    );
  }
}

const mediaStore = new MediaStore();

export default mediaStore;
