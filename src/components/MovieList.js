import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import HeaderMovie from "../components/HeaderMovie";
import ReactPaginate from "react-paginate";
import { Form } from "react-bootstrap";
import "./Movie.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [moviesPerPage] = useState(6);

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

  // Pagination

  const pagesVisited = currentPage * moviesPerPage;
  const pageCount = Math.ceil(movies.length / moviesPerPage);
  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  //filtering onChange

  return (
    <div>
      <HeaderMovie />
      <div className="container">
        <div className="row justify-content-md-center m-3">
          <Form.Control as="select" custom /* onChange Method*/>
            <option value="" selected disabled hidden> 
              Filter by Genre
            </option>
            {genres.map((genre, index) => (
              <option value={genre} key={index}>
                {genre}
              </option>
            ))} 
          </Form.Control> 
        </div>
        <div className="row justify-content-md-center">
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            marginPagesDisplayed={0}
            pageRangeDisplayed={1}
            breakLabel="..."
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttns"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
        <div className="row justify-content-center">
          {movies
            .slice(pagesVisited, pagesVisited + moviesPerPage)
            .filter((movie) => movie.genre === movie.genre) //call the filteredthing function
            .map((movie) => (
              <Movie {...movie} key={movie.id} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
