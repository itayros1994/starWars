import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { StarWarsApp } from "./pages/StarWarsApp";
import { Footer } from "./cmps/Footer";
import { Header } from "./cmps/Header";
import { Favorties } from "./pages/Favorties";
import { SnackBarOpen } from "./cmps/SnackBarOpen";
import "./App.css";
import "./assets/style/main.scss";

function App() {
  const [favoritesMovies, setFavoritesMovies] = useState([]);
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  useEffect(() => {
    const favoritesMoviesFromLS =
      JSON.parse(localStorage.getItem("favoritesMovies")) || [];
    setFavoritesMovies(favoritesMoviesFromLS);
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritesMovies", JSON.stringify(favoritesMovies));
  }, [favoritesMovies]);

  // Add Movie To Favorites
  const onSetToFavorties = (movie) => {
    if (
      favoritesMovies.findIndex(
        (favoriteMovie) => favoriteMovie.episode_id === movie.episode_id
      ) !== -1
    )
      return favoritesMovies;
      setFavoritesMovies((favoritesMovies) => [...favoritesMovies, movie]);
      setSnackBarOpen(true)
  };

  // Remove Movie From Favorites
  const onRemoveFromFavorites = (removedMovie) => {
    setFavoritesMovies(
      favoritesMovies.filter(
        (movie) => movie.episode_id !== removedMovie.episode_id
      )
    );
  };

  return (
    <div className="App">
      <Router>
        <Header favoritesMovies={favoritesMovies} />
        <Switch>
          <div className="main-container">
            <Route exact path="/">
              <StarWarsApp onSetToFavorties={onSetToFavorties} />
            </Route>
            <Route exact path="/favorites">
              <Favorties
                onRemoveFromFavorites={onRemoveFromFavorites}
                favoritesMovies={favoritesMovies}
              />
            </Route>
          </div>
        </Switch>
        <SnackBarOpen onClose={()=> setSnackBarOpen(false)} open={snackBarOpen} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
