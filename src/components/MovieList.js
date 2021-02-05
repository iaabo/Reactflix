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
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
    )
      .then((response) => response.json())
      .then((response) => {
        if (!response.errors) {
          setMovies(response.movies);
          setPageCount(Math.ceil(response.movies.length / moviesPerPage))
          console.log(movies);
          setGenres(response.genres);
        } else {
          setMovies([]);
        }
      });
  }, []);

  // Pagination

  const pagesVisited = currentPage * moviesPerPage;

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };


  
  //filtering onChange
  
  const handleChange = (e) => {
    const currentGenre = e.target.value
    // async
    setSelectedGenre(currentGenre);
    
    // sync
    const filteredMovies = movies.filter((movie) =>
    currentGenre !== "" ? movie.genres.includes(currentGenre) : movie
    );
    setPageCount(Math.ceil(filteredMovies.length / moviesPerPage));
  };

  return (
    <div>
      <HeaderMovie />
      <div className="container">
        <div className="row justify-content-md-center m-3">
          <Form.Control as="select" custom onChange={handleChange}>
            <option value="" selected disabled hidden>
              Filter by Genre
            </option>
            <option value=""> Display All</option>
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
            .filter((movie) =>
              selectedGenre !== ""
                ? movie.genres.includes(selectedGenre)
                : movie
            )
            .slice(pagesVisited, pagesVisited + moviesPerPage)
            .map((movie) => (
              <Movie {...movie} key={movie.id} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
