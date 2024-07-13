import React from "react";
import Movie from "./Movie";
const MovieList = (props) => {
  return (
    <div>
      {props.moviesData.map((movie) => {
        return (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            openingText={movie.openingText}
            releaseDate={movie.releaseDate}
            onDelete={props.onDelete}
          ></Movie>
        );
      })}
    </div>
  );
};

export default MovieList;
