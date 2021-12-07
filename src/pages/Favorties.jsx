import { Button } from "@mui/material";
import React from "react";
import { MoviePreview } from "../cmps/MoviePreview";

export function Favorties({ favoritesMovies, onRemoveFromFavorites }) {

  return (
    <div>
      <h2 className="hero">Favorites Movies!</h2>
      <div className="favorites-container">
        {favoritesMovies.map((movie) => {
          return (
            <div className="favorite">
              <MoviePreview movie={movie}/>
              <Button variant="contained" color="info" onClick={() => onRemoveFromFavorites(movie)}>
                Remove
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
