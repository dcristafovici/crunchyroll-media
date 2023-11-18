import { action, computed, makeObservable, observable } from "mobx";
import { MediaItemType } from "./MediaStoreTypes";
import httpClient from "../../../shared/api/httpClient";

export class MediaStore {
  mediaItems: MediaItemType[] = [];
  selectedTab: string | null = null;
  textFilter: string = "";

  constructor() {
    makeObservable(this, {
      mediaItems: observable,
      selectedTab: observable,
      textFilter: observable,
      setSelectedTab: action,
      setTextFilter: action,
      fetchMediaItems: action,
      filteredMediaItems: computed,
    });
  }

  setSelectedTab = (tab: string | null) => {
    this.selectedTab = tab;
  };

  setTextFilter = (text: string) => {
    this.textFilter = text;
  };

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
    return this.mediaItems.filter((item) => {
      const typeMatches = !this.selectedTab || item.type === this.selectedTab;

      const textMatches =
        !this.textFilter ||
        item.title.toLowerCase().includes(this.textFilter.toLowerCase());

      return typeMatches && textMatches;
    });
  }
}

const mediaStore = new MediaStore();

export default mediaStore;
