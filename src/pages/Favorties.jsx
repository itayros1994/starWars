import { Button } from "@mui/material";
import React, { useState } from "react";
import { MoviePreview } from "../cmps/MoviePreview";
import { DetailsModal } from "../cmps/DetailsModal";

export function Favorties({ favoritesMovies, onRemoveFromFavorites }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <h2 className="hero">Favorites Movies 💫</h2>
      <div className="favorites-container">
        {favoritesMovies.map((movie) => {
          return (
            <div className="favorite">
              <MoviePreview
                movie={movie}
                selectMovie={() => setOpenModal(true)}
              />
              <DetailsModal
                movie={movie}
                open={openModal}
                onClose={() => setOpenModal(false)}
              />
              <Button
                variant="contained"
                color="info"
                onClick={() => onRemoveFromFavorites(movie)}
              >
                Remove
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
