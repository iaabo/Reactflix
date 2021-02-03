import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import Modal from "./Modal";

const Movie = (movie) => {
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);
  const [isActive, setIsActive] = React.useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  let storedMovie = watchlist.find((o) => o.id === movie.id);

  //disable button
  const watchlistDisabled = storedMovie ? true : false;

  return (
    <div>
      <img
        src={movie.posterUrl}
        alt={movie.title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://images.pexels.com/photos/2672097/pexels-photo-2672097.jpeg?cs=srgb&dl=pexels-markus-spiske-2672097.jpg&fm=jpg";
        }}
        style={{ width: "200px", height: "300px" }}
      />
      <h1>{movie.title}</h1>
      <button onClick={() => setButtonPopup(true)}>Info</button>
      <Modal trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div>
          <p>Plot: {movie.plot}</p>
          <p>Director: {movie.director}</p>
          <p>Year:{movie.year}</p>
          <p>Genre: {movie && movie.genres[0]}</p>
          <p>Duration: {movie.runtime} min </p>
        </div>
      </Modal>
      <button
        disabled={watchlistDisabled}
        onClick={() => addMovieToWatchlist(movie)}
      >
        Add to Watchlist
      </button>
    </div>
  );
};

export default Movie;
