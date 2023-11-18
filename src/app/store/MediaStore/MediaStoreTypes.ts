export const MediaApplicationSupportedTypes = ["movie", "tw-shows", "game"];

export interface MediaItemType {
  id: number;
  title: string;
  type: string;
  genre: string;
  releaseYear: number;
  rating: number;
}
