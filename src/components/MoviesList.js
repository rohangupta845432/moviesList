import React from "react";
import Movie from "./Movie";
const MovieList = (props) => {
  return (
    <div>
      {props.moviesData.map((movie) => {
        return (
          <Movie
            key={movie.id}
            title={movie.title}
            openingText={movie.openingText}
            releaseDate={movie.releaseDate}
          ></Movie>
        );
      })}
    </div>
  );
};

export default MovieList;
