import React, { useEffect, useState } from "react";
import { MovieService } from "../Services/MovieService";
import { MovieList } from "../cmps/MovieList";

export function StarWarsApp({onSetToFavorties}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MovieService.getMovies().then((res) => {
      setMovies(res.results);
      console.log(res.results);
    });
  }, []);



  return (
    <div>
      <MovieList onSetToFavorties={onSetToFavorties}  movies={movies} />
    </div>
  );
}
