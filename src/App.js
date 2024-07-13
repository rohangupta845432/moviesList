import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MoviesList";
import AddMovies from "./components/AddMovies";
import Card from "./components/UI/Card";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    featchMoviesHandler();
  }, []);

  const featchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const responce = await fetch(
        "https://react-http-4f649-default-rtdb.firebaseio.com/movies.json"
      );
      if (!responce.ok) {
        throw new Error("Something Went Wrong");
      }
      const data = await responce.json();

      console.log(data);

      const moviesData = [];

      for (const key in data) {
        moviesData.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      // const dummyMovies = data.results.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });

      setMovies(moviesData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const addMoviesHandler = async (movies) => {
    const responce = await fetch(
      "https://react-http-4f649-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movies),
        header: {
          "Conttent-Type": "application/json",
        },
      }
    );
    const data = await responce.json;
    console.log(data);
  };

  const deleteMoviesHandler = (id) => {
    console.log(id);
    fetch(
      "https://react-http-4f649-default-rtdb.firebaseio.com/movies.json/" + id,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <React.Fragment>
      <div className="App">
        <Card>
          <AddMovies onAddMoviesHandler={addMoviesHandler} />
        </Card>
        <Card>
          {isLoading && <p>Loading.....</p>}
          {error && <p>{error}</p>}
          <button className="btn" onClick={featchMoviesHandler}>
            Featch Movies
          </button>
          <MovieList moviesData={movies} onDelete={deleteMoviesHandler} />
        </Card>
      </div>
    </React.Fragment>
  );
}

export default App;
