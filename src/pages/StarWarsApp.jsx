import React, { useEffect, useState } from "react";
import { MovieService } from "../Services/MovieService";
import { MovieList } from "../cmps/MovieList";

export function StarWarsApp({ onSetToFavorties }) {
  const [movies, setMovies] = useState([]);

  // Fetching Data From SW API
  useEffect(() => {
    MovieService.getMovies().then((res) => {
      setMovies(res.results);
    });
  }, []);

  return (
    <div>
      <h2 className="hero">StarsWar App 💥 </h2>
      <MovieList onSetToFavorties={onSetToFavorties} movies={movies} />
    </div>
  );
}
