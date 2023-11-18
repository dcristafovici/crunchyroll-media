import { action, computed, makeObservable, observable } from "mobx";
import { MediaItemType } from "./MediaStoreTypes";
import httpClient from "../../../shared/api/httpClient";

export class MediaStore {
  mediaItems: MediaItemType[] = [];
  selectedTab: string | null = null;
  textFilter: string = "";
  fields: Omit<MediaItemType, "id"> = {
    title: "",
    type: "",
    genre: "",
    releaseYear: 0,
    rating: 0,
  };
  isLoading: boolean = false;

  constructor() {
    makeObservable(this, {
      mediaItems: observable,
      selectedTab: observable,
      textFilter: observable,
      fields: observable,
      isLoading: observable,
      setSelectedTab: action,
      setTextFilter: action,
      fetchMediaItems: action,
      deleteMediaItem: action,
      createMediaItem: action,
      filteredMediaItems: computed,
    });
  }

  setSelectedTab = (tab: string | null) => {
    this.selectedTab = tab;
  };

  setTextFilter = (text: string) => {
    this.textFilter = text;
  };

  setFields = (k: string, v: string) => {
    this.fields = {
      ...this.fields,
      [k]: v,
    };
  };

  fetchMediaItems = async () => {
    this.isLoading = true;
    try {
      httpClient
        .get<MediaItemType[]>("/media")
        .subscribe((data) => (this.mediaItems = data));
    } catch (error) {
      console.error("Error fetching media items:", error);
    } finally {
      this.isLoading = false;
    }
  };

  createMediaItem = async (payload: Omit<MediaItemType, "id">) => {
    this.isLoading = true;
    try {
      httpClient
        .post<MediaItemType>("/media", payload)
        .subscribe((createdItem) => {
          if (createdItem) {
            this.fields = {
              title: "",
              type: "",
              genre: "",
              releaseYear: 0,
              rating: 0,
            };
            this.mediaItems = [createdItem, ...this.mediaItems];
          }
        });
    } catch (error) {
      console.error("Error creating media item:", error);
    } finally {
      this.isLoading = false;
    }
  };

  deleteMediaItem = async (id: number) => {
    this.isLoading = true;
    try {
      httpClient.delete<boolean>("/media", id).subscribe((response) => {
        if (response === true) {
          this.mediaItems = this.mediaItems.filter((item) => item.id !== id);
        }
      });
    } catch (error) {
      console.error("Error fetching media items:", error);
    } finally {
      this.isLoading = false;
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
