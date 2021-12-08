import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { MovieSummary } from "./MovieSummary";
import { Button } from "@mui/material";

export function MovieDetails({ movie, onSetToFavorties, isModal }) {
  if (!movie)
    return (
      <div>
        <h2 className="hero animate-flicker">
          <span className="left-arrorw">⬅</span> Click On Movie 🎬
        </h2>
        <img
          className="starwars-img"
          src="https://images-na.ssl-images-amazon.com/images/I/91vD4udQl2L.jpg"
          alt=""
        />
      </div>
    );

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {movie.director}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {movie.release_date}
        </Typography>
      </CardContent>
      <Button
        className={isModal ? "none" : ""}
        onClick={() => onSetToFavorties(movie)}
        variant="contained"
      >
        Add To Favorites
      </Button>
      <div className="movie-summary">
        <MovieSummary movieSum={movie.opening_crawl} />
      </div>
    </Card>
  );
}
