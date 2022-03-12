import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./Components/MovieList"
import MovieListHeading from "./Components/MovieListHeading";
import SearchBox from "./Components/SearchBox";
import AddFavourite from "./Components/AddFavourites";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f7fbd6a9`;

    const response = await fetch(url);
    const responseJson = await response.json();

    // si responseJson est un object
    if(responseJson.Search){ 
      // on stock l'objet responseJson.search dans le state via la méthode setMovies
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const addFavouritesMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites (newFavouriteList);
  }

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies"/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}  />
      </div>
      <div className="row">
        <MovieList
         movies={movies} 
         handleFavouritesClick={addFavouritesMovie}
         favouriteComponent={AddFavourite}
         />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourites" />
      </div>
      <div className="row">
        <MovieList 
          movies={favourites}
          handleFavouritesClick
        />
      </div>
    </div>
  );
}

export default App;
