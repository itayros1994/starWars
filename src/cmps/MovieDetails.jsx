import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { MovieSummary } from "./MovieSummary";
import { Button } from "@mui/material";

export function MovieDetails({ movie, onSetToFavorties }) {
  if (!movie) return <h2 className="hero">Click On Movie!</h2>
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
        <Typography variant="body2"></Typography>
      </CardContent>
      <Button onClick={() => onSetToFavorties(movie)} variant="contained">
        Add To Favorites
      </Button>
      <div className='movie-summary'>
      <MovieSummary movieSum={movie.opening_crawl} />
      </div>
    </Card>
  );
}
