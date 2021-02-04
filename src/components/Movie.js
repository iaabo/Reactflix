import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Card, Button, ButtonGroup, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Movie = (movie) => {
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let storedMovie = watchlist.find((o) => o.id === movie.id);

  //disable button
  const watchlistDisabled = storedMovie ? true : false;

  return (
    <div className="d-flex justify-content-between m-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={movie.posterUrl}
          alt={movie.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://images.pexels.com/photos/2672097/pexels-photo-2672097.jpeg?cs=srgb&dl=pexels-markus-spiske-2672097.jpg&fm=jpg";
          }}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <ButtonGroup className="d-flex justify-content-between">
            <Button variant="warning" onClick={handleShow}>
              Info
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton className="movie-title">{movie.title}</Modal.Header>
              <Modal.Body>
                <div>
                  <p>{movie.plot}</p>
                  <p>Director: {movie.director}</p>
                  <p>Year: {movie.year}</p>
                  <p>Runtime: {movie.runtime} min </p>
                  <div style={{ display: "flex" }}>
                    {movie.genres.map((movie) => (
                      <p className="genre">{movie}</p>
                    ))}
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            <Button
              variant="danger"
              disabled={watchlistDisabled}
              onClick={() => addMovieToWatchlist(movie)}
            >
              Add to Watchlist
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Movie;
