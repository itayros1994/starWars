import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";
import "./assets/style/main.scss";
import { StarWarsApp } from "./pages/StarWarsApp";
import { Footer } from "./cmps/Footer";
import { Header } from "./cmps/Header";
import { Favorties } from "./pages/Favorties";

function App() {
  const [favoritesMovies, setFavoritesMovies] = useState([]);

  const onSetToFavorties = (movie) => {
    setFavoritesMovies((favoritesMovies) => [...favoritesMovies, movie]);
    console.log(favoritesMovies);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <div className="main-container">
            <Route exact path="/">
              <StarWarsApp onSetToFavorties={onSetToFavorties} />
            </Route>
            <Route exact path="/favorites">
              <Favorties favoritesMovies={favoritesMovies} />
            </Route>
          </div>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
