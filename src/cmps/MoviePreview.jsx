import React from "react";

export function MoviePreview({ movie, selectMovie }) {
  return (
    <div onClick={() => selectMovie(movie)} className='movie-preview'>
      <div>{movie.title}</div>
    </div>
  );
}
