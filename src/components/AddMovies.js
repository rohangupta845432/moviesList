import React, { useRef } from "react";
import Styles from "./AddMovies.module.css";
const AddMovies = ({ onAddMoviesHandler }) => {
  const titleRef = useRef();
  const openingTextRef = useRef();
  const releaseDateRef = useRef();

  const addMoviesDetails = (e) => {
    e.preventDefault();

    const movies = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };
    onAddMoviesHandler(movies);
  };

  return (
    <form onSubmit={addMoviesDetails}>
      <div className={Styles.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef}></input>
      </div>

      <div className={Styles.control}>
        <label htmlFor="opening_text">Opening Text</label>
        <textarea rows={4} id="opening_text" ref={openingTextRef}></textarea>
      </div>

      <div className={Styles.control}>
        <label htmlFor="release_date">Release Date</label>
        <input type="text" id="release_date" ref={releaseDateRef}></input>
      </div>
      <button type="submit" className="btn">
        Add Movies
      </button>
    </form>
  );
};

export default AddMovies;
