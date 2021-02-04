import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import Modal from "./Modal";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Movie = (movie) => {
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);
  const [isActive, setIsActive] = React.useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

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
            <Button variant="warning" onClick={() => setButtonPopup(true)}>
              Info
            </Button>
            <Modal trigger={buttonPopup} setTrigger={setButtonPopup}>
              <div>
                <p>Plot: {movie.plot}</p>
                <p>Director: {movie.director}</p>
                <p>Year:{movie.year}</p>
                <p>Genre: {movie && movie.genres[0]}</p>
                <p>Duration: {movie.runtime} min </p>
              </div>
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
