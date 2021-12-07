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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const favoritesMoviesFromLS =
      JSON.parse(localStorage.getItem("favoritesMovies")) || [];
    setFavoritesMovies(favoritesMoviesFromLS);
  }, []);

  // Add Movie To Favorites
  const onSetToFavorties = (movie) => {
    if (
      favoritesMovies.findIndex(
        (favoriteMovie) => favoriteMovie.title === movie.title
      ) !== -1
    )
      return favoritesMovies;
    handleClick();
    handleClose();
    setFavoritesMovies([...favoritesMovies, movie]);
    localStorage.setItem("favoritesMovies", JSON.stringify(favoritesMovies));
  };

  // Remove Movie From Favorites
  const onRemoveFromFavorites = (removedMovie) => {
    setFavoritesMovies(
      favoritesMovies.filter((movie) => movie.title !== removedMovie.title)
    );
    localStorage.setItem("favoritesMovies", JSON.stringify(favoritesMovies));
  };

  // Closing And Opening The Snack Bar
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
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
        <SnackBarOpen open={open} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
