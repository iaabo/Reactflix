import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Card, Button, ButtonGroup } from "react-bootstrap";

const WatchedMovie = ({ movie, type }) => {
  const { removeMovieFromWatchlist } = useContext(GlobalContext);

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
          <Button className="d-flex justify-content-between"
            variant="danger"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            Remove from Watchlist
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WatchedMovie;
