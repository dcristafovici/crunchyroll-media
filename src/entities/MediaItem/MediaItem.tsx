import React from "react";
import { MediaItemStyled } from "./MediaItemStyled";
import { MediaItemProps } from "./MediaItemTypes";

const MediaItem: React.FC<MediaItemProps> = ({ item, onDelete }) => {
  const { id, title, type, genre, releaseYear, rating } = item;
  return (
    <MediaItemStyled>
      <div className="media-info">
        <h3>{title}</h3>
        <p>Type: {type}</p>
        <p>Genre: {genre}</p>
        <p>Release Year: {releaseYear}</p>
        <p>Rating: {rating}</p>
      </div>
      <div className="media-buttons">
        <button onClick={() => console.log("function is not implementd")}>
          Edit
        </button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </MediaItemStyled>
  );
};

export default MediaItem;
