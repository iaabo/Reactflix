import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import ReactPaginate from "react-paginate";
import "./Movie.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [moviesPerPage, setMoviePerPage] = useState(9);

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



  const pagesVisited = currentPage * moviesPerPage;

  //change page

  const pageCount = Math.ceil(movies.length / moviesPerPage);
  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttns"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      <div className="row justify-content-md-center">
        {movies
          .slice(pagesVisited, pagesVisited + moviesPerPage)
          .map((movie) => (
            <Movie {...movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};
export default MovieList;
