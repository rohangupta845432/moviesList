import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MoviesList";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const featchMoviesHandler = async () => {
    setIsLoading(true);
    const responce = await fetch("https://swapi.dev/api/films");
    const data = await responce.json();
    const dummyMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });

    setMovies(dummyMovies);
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <div className="App">
        {isLoading && <p>Loading.....</p>}
        <button className="btn" onClick={featchMoviesHandler}>
          Featch Movies
        </button>
        <MovieList moviesData={movies} />
      </div>
    </React.Fragment>
  );
}

export default App;
