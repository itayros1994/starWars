import { Button } from "@mui/material";
import React, { useState } from "react";
import { MoviePreview } from "../cmps/MoviePreview";
import { DetailsModal } from "../cmps/DetailsModal";

export function Favorties({ favoritesMovies, onRemoveFromFavorites }) {
  const [openModal, setOpenModal] = useState(false);
  const [selctedMovie, setSelctedMovie] = useState({});

  const selectMovie = (movie) => {
    setSelctedMovie(movie);
    setOpenModal(true);
  };

  return (
    <div>
      <h2 className="hero">Favorites Movies 💫</h2>
      <div className="favorites-container">
        {favoritesMovies.map((movie) => {
          return (
            <div className="favorite">
              <MoviePreview
                movie={movie}
                selectMovie={() => selectMovie(movie)}
              />
              <Button
                variant="contained"
                color="info"
                onClick={() => onRemoveFromFavorites(movie)}
              >
                Remove
              </Button>
              <DetailsModal
                movie={selctedMovie}
                open={openModal}
                onClose={() => setOpenModal(false)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
