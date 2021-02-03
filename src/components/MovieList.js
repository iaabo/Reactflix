import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import { animateScroll as scroll } from "react-scroll";

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


  
  let onClickUp = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
  
      {movies.map((movie) => (
        <Movie {...movie} key={movie.id} />
      ))}
      <div className="row justifyCenter">
        <button onClick={onClickUp}>Go to top</button>
      </div>
    </div>
  );
};
export default MovieList;
