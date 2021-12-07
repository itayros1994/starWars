import React, { useState } from "react";
import { MoviePreview } from "./MoviePreview";
import { MovieDetails } from "./MovieDetails";
import Loader from "react-loader-spinner";

export function MovieList({ movies, onSetToFavorties}) {
  const [selectedMovie, setSelectedMovie] = useState("");

  const selectMovie = (movie) => {
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
    setSelectedMovie(movie);
  };

  if (!movies.length) return <div className="loader"> <Loader color="#00BFFF" type="Circles"/></div>; 
  return (
    <div className="movie-list-container">
      <div className="movie-preview-container">
      <h2 className="choose-movie">Choose Movie</h2>
        {movies.map((movie) => {
          return <MoviePreview selectMovie={selectMovie} movie={movie}/>;
        })}
      </div>
      <div className='movie-details-container'>
        <MovieDetails onSetToFavorties={onSetToFavorties} movie={selectedMovie} />
      </div>
    </div>
  );
}
