import React, { useState } from "react";
import { MoviePreview } from "./MoviePreview";
import { MovieDetails } from "./MovieDetails";

export function MovieList({ movies, onSetToFavorties }) {
  const [selectedMovie, setSelectedMovie] = useState("");

  const selectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  if (!movies.length) return <div> "loading.."</div>;

  return (
    <div className="movie-list-container">
      <div className="movie-preview-container">
        {movies.map((movie) => {
          return <MoviePreview selectMovie={selectMovie} movie={movie} />;
        })}
      </div>
      <div className="movie-details-container">
        <MovieDetails onSetToFavorties={onSetToFavorties} movie={selectedMovie} />
      </div>
    </div>
  );
}
