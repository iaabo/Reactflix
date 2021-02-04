import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import "./Movie.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
    )
      .then((response) => response.json())
      .then((response) => {
        if (!response.errors) {
          setMovies(response.movies);
          console.log(movies);
          setGenres(response.genres);
        } else {
          setMovies([]);
        }
      });
  }, []);

  return (
    <div className="container">
       
      <div className="row justify-content-md-center">
        {movies.map((movie) => (
          <Movie {...movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};
export default MovieList;
