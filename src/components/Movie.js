import React from "react";
import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <div className={classes.movie}>
      <h3>{props.title}</h3>
      <p>{props.openingText}</p>
      <p>{props.releaseDate}</p>
      <button
        className="btn"
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Movie;
