import { observer } from "mobx-react-lite";
import React from "react";
import { MediaFormStyled } from "./MediaFormStyled";
import mediaStore from "../../app/store/MediaStore/MediaStore";
import { useNavigate } from "react-router-dom";
import {
  ApplicationRoutes,
  ApplicationRoutesPaths,
} from "../../shared/types/RoutesTypes";

const MediaForm: React.FC = observer(() => {
  const { fields, setFields, createMediaItem } = mediaStore;
  const { title, type, genre, releaseYear, rating } = fields;
  const navigate = useNavigate();
  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    createMediaItem(fields);
    navigate(ApplicationRoutesPaths[ApplicationRoutes.MEDIA]);
  };

  return (
    <MediaFormStyled>
      <form>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setFields("title", e.target.value)}
          />
        </div>
        <div>
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={type}
            onChange={(e) => setFields("type", e.target.value)}
          />
        </div>
        <div>
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={genre}
            onChange={(e) => setFields("genre", e.target.value)}
          />
        </div>
        <div>
          <label>Release year:</label>
          <input
            type="text"
            name="releaseYear"
            value={releaseYear}
            onChange={(e) => setFields("releaseYear", e.target.value)}
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="text"
            name="rating"
            value={rating}
            onChange={(e) => setFields("rating", e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleSubmitForm} type="submit">
            Submit
          </button>
        </div>
      </form>
    </MediaFormStyled>
  );
});

export default MediaForm;
