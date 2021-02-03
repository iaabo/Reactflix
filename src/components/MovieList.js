import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.movies);
        setGenres(response.genres);
      });
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <Movie {...movie} />
      ))}
    </div>
  );
};
export default MovieList;
