import React from "react";
import { MoviePreview } from "./MoviePreview";

export function MovieList({ movies }) {
  console.log(movies);

  if (!movies) return "loading..";

  return (
    <div>
      {movies.map((movie) => {
       return <MoviePreview movie={movie}/>;
      })}
    </div>
  );
}
