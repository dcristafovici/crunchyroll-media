export enum MediaApplicationGenre {
  MOVIE = "movie",
  TVSHOW = "tv-show",
  GAME = "game",
}

// Perhaps it seems unnecessary now, but I anticipate that in the future, it will become essential for scalability
export const MediaApplicationSupportedGenre: MediaApplicationGenre[] = [
  MediaApplicationGenre.MOVIE,
  MediaApplicationGenre.TVSHOW,
  MediaApplicationGenre.GAME,
];

export interface MediaItem {
  id: number;
  title: string;
  type: string;
  genre: string;
  releaseYear: number;
  rating: number;
}
