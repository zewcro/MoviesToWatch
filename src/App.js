import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./Components/MovieList"

function App() {
  const [movies, setMovies] = useState([
    {
      Title: "Star Wars: Episode VI - Return of the Jedi",
      Year: "1983",
      imdbID: "tt0086190",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode VIII - The Last Jedi",
      Year: "2017",
      imdbID: "tt2527336",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars Jedi: Fallen Order",
      Year: "2019",
      imdbID: "tt5691474",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjhhNzNmNGItZGVjYi00N2E5LTliNTktYTMyMGFkZjYzNGEwXkEyXkFqcGdeQXVyMTQ4MjM0MjA@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Jedi Knight II - Jedi Outcast",
      Year: "2002",
      imdbID: "tt0297410",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmNjNzNkZDYtZGExMy00MzhiLWFhNjMtY2ZkMzM2YTAzNzI1XkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_SX300.jpg",
    },
  ]);

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList
         movies={movies} 
         />
      </div>
    </div>
  );
}

export default App;
